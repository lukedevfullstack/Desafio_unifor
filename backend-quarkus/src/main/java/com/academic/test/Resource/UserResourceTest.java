package com.academic.resource;

import com.academic.entity.User;
import com.academic.entity.User.Role;
import com.academic.service.UserService;
import jakarta.ws.rs.core.Response;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class UserResourceTest {

    private UserService userService;
    private UserResource userResource;

    @BeforeEach
    void setup() {
        userService = mock(UserService.class);
        userResource = new UserResource();
        userResource.userService = userService;
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

        when(userService.listAll()).thenReturn(Arrays.asList(u1, u2));

        List<User> users = userResource.listAll();
        assertEquals(2, users.size());
        verify(userService).listAll();
    }

    @Test
    void createShouldReturnCreatedResponse() {
        User user = new User();
        user.name = "User3";
        user.email = "u3@example.com";
        user.role = Role.PROFESSOR;

        doNothing().when(userService).create(user);

        Response response = userResource.create(user);
        assertEquals(Response.Status.CREATED.getStatusCode(), response.getStatus());
        verify(userService).create(user);
    }
}