package com.dignity.puppymarket.service;

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
