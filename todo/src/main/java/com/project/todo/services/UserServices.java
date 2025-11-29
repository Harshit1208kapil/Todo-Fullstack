package com.project.todo.services;

import com.project.todo.model.User;

public interface UserServices {
    User signup (User user);
    User login (String username, String password);
}
