package com.example.service;

import com.academic.entity.User;
import com.academic.repository.UserRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.transaction.Transactional;
import java.util.List;

@ApplicationScoped
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public List<User> listAll() {
        return userRepository.listAll();
    }

    public User findById(Long id) {
        return userRepository.findById(id);
    }

    @Transactional
    public void create(User user) {
        userRepository.persist(user);
    }

    @Transactional
    public void update(Long id, User updated) {
        User user = userRepository.findById(id);
        if(user != null){
            user.name = updated.name;
            user.email = updated.email;
            user.role = updated.role;
            user.password = updated.password;
        }
    }

    @Transactional
    public void delete(Long id) {
        userRepository.deleteById(id);
    }
}
