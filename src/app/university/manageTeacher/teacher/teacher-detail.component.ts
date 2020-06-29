import { Component, OnInit } from '@angular/core';
import { ITeacher} from '../teacher.model';
import {ActivatedRoute} from '@angular/router';
import {ICourse} from '../../manageCourse/course.model';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.scss']
})
export class TeacherDetailComponent implements OnInit {

  teacher: ITeacher | null = null;
  course: ICourse | null = null;

  constructor(protected activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ teacher }) => {
      this.teacher = teacher;
    });

    this.activatedRoute.data.subscribe(({ course }) => {
      this.course = course;
    });
  }

  previousState(): void {
    window.history.back();
  }
}
