import { Component, OnInit } from '@angular/core';
import { SubjectService } from './subject.service';
import { Subject } from './subject.model';

@Component({
    selector: 'app-list-subject',
    templateUrl: './list-subject.component.html',
})
export class ListSubjectComponent implements OnInit {
    subjects: Subject[] = [];

    constructor(private subjectService: SubjectService) { }

    ngOnInit() {
        this.subjectService.getAll().subscribe(data => this.subjects = data);
    }

    delete(id: number) {
        this.subjectService.delete(id).subscribe(() => {
            this.subjects = this.subjects.filter(s => s.id !== id);
        });
    }
}
