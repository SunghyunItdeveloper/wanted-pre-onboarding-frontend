import React, { useEffect, useState } from 'react';
import {
  TodoContainer,
  TodoWrapper,
  TodoItem,
  TodoInput,
  TodoButton,
  ModifyInput,
  SubmitButton,
  CancelButton,
} from './Todo.style';

// API 함수 import
import { createTodo, getTodos, updateTodo, deleteTodo } from '../../api/api';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [EditContents, setEditContents] = useState(false);
  const [ModifyIndex, setModifyIndex] = useState(-1);
  const [TextModify, setTextModify] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleTodoSubmit = async () => {
    if (input) {
      console.log(input)
      try {
        const newTodo = { todo: input };
        const response = await createTodo(newTodo); // Todo 생성 요청
        setTodos([...todos, response]); // 응답 데이터를 todos에 추가
        setInput('');

        // 변경된 todos를 localStorage에 저장
        localStorage.setItem('todos', JSON.stringify([...todos, response]));
      } catch (error) {
        console.error('Todo 생성 요청 실패:', error);
      }
    }
  };

  useEffect(() => {
    const fetchInitialTodos = async () => {
      try {
        const todos = await getTodos(); // Todo 목록 조회 요청
        setTodos(todos);
      } catch (error) {
        console.error('Todo 목록 조회 요청 실패:', error);
      }
    };

    fetchInitialTodos();
  }, []);

  const handleTodoDelete = async (index) => {
    try {
      const todoId = todos[index].id;
      await deleteTodo(todoId); // Todo 삭제 요청
      const updatedTodos = todos.filter((_, i) => i !== index);
      setTodos(updatedTodos);
    } catch (error) {
      console.error('Todo 삭제 요청 실패:', error);
    }
  };

  const handleTodoToggle = async (index) => {
    try {
      const todoId = todos[index].id;
      const updatedTodo = {
        ...todos[index],
        isCompleted: !todos[index].isCompleted,
      };
      await updateTodo(todoId, updatedTodo.todo, updatedTodo.isCompleted); // Todo 업데이트 요청
      const updatedTodos = [...todos];
      updatedTodos[index].isCompleted = !updatedTodos[index].isCompleted;
      setTodos(updatedTodos);
    } catch (error) {
      console.error('Todo 업데이트 요청 실패:', error);
    }
  };

  const handleTodoModify = (index, text) => {
    setEditContents(true);
    setModifyIndex(index);
    setTextModify(text);
  };

  const handleModifyInputChange = (e) => {
    setTextModify(e.target.value);
  };

  const handleModifySubmit = async () => {
    if (TextModify) {
      try {
        const todoId = todos[ModifyIndex].id;
        const updatedTodo = await updateTodo(todoId, TextModify, todos[ModifyIndex].isCompleted); // Todo 업데이트 요청
        const updatedTodos = [...todos];
        updatedTodos[ModifyIndex] = updatedTodo;
        setTodos(updatedTodos);
        setEditContents(false);
        setModifyIndex(-1);
        setTextModify('');
      } catch (error) {
        console.error('Todo 업데이트 요청 실패:', error);
      }
    }
  };

  const handleModifyCancel = () => {
    setEditContents(false);
    setModifyIndex(-1);
    setTextModify('');
  };

  return (
    <TodoContainer>
      <TodoWrapper>
        <h2>TodoList</h2>
        <div>
          <TodoInput
            onChange={handleInputChange}
            value={input}
            data-testid="new-todo-input"
          />
          <TodoButton onClick={handleTodoSubmit} data-testid="new-todo-add-button">
            추가
          </TodoButton>
          <ul>
            {todos.map((todo, index) => (
              <TodoItem key={todo.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={todo.isCompleted}
                    onChange={() => handleTodoToggle(index)}
                  />
                  <span>{todo.todo}</span>
                </label>
                {!EditContents && (
                  <>
                    <button
                      data-testid="modify-button"
                      onClick={() => handleTodoModify(index, todo.todo)}
                    >
                      수정
                    </button>
                    <button
                      data-testid="delete-button"
                      onClick={() => handleTodoDelete(index)}
                    >
                      삭제
                    </button>
                  </>
                )}
              </TodoItem>
            ))}
          </ul>
          {EditContents && (
            <div>
              <ModifyInput
                data-testid="modify-input"
                onChange={handleModifyInputChange}
                value={TextModify}
              />
              <SubmitButton data-testid="submit-button" onClick={handleModifySubmit}>
                제출
              </SubmitButton>
              <CancelButton data-testid="cancel-button" onClick={handleModifyCancel}>
                취소
              </CancelButton>
            </div>
          )}
        </div>
      </TodoWrapper>
    </TodoContainer>
  );
};

export default Todo;