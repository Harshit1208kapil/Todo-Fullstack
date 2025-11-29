import React, { useState } from "react";

const TodoForm = ({ onSubmit, initialData = { title: "", description: "" } }) => {
  const [title, setTitle] = useState(initialData.title);
  const [description, setDescription] = useState(initialData.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    onSubmit({ title, description, completed: false });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex flex-col gap-2">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-green-500 text-white p-2 rounded hover:bg-green-600">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
