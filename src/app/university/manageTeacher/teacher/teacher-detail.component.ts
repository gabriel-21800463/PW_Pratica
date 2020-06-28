import { Component, OnInit } from '@angular/core';
import { ITeacher} from '../teacher.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.scss']
})
export class TeacherDetailComponent implements OnInit {

  teacher: ITeacher | null = null;

  constructor(protected activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ teacher }) => {
      this.teacher = teacher;
    });
  }

  previousState(): void {
    window.history.back();
  }
}
