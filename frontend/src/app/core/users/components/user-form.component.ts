import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../user.model';

@Component({
    selector: 'app-user-form',
    standalone: true,
    template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <input type="text" formControlName="name" placeholder="Name" />
      <input type="email" formControlName="email" placeholder="Email" />
      <select formControlName="role">
        <option value="ADMIN">Admin</option>
        <option value="COORDINATOR">Coordinator</option>
        <option value="STUDENT">Student</option>
        <option value="TEACHER">Teacher</option>
      </select>
      <button type="submit">Save</button>
    </form>
  `
})
export class UserFormComponent {
    @Input() initialData?: User;
    @Output() save = new EventEmitter<User>();

    form = this.fb.group({
        id: [],
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        role: ['', Validators.required],
    });

    constructor(private fb: FormBuilder) { }

    ngOnChanges(): void {
        if (this.initialData) {
            this.form.patchValue(this.initialData);
        }
    }

    onSubmit() {
        if (this.form.valid) {
            this.save.emit(this.form.value as User);
        }
    }
}
