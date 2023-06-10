
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Membership from "./constant/signupPage/Membership";
import Login from "./constant/sigininPage/Login";
import Todo from "./constant/TodoPage/Todo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Membership />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </Router>
  );
}

export default App;
