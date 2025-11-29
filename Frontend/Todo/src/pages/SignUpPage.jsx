import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../api/UserApi";

export default function SignUpPage({setUser}) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const user = await signupUser({ userName, password });
      setUser(user); // set logged-in user
      navigate("/todos"); // redirect to todos
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <form
        onSubmit={handleSignup}
        className="bg-white p-8 rounded-xl shadow-lg w-96"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="border p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          className="bg-green-600 text-white p-3 w-full rounded-lg hover:bg-green-700 transition"
        >
          Sign Up
        </button>
        <p className="mt-4 text-sm text-gray-600 text-center">
          Already have an account? <span className="text-green-600 cursor-pointer" onClick={() => navigate("/login")}>Login</span>
        </p>
      </form>
    </div>
  );
}