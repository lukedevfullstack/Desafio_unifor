package com.academic.school.service;

import com.academic.school.dto.StudentRequest;
import com.academic.school.dto.StudentResponse;
import com.academic.school.entity.Student;
import com.academic.school.exception.NotFoundException;
import com.academic.school.mapper.StudentMapper;
import com.academic.school.repository.StudentRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@ApplicationScoped
@RequiredArgsConstructor
public class StudentService {

    private final StudentRepository studentRepository;

    public List<StudentResponse> listAll() {
        return studentRepository.listAll().stream()
                .map(StudentMapper::toResponse)
                .collect(Collectors.toList());
    }

    public StudentResponse findById(Long id) {
        Student student = studentRepository.findByIdOptional(id)
                .orElseThrow(() -> new NotFoundException("Student not found"));
        return StudentMapper.toResponse(student);
    }

    @Transactional
    public StudentResponse create(StudentRequest request) {
        Student student = StudentMapper.toEntity(request);
        studentRepository.persist(student);
        return StudentMapper.toResponse(student);
    }

    @Transactional
    public StudentResponse update(Long id, StudentRequest request) {
        Student student = studentRepository.findByIdOptional(id)
                .orElseThrow(() -> new NotFoundException("Student not found"));
        StudentMapper.updateEntity(student, request);
        return StudentMapper.toResponse(student);
    }

    @Transactional
    public void delete(Long id) {
        Student student = studentRepository.findByIdOptional(id)
                .orElseThrow(() -> new NotFoundException("Student not found"));
        studentRepository.delete(student);
    }
}
