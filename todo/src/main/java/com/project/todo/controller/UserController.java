package com.project.todo.controller;

import com.project.todo.model.User;
import com.project.todo.services.UserServices;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
@CrossOrigin("*")
public class UserController {
    private final UserServices userService;

    public UserController(UserServices userService) {
        this.userService = userService;
    }

    @PostMapping("/signup")
    public User signup(@RequestBody User user) {
        return userService.signup(user);
    }

    @PostMapping("/login")
    public User login(@RequestBody User user) {
        return userService.login(user.getUserName(), user.getPassword());
    }
}
