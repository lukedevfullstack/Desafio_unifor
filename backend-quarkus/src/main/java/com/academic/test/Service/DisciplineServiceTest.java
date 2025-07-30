package com.academic.service;

import com.academic.entity.Discipline;
import com.academic.repository.DisciplineRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class DisciplineServiceTest {

    private DisciplineRepository disciplineRepository;
    private DisciplineService disciplineService;

    @BeforeEach
    void setup() {
        disciplineRepository = mock(DisciplineRepository.class);
        disciplineService = new DisciplineService(disciplineRepository);
    }

    @Test
    void listAllShouldReturnDisciplines() {
        Discipline d1 = new Discipline();
        d1.name = "Discipline 1";
        Discipline d2 = new Discipline();
        d2.name = "Discipline 2";

        when(disciplineRepository.listAll()).thenReturn(Arrays.asList(d1, d2));

        List<Discipline> disciplines = disciplineService.listAll();
        assertEquals(2, disciplines.size());
        verify(disciplineRepository).listAll();
    }

    @Test
    void createShouldPersistDiscipline() {
        Discipline discipline = new Discipline();
        discipline.name = "New Discipline";

        doNothing().when(disciplineRepository).persist(discipline);

        disciplineService.create(discipline);

        verify(disciplineRepository).persist(discipline);
    }
}
