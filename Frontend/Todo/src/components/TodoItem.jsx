import React from "react";

const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <div className="flex justify-between items-center p-4 border rounded mb-2">
      <div>
        <h3 className={`text-lg font-bold ${todo.completed ? "line-through text-gray-400" : ""}`}>
          {todo.title}
        </h3>
        <p className={`${todo.completed ? "line-through text-gray-400" : ""}`}>
          {todo.description}
        </p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onToggle(todo)}
          className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
        >
          {todo.completed ? "Undo" : "Complete"}
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
