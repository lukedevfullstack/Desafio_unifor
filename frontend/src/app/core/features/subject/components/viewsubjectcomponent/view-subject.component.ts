import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from '../subject.service';
import { Subject } from '../subject.model';

@Component({
    selector: 'app-view-subject',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './view-subject.component.html',
})
export class ViewSubjectComponent {
    private route = inject(ActivatedRoute);
    private subjectService = inject(SubjectService);

    subject?: Subject;

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.subjectService.getSubjectById(id).subscribe((data) => {
                this.subject = data;
            });
        }
    }
}
