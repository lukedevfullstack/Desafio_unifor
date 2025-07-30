package com.academic.service;

import com.academic.entity.CurriculumMatrix;
import com.academic.repository.CurriculumMatrixRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class CurriculumMatrixServiceTest {

    private CurriculumMatrixRepository repository;
    private CurriculumMatrixService service;

    @BeforeEach
    void setup() {
        repository = mock(CurriculumMatrixRepository.class);
        service = new CurriculumMatrixService(repository);
    }

    @Test
    void listAllShouldReturnMatrices() {
        CurriculumMatrix m1 = new CurriculumMatrix();
        CurriculumMatrix m2 = new CurriculumMatrix();

        when(repository.listAll()).thenReturn(Arrays.asList(m1, m2));

        List<CurriculumMatrix> matrices = service.listAll();
        assertEquals(2, matrices.size());
        verify(repository).listAll();
    }

    @Test
    void createShouldPersistMatrix() {
        CurriculumMatrix matrix = new CurriculumMatrix();

        doNothing().when(repository).persist(matrix);

        service.create(matrix);

        verify(repository).persist(matrix);
    }
}
