package com.academic.service;

import com.academic.entity.Course;
import com.academic.repository.CourseRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.transaction.Transactional;
import java.util.List;

@ApplicationScoped
public class CourseService {

    private final CourseRepository courseRepository;

    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public List<Course> listAll() {
        return courseRepository.listAll();
    }

    public Course findById(Long id) {
        return courseRepository.findById(id);
    }

    @Transactional
    public void create(Course course) {
        courseRepository.persist(course);
    }

    @Transactional
    public void update(Long id, Course updated) {
        Course course = courseRepository.findById(id);
        if (course != null) {
            course.name = updated.name;
        }
    }

    @Transactional
    public void delete(Long id) {
        courseRepository.deleteById(id);
    }
}
