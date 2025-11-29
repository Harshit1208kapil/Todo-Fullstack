const BASE_URL = "http://localhost:8080/api/todos";

export const getTodos = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const getTodoById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  return res.json();
};

export const createTodo = async (todo) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });
  return res.json();
};

export const updateTodo = async (id, todo) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });
  return res.json();
};

export const deleteTodo = async (id) => {
  await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
};
