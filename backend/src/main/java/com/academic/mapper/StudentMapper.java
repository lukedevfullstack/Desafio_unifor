package com.academic.school.mapper;

import com.academic.school.dto.StudentRequest;
import com.academic.school.dto.StudentResponse;
import com.academic.school.entity.Student;

public class StudentMapper {

    public static Student toEntity(StudentRequest request) {
        return Student.builder()
                .fullName(request.getFullName())
                .registrationNumber(request.getRegistrationNumber())
                .email(request.getEmail())
                .active(true)
                .build();
    }

    public static StudentResponse toResponse(Student student) {
        return StudentResponse.builder()
                .id(student.getId())
                .fullName(student.getFullName())
                .registrationNumber(student.getRegistrationNumber())
                .email(student.getEmail())
                .active(student.isActive())
                .build();
    }

    public static void updateEntity(Student student, StudentRequest request) {
        student.setFullName(request.getFullName());
        student.setRegistrationNumber(request.getRegistrationNumber());
        student.setEmail(request.getEmail());
    }
}
