import { Component, OnInit } from '@angular/core';
import { GradeService } from '../../services/grade.service';
import { Grade } from '../../models/grade.model';

@Component({
    selector: 'app-grade-list',
    templateUrl: './grade-list.component.html',
})
export class GradeListComponent implements OnInit {
    grades: Grade[] = [];

    constructor(private gradeService: GradeService) { }

    ngOnInit(): void {
        this.gradeService.getAll().subscribe(data => this.grades = data);
    }
}
