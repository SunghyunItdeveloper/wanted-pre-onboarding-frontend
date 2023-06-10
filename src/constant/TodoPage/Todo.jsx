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

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [EditContents, setEditContents] = useState(false);
  const [ModifyIndex, setModifyIndex] = useState(-1);
  const [TextModify, setTextModify] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleTodoSubmit = () => {
    if (input) {
      const newTodo = { text: input, completed: false };
      setTodos([...todos, newTodo]);
      setInput('');
  
      // 변경된 todos를 localStorage에 저장
      localStorage.setItem('todos', JSON.stringify([...todos, newTodo])); 
    }
  };
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const handleTodoDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleTodoToggle = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const handleTodoModify = (index, text) => {
    setEditContents(true);
    setModifyIndex(index);
    setTextModify(text);
  };

  const handleModifyInputChange = (e) => {
    setTextModify(e.target.value);
  };

  const handleModifySubmit = () => {
    if (TextModify) {
      const updatedTodos = [...todos];
      updatedTodos[ModifyIndex].text = TextModify;
      setTodos(updatedTodos);
      setEditContents(false);
      setModifyIndex(-1);
      setTextModify('');
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
              <TodoItem key={index}>
                <label>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleTodoToggle(index)}
                  />
                  <span>{todo.text}</span>
                </label>
                {!EditContents && (
                  <>
                    <button
                      data-testid="modify-button"
                      onClick={() => handleTodoModify(index, todo.text)}
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