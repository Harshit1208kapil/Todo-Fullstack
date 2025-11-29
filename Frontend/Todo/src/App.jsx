import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            user ? <Navigate to="/todos" /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/login"
          element={<LoginPage setUser={setUser} />}
        />
        <Route
          path="/signup"
          element={<SignUpPage setUser={setUser} />}
        />
        <Route
          path="/todos"
          element={user ? <TodoPage /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
