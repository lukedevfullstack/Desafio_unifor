package com.academic.school.dto;

import lombok.Data;

@Data
public class StudentRequest {
    private String fullName;
    private String registrationNumber;
    private String email;
}
