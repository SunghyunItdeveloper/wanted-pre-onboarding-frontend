
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
import Membership from "./pages/signupPage/Membership";
import Login from "./pages/sigininPage/Login";
import Todo from "./pages/TodoPage/Todo";
import GlobalStyle from "./styles/globalstyles";

function App() {

  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Navigate to='/signin' />} />
        <Route path="/signup" element={<Membership />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </Router>
  );
}

export default App;
