package com.academic.resource;

import com.academic.entity.Course;
import com.academic.service.CourseService;
import jakarta.ws.rs.core.Response;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class CourseResourceTest {

    private CourseService courseService;
    private CourseResource courseResource;

    @BeforeEach
    void setup() {
        courseService = mock(CourseService.class);
        courseResource = new CourseResource();
        courseResource.courseService = courseService;
    }

    @Test
    void listAllShouldReturnCourses() {
        Course c1 = new Course();
        c1.name = "Course 1";
        Course c2 = new Course();
        c2.name = "Course 2";

        when(courseService.listAll()).thenReturn(Arrays.asList(c1, c2));

        List<Course> courses = courseResource.listAll();
        assertEquals(2, courses.size());
        verify(courseService).listAll();
    }

    @Test
    void createShouldReturnCreatedResponse() {
        Course course = new Course();
        course.name = "New Course";

        doNothing().when(courseService).create(course);

        Response response = courseResource.create(course);
        assertEquals(Response.Status.CREATED.getStatusCode(), response.getStatus());
        verify(courseService).create(course);
    }
}
