import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { UserFormComponent } from '../components/user-form.component';
import { UserListComponent } from '../components/user-list.component';

@Component({
    standalone: true,
    selector: 'app-user-crud',
    imports: [CommonModule, UserFormComponent, UserListComponent],
    template: `
    <h2>Users</h2>
    <app-user-form [initialData]="selected" (save)="save($event)"></app-user-form>
    <app-user-list [users]="users" (edit)="select($event)" (delete)="remove($event)"></app-user-list>
  `
})
export class UserCrudPage {
    users: User[] = [];
    selected?: User;

    constructor(private service: UserService) { }

    ngOnInit(): void {
        this.load();
    }

    load() {
        this.service.getAll().subscribe(data => this.users = data);
    }

    select(user: User) {
        this.selected = user;
    }

    save(user: User) {
        const obs = user.id
            ? this.service.update(user.id, user)
            : this.service.create(user);

        obs.subscribe(() => {
            this.selected = undefined;
            this.load();
        });
    }

    remove(id: number) {
        this.service.delete(id).subscribe(() => this.load());
    }
}
