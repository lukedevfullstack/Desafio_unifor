package com.academic.service;

import com.academic.entity.Course;
import com.academic.repository.CourseRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class CourseServiceTest {

    private CourseRepository courseRepository;
    private CourseService courseService;

    @BeforeEach
    void setup() {
        courseRepository = mock(CourseRepository.class);
        courseService = new CourseService(courseRepository);
    }

    @Test
    void listAllShouldReturnCourses() {
        Course c1 = new Course();
        c1.name = "Course 1";
        Course c2 = new Course();
        c2.name = "Course 2";

        when(courseRepository.listAll()).thenReturn(Arrays.asList(c1, c2));

        List<Course> courses = courseService.listAll();
        assertEquals(2, courses.size());
        verify(courseRepository).listAll();
    }

    @Test
    void createShouldPersistCourse() {
        Course course = new Course();
        course.name = "New Course";

        doNothing().when(courseRepository).persist(course);

        courseService.create(course);

        verify(courseRepository).persist(course);
    }
}
