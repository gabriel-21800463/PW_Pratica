import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ISubject} from '../subject.model';
import {ICourse} from '../../manageCourse/course.model';

@Component({
  selector: 'app-subject-detail',
  templateUrl: './subject-detail.component.html',
  styleUrls: ['./subject-detail.component.scss']
})
export class SubjectDetailComponent implements OnInit {

  subject: ISubject | null = null;
  course: ICourse | null = null;

  constructor(protected activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ subject }) => {
      this.subject = subject;
    });

    this.activatedRoute.data.subscribe(({ course }) => {
      this.course = course;
    });
  }

  previousState(): void {
    window.history.back();
  }
}
