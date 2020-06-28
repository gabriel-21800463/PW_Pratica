import { Component, OnInit } from '@angular/core';
import {ITeacher} from '../teacher.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TeacherService} from '../teacher.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {TeacherDeleteDialogComponent} from './teacher-delete-dialog.component';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  teachers: ITeacher[] | null = null;

  constructor(protected modalService: NgbModal, private teacherService: TeacherService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.teacherService.getTeachers().subscribe(data => {
      this.spinner.hide();
      this.teachers = data;
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
