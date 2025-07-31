package com.academic.service;

import com.academic.entity.Semester;
import com.academic.repository.SemesterRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.transaction.Transactional;
import java.util.List;

@ApplicationScoped
public class SemesterService {

    private final SemesterRepository semesterRepository;

    public SemesterService(SemesterRepository semesterRepository) {
        this.semesterRepository = semesterRepository;
    }

    public List<Semester> listAll() {
        return semesterRepository.listAll();
    }

    public Semester findById(Long id) {
        return semesterRepository.findById(id);
    }

    @Transactional
    public void create(Semester semester) {
        semesterRepository.persist(semester);
    }

    @Transactional
    public void update(Long id, Semester updated) {
        Semester semester = semesterRepository.findById(id);
        if (semester != null) {
            semester.name = updated.name;
            semester.year = updated.year;
            semester.semesterNumber = updated.semesterNumber;
        }
    }

    @Transactional
    public void delete(Long id) {
        semesterRepository.deleteById(id);
    }
}
