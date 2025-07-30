package com.academic.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.*;

@Entity
public class CurriculumMatrix extends PanacheEntity {

    @ManyToOne
    public Course course;

    @ManyToOne
    public Semester semester;

    @ManyToOne
    public Discipline discipline;

    public int workloadHours;
}
