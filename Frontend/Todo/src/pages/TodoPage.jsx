import React, { useEffect, useState } from "react";
import { getTodos, createTodo, updateTodo, deleteTodo } from "../api/TodoApi";
import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";

const TodoPage = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Wrap async function inside effect
    const fetchTodos = async () => {
      const data = await getTodos();
      setTodos(data);
    };

    fetchTodos(); // Call the async function
  }, []); // Empty dependency array => runs once on mount

  const handleAdd = async (todo) => {
    await createTodo(todo);
    const data = await getTodos();
    setTodos(data);
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    const data = await getTodos();
    setTodos(data);
  };

  const handleToggle = async (todo) => {
    await updateTodo(todo.id, { ...todo, completed: !todo.completed });
    const data = await getTodos();
    setTodos(data);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>
      <TodoForm onSubmit={handleAdd} />
      <div>
        {todos.length === 0 ? (
          <p className="text-center text-gray-500">No todos yet!</p>
        ) : (
          todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onDelete={handleDelete} onToggle={handleToggle} />
          ))
        )}
      </div>
    </div>
  );
};

export default TodoPage;
