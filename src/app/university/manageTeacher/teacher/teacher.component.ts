import { Component, OnInit } from '@angular/core';
import {ITeacher} from '../teacher.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TeacherService} from '../teacher.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {TeacherDeleteDialogComponent} from './teacher-delete-dialog.component';
import {ICourse} from '../../manageCourse/course.model';
import {CourseService} from '../../manageCourse/course.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  teachers: ITeacher[] | null = null;
  courses: ICourse[] | null = null;

  // tslint:disable-next-line:max-line-length
  constructor(protected modalService: NgbModal, private teacherService: TeacherService, private courseService: CourseService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.teacherService.getTeachers().subscribe(data => {
      this.spinner.hide();
      this.teachers = data;
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

  trackId(index: number, item: ITeacher): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return Number(item.id);
  }

  delete(course: ITeacher): void {
    const modalRef = this.modalService.open(TeacherDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.teacher = course;
  }


}
