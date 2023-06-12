import axiosinstance from "./AxiosInstance";


// Todo 생성 요청
export const createTodo = async (todo) => {
  console.log(todo)
  try {
    const response = await axiosinstance.post('/todos', { todo });
    return response.data;
  } catch (error) {
    console.error('Todo 생성 요청 실패:', error);
    throw error;
  }
};

// Todo 목록 조회 요청
export const getTodos = async () => {
  try {
    const response = await axiosinstance.get('/todos');
    return response.data;
  } catch (error) {
    console.error('Todo 목록 조회 요청 실패:', error);
    throw error;
  }
};

// Todo 업데이트 요청
export const updateTodo = async (id, todo, isCompleted) => {
  try {
    const response = await axiosinstance.put(`/todos/${id}`, { todo, isCompleted });
    return response.data;
  } catch (error) {
    console.error('Todo 업데이트 요청 실패:', error);
    throw error;
  }
};

// Todo 삭제 요청
export const deleteTodo = async (id) => {
  try {
    await axiosinstance.delete(`/todos/${id}`);
  } catch (error) {
    console.error('Todo 삭제 요청 실패:', error);
    throw error;
  }
};