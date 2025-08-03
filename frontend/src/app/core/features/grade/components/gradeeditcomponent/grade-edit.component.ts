import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GradeService } from '../../services/grade.service';
import { Grade } from '../../models/grade.model';

@Component({
    selector: 'app-grade-edit',
    templateUrl: './grade-edit.component.html',
})
export class GradeEditComponent implements OnInit {
    grade: Grade = { id: 0, studentId: 0, subjectId: 0, semesterId: 0, grade: 0 };

    constructor(
        private route: ActivatedRoute,
        private service: GradeService,
        private router: Router
    ) { }

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.service.getById(id).subscribe(data => this.grade = data);
    }

    save(): void {
        this.service.update(this.grade.id, this.grade).subscribe(() => this.router.navigate(['/grades']));
    }
}
