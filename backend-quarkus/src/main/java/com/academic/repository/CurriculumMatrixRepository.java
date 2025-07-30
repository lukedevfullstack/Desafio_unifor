package com.academic.repository;

import com.academic.entity.CurriculumMatrix;
import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class CurriculumMatrixRepository implements PanacheRepository<CurriculumMatrix> {
}
