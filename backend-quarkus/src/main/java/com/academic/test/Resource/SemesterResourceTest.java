package com.academic.resource;

import com.academic.entity.Semester;
import com.academic.service.SemesterService;
import jakarta.ws.rs.core.Response;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class SemesterResourceTest {

    private SemesterService semesterService;
    private SemesterResource semesterResource;

    @BeforeEach
    void setup() {
        semesterService = mock(SemesterService.class);
        semesterResource = new SemesterResource();
        semesterResource.semesterService = semesterService;
    }

    @Test
    void listAllShouldReturnSemesters() {
        Semester s1 = new Semester();
        s1.name = "Semester 1";
        Semester s2 = new Semester();
        s2.name = "Semester 2";

        when(semesterService.listAll()).thenReturn(Arrays.asList(s1, s2));

        List<Semester> semesters = semesterResource.listAll();
        assertEquals(2, semesters.size());
        verify(semesterService).listAll();
    }

    @Test
    void createShouldReturnCreatedResponse() {
        Semester semester = new Semester();
        semester.name = "New Semester";

        doNothing().when(semesterService).create(semester);

        Response response = semesterResource.create(semester);
        assertEquals(Response.Status.CREATED.getStatusCode(), response.getStatus());
        verify(semesterService).create(semester);
    }
}
