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
import { useNavigate } from 'react-router-dom';
import axiosinstance from '../../api/AxiosInstance';
import { NeedpublicAuth } from '../../components/auth/AuthCondition';

const Todo = () => {
  NeedpublicAuth()
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [EditContents, setEditContents] = useState(false);
  const [ModifyIndex, setModifyIndex] = useState(-1);
  const [TextModify, setTextModify] = useState('');
  const navigate = useNavigate()
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  //새로운 Todo를 생성하여 서버에 전송하는 함수. 
  //입력된 input 값을 createTodo 함수의 파라미터로 사용하여 Todo 생성 요청을 보냅니다. 
  //응답으로 받은 데이터를 todos 상태에 추가하고, input을 초기화합니다. 
  //생성된 todos를 로컬 스토리지에 저장합니다.
  const handleTodoSubmit = async () => {
    if (input) {
   //입력된 사항이 파라미터에 담김
      try {
        const newTodo = input;
        const response = await createTodo(newTodo); // Todo 생성 요청
        setTodos([...todos, response]); // 응답 데이터를 todos에 추가
        setInput('');

        // 변경된 todos를 localStorage에 저장
      } catch (error) {
        console.error('Todo 생성 요청 실패:', error);
      }
    }
  };
  const LogoutUse = () =>{
    localStorage.removeItem("jwtToken");
    alert("로그아웃 완료")
    navigate('/signin')
  }

  useEffect(() => {
    const fetchInitialTodos = async () => {
      try {
        // 토큰이 로컬 스토리지에 저장된 후에 API 요청을 수행합니다.
        const accessToken = localStorage.getItem('jwtToken');
        axiosinstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  
        const response = await axiosinstance.get('todos');
        setTodos(response.data);
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
      <button onClick={LogoutUse}>로그아웃</button>
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