package com.academic.resource;

import com.academic.entity.CurriculumMatrix;
import com.academic.service.CurriculumMatrixService;
import jakarta.ws.rs.core.Response;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class CurriculumMatrixResourceTest {

    private CurriculumMatrixService service;
    private CurriculumMatrixResource resource;

    @BeforeEach
    void setup() {
        service = mock(CurriculumMatrixService.class);
        resource = new CurriculumMatrixResource();
        resource.matrixService = service;
    }

    @Test
    void listAllShouldReturnMatrices() {
        CurriculumMatrix m1 = new CurriculumMatrix();
        CurriculumMatrix m2 = new CurriculumMatrix();

        when(service.listAll()).thenReturn(Arrays.asList(m1, m2));

        List<CurriculumMatrix> matrices = resource.listAll();
        assertEquals(2, matrices.size());
        verify(service).listAll();
    }

    @Test
    void createShouldReturnCreatedResponse() {
        CurriculumMatrix matrix = new CurriculumMatrix();

        doNothing().when(service).create(matrix);

        Response response = resource.create(matrix);
        assertEquals(Response.Status.CREATED.getStatusCode(), response.getStatus());
        verify(service).create(matrix);
    }
}
