import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SubjectService } from '../subject.service';
import { Subject } from '../subject.model';

@Component({
    selector: 'app-edit-subject',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './edit-subject.component.html',
})
export class EditSubjectComponent {
    private route = inject(ActivatedRoute);
    private subjectService = inject(SubjectService);
    private router = inject(Router);

    subject: Subject = {
        id: '',
        name: '',
        code: '',
    };

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.subjectService.getSubjectById(id).subscribe((data) => {
                this.subject = data;
            });
        }
    }

    update(): void {
        this.subjectService.updateSubject(this.subject).subscribe(() => {
            this.router.navigate(['/subjects']);
        });
    }
}
