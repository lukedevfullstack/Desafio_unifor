import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SubjectService } from '../subject.service';
import { Subject } from '../subject.model';

@Component({
    selector: 'app-create-subject',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './create-subject.component.html',
})
export class CreateSubjectComponent {
    private subjectService = inject(SubjectService);
    private router = inject(Router);

    subject: Subject = {
        id: '',
        name: '',
        code: '',
    };

    save(): void {
        this.subjectService.createSubject(this.subject).subscribe(() => {
            this.router.navigate(['/subjects']);
        });
    }
}
