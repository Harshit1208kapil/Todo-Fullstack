package com.project.todo.services;

import com.project.todo.model.User;
import com.project.todo.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserServices {

    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User signup(User user) {
        return userRepository.save(user);
    }

    @Override
    public User login(String username, String password) {
        User user = userRepository.findByUserName(username);

        if (user == null) {
            throw new RuntimeException("Invalid username or password");
        }
        if (user.getPassword().equals(password)) {
            return user;
        } else {
            throw new RuntimeException("Invalid username or password");
        }
    }
}
