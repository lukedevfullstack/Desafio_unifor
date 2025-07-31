package com.academic.resource;

import com.academic.entity.Discipline;
import com.academic.service.DisciplineService;
import jakarta.ws.rs.core.Response;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class DisciplineResourceTest {

    private DisciplineService disciplineService;
    private DisciplineResource disciplineResource;

    @BeforeEach
    void setup() {
        disciplineService = mock(DisciplineService.class);
        disciplineResource = new DisciplineResource();
        disciplineResource.disciplineService = disciplineService;
    }

    @Test
    void listAllShouldReturnDisciplines() {
        Discipline d1 = new Discipline();
        d1.name = "Discipline 1";
        Discipline d2 = new Discipline();
        d2.name = "Discipline 2";

        when(disciplineService.listAll()).thenReturn(Arrays.asList(d1, d2));

        List<Discipline> disciplines = disciplineResource.listAll();
        assertEquals(2, disciplines.size());
        verify(disciplineService).listAll();
    }

    @Test
    void createShouldReturnCreatedResponse() {
        Discipline discipline = new Discipline();
        discipline.name = "New Discipline";

        doNothing().when(disciplineService).create(discipline);

        Response response = disciplineResource.create(discipline);
        assertEquals(Response.Status.CREATED.getStatusCode(), response.getStatus());
        verify(disciplineService).create(discipline);
    }
}
