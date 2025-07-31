package com.academic.service;

import com.academic.entity.CurriculumMatrix;
import com.academic.repository.CurriculumMatrixRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.transaction.Transactional;
import java.util.List;

@ApplicationScoped
public class CurriculumMatrixService {

    private final CurriculumMatrixRepository repository;

    public CurriculumMatrixService(CurriculumMatrixRepository repository) {
        this.repository = repository;
    }

    public List<CurriculumMatrix> listAll() {
        return repository.listAll();
    }

    public CurriculumMatrix findById(Long id) {
        return repository.findById(id);
    }

    @Transactional
    public void create(CurriculumMatrix matrix) {
        repository.persist(matrix);
    }

    @Transactional
    public void update(Long id, CurriculumMatrix updated) {
        CurriculumMatrix matrix = repository.findById(id);
        if (matrix != null) {
            matrix.course = updated.course;
            matrix.semester = updated.semester;
            matrix.discipline = updated.discipline;
            matrix.workloadHours = updated.workloadHours;
        }
    }

    @Transactional
    public void delete(Long id) {
        repository.deleteById(id);
    }
}
