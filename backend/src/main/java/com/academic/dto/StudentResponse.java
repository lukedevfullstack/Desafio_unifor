package com.academic.school.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class StudentResponse {
    private Long id;
    private String fullName;
    private String registrationNumber;
    private String email;
    private boolean active;
}
