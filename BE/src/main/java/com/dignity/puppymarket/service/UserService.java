package com.dignity.puppymarket.service;

import com.dignity.puppymarket.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserResponseDto getUser(Long id) {
        return userRepository.findById(id);
    }
}
