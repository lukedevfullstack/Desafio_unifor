package com.academic.service;

import com.academic.entity.Semester;
import com.academic.repository.SemesterRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class SemesterServiceTest {

    private SemesterRepository semesterRepository;
    private SemesterService semesterService;

    @BeforeEach
    void setup() {
        semesterRepository = mock(SemesterRepository.class);
        semesterService = new SemesterService(semesterRepository);
    }

    @Test
    void listAllShouldReturnSemesters() {
        Semester s1 = new Semester();
        s1.name = "Semester 1";
        Semester s2 = new Semester();
        s2.name = "Semester 2";

        when(semesterRepository.listAll()).thenReturn(Arrays.asList(s1, s2));

        List<Semester> semesters = semesterService.listAll();
        assertEquals(2, semesters.size());
        verify(semesterRepository).listAll();
    }

    @Test
    void createShouldPersistSemester() {
        Semester semester = new Semester();
        semester.name = "New Semester";

        doNothing().when(semesterRepository).persist(semester);

        semesterService.create(semester);

        verify(semesterRepository).persist(semester);
    }
}
