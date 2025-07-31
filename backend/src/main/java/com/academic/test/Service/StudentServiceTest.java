package com.academic.service;

import com.academic.dto.StudentDTO;
import com.academic.entity.Student;
import com.academic.repository.StudentRepository;
import io.quarkus.test.junit.QuarkusTest;
import jakarta.inject.Inject;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;

@QuarkusTest
class StudentServiceTest {

    @Inject
    StudentService studentService;

    StudentRepository studentRepository = mock(StudentRepository.class);

    @Test
    void testCreateStudent() {
        StudentDTO dto = new StudentDTO();
        dto.name = "João Pedro";
        dto.email = "joao.pedro@example.com";
        dto.enrollmentNumber = "20250003";

        Student student = new Student(dto.name, dto.email, dto.enrollmentNumber);

        when(studentRepository.persist(any(Student.class))).thenReturn(null);

        studentService.create(dto);

        verify(studentRepository, times(1)).persist(any(Student.class));
    }

    @Test
    void testFindById() {
        Student student = new Student("Ana", "ana@example.com", "20250002");
        student.id = 1L;

        when(studentRepository.findByIdOptional(1L)).thenReturn(Optional.of(student));

        Optional<Student> result = studentRepository.findByIdOptional(1L);

        assertThat(result).isPresent();
        assertThat(result.get().name).isEqualTo("Ana");
    }
}
