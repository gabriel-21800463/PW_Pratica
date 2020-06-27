import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ICourse} from '../course.model';
import {CourseService} from '../course.service';

import {IAcademic} from '../../../education/academic/academic.model';

import {AcademicService} from '../../../education/academic/academic.service';
import {NgxSpinnerService} from 'ngx-spinner';
// tslint:disable-next-line:max-line-length
import {ManageAcademicDeleteDialogComponent} from '../../../education/academic/manage-academic-studies/manage-academic-delete-dialog.component';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  courses: ICourse[] | null = null;

  constructor(protected modalService: NgbModal, private courseService: CourseService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.courseService.getCourses().subscribe(data => {
      this.spinner.hide();
      this.courses = data;
    }, err => {
      this.spinner.hide();
    });
  }

  trackId(index: number, item: IAcademic): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return Number(item.id);
  }

  delete(academic: IAcademic): void {
    const modalRef = this.modalService.open(ManageAcademicDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.academic = academic;
  }


}
