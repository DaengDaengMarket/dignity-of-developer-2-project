package com.dignity.puppymarket.service;

import com.dignity.puppymarket.dto.UserResponseDto;
import com.dignity.puppymarket.error.UserNotFoundException;
import com.dignity.puppymarket.repository.UserRepository;
import javassist.NotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserResponseDto getUser(Long id) {
        return userRepository.findById(id)
                .map(UserResponseDto::of)
                .orElseThrow(() -> new UserNotFoundException(id));
    }
}
