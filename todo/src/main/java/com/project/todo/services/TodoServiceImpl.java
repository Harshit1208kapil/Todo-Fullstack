package com.project.todo.services;

import com.project.todo.model.Todo;
import com.project.todo.repository.TodoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoServiceImpl implements TodoServices {

    private final TodoRepository todoRepository;

    public TodoServiceImpl(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    @Override
    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }

    @Override
    public Todo getTodoById(Long id) {
        return todoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Todo not found with id: " + id));
    }

    @Override
    public Todo createTodo(Todo todo) {
        return todoRepository.save(todo);
    }

    @Override
    public Todo updateTodo(Long id, Todo updatedTodo) {
        Todo existing = getTodoById(id);

        existing.setTitle(updatedTodo.getTitle());
        existing.setDescription(updatedTodo.getDescription());
        existing.setCompleted(updatedTodo.isCompleted());

        return todoRepository.save(existing);
    }

    @Override
    public void deleteTodo(Long id) {
        todoRepository.deleteById(id);
    }
}
