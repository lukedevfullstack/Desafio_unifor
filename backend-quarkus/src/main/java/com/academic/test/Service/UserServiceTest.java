package com.academic.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import com.example.entity.User;
import com.example.entity.User.Role;
import com.example.repository.UserRepository;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

public class UserServiceTest {

    private UserRepository userRepository;
    private UserService userService;

    @BeforeEach
    void setup() {
        MockitoAnnotations.openMocks(this);
        userRepository = mock(UserRepository.class);
        userService = new UserService(userRepository);
    }

    @Test
    void listAllShouldReturnUsers() {
        User u1 = new User();
        u1.name = "User1";
        u1.email = "u1@example.com";
        u1.role = Role.ADMIN;

        User u2 = new User();
        u2.name = "User2";
        u2.email = "u2@example.com";
        u2.role = Role.STUDENT;

        when(userRepository.listAll()).thenReturn(Arrays.asList(u1, u2));

        List<User> users = userService.listAll();
        assertEquals(2, users.size());
        verify(userRepository).listAll();
    }

    @Test
    void createShouldPersistUser() {
        User user = new User();
        user.name = "User3";
        user.email = "u3@example.com";
        user.role = Role.PROFESSOR;

        doNothing().when(userRepository).persist(user);

        userService.create(user);

        verify(userRepository).persist(user);
    }

    // Mais testes podem ser adicionados para update, delete, findById etc.
}
