import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgxSpinnerService} from 'ngx-spinner';
import {ISubject} from '../subject.model';
import {SubjectService} from '../subject.service';
import {SubjectDeleteDialogComponent} from './subject-delete-dialog.component';
import {ICourse} from '../../manageCourse/course.model';
import {CourseService} from '../../manageCourse/course.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  subjects: ISubject[] | null = null;
  courses: ICourse[] | null = null;

  // tslint:disable-next-line:max-line-length
  constructor(protected modalService: NgbModal, private subjectService: SubjectService, private spinner: NgxSpinnerService, private courseService: CourseService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.subjectService.getSubjects().subscribe(data => {
      this.spinner.hide();
      this.subjects = data;
    }, err => {
      this.spinner.hide();
    });

    this.courseService.getCourses().subscribe(data => {
      this.spinner.hide();
      this.courses = data;
    }, err => {
      this.spinner.hide();
    });
  }

  trackId(index: number, item: ISubject): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return Number(item.id);
  }

  delete(subject: ISubject): void {
    const modalRef = this.modalService.open(SubjectDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.subject = subject;
  }


}
