import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ISubject} from '../subject.model';

@Component({
  selector: 'app-subject-detail',
  templateUrl: './subject-detail.component.html',
  styleUrls: ['./subject-detail.component.scss']
})
export class SubjectDetailComponent implements OnInit {

  subject: ISubject | null = null;

  constructor(protected activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ subject }) => {
      this.subject = subject;
    });
  }

  previousState(): void {
    window.history.back();
  }
}
