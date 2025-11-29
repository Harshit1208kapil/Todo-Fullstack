import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/UserApi";

export default function LoginPage({setUser}) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await loginUser({ userName, password, email });
      setUser(user); // set logged-in user
      navigate("/todos"); // redirect to todos
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-lg w-96"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="border p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-3 w-full rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </button>
        <p className="mt-4 text-sm text-gray-600 text-center">
          Don't have an account? <span className="text-blue-600 cursor-pointer" onClick={() => navigate("/signup")}>Sign Up</span>
        </p>
      </form>
    </div>
  );
}