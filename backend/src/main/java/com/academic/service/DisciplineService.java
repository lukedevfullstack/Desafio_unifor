package com.academic.service;

import com.academic.entity.Discipline;
import com.academic.repository.DisciplineRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.transaction.Transactional;
import java.util.List;

@ApplicationScoped
public class DisciplineService {

    private final DisciplineRepository disciplineRepository;

    public DisciplineService(DisciplineRepository disciplineRepository) {
        this.disciplineRepository = disciplineRepository;
    }

    public List<Discipline> listAll() {
        return disciplineRepository.listAll();
    }

    public Discipline findById(Long id) {
        return disciplineRepository.findById(id);
    }

    @Transactional
    public void create(Discipline discipline) {
        disciplineRepository.persist(discipline);
    }

    @Transactional
    public void update(Long id, Discipline updated) {
        Discipline discipline = disciplineRepository.findById(id);
        if (discipline != null) {
            discipline.name = updated.name;
            discipline.code = updated.code;
            discipline.credits = updated.credits;
        }
    }

    @Transactional
    public void delete(Long id) {
        disciplineRepository.deleteById(id);
    }
}
