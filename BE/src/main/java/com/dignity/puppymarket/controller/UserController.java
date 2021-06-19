package com.dignity.puppymarket.controller;

import com.dignity.puppymarket.dto.UserResponseDto;
import com.dignity.puppymarket.service.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/{id}")
    public UserResponseDto detail(@PathVariable Long id) {
        return userService.getUser(id);
    }
}
