package com.academic.repository;

import com.academic.entity.Discipline;
import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class DisciplineRepository implements PanacheRepository<Discipline> {
}
