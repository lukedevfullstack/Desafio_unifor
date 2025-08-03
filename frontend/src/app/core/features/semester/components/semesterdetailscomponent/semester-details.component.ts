import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SemesterService } from '../../services/semester.service';
import { Semester } from '../../interfaces/semester.model';

@Component({
    selector: 'app-semester-details',
    standalone: true,
    templateUrl: './semester-details.component.html',
    styleUrls: ['./semester-details.component.css']
})
export class SemesterDetailsComponent implements OnInit {
    semester!: Semester;

    constructor(private route: ActivatedRoute, private semesterService: SemesterService) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params['id'];
        this.semesterService.getById(id).subscribe(data => this.semester = data);
    }
}
