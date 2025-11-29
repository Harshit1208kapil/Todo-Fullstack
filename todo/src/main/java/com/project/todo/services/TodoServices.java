package com.project.todo.services;

import com.project.todo.model.Todo;
import java.util.List;

public interface TodoServices{

    List<Todo> getAllTodos();
    Todo getTodoById(Long id);
    Todo createTodo(Todo todo);
    Todo updateTodo(Long id, Todo todo);
    void deleteTodo(Long id);
}
