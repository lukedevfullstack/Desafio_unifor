import { Component, OnInit } from '@angular/core';
import { SemesterService } from '../../services/semester.service';
import { Semester } from '../../interfaces/semester.model';

@Component({
  selector: 'app-semester-list',
  standalone: true,
  templateUrl: './semester-list.component.html',
  styleUrls: ['./semester-list.component.css']
})
export class SemesterListComponent implements OnInit {
  semesters: Semester[] = [];

  constructor(private semesterService: SemesterService) {}

  ngOnInit(): void {
    this.semesterService.getAll().subscribe(data => this.semesters = data);
  }
}
