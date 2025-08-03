import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GradeService } from '../../services/grade.service';
import { Grade } from '../../models/grade.model';

@Component({
    selector: 'app-grade-view',
    templateUrl: './grade-view.component.html',
})
export class GradeViewComponent implements OnInit {
    grade?: Grade;

    constructor(
        private route: ActivatedRoute,
        private service: GradeService
    ) { }

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.service.getById(id).subscribe(data => this.grade = data);
    }
}
