import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ICourse } from '../course.model';
import { ToastrService } from 'ngx-toastr';
import { CourseService } from '../course.service';


@Component({
  selector: 'app-course-delete-dialog',
  templateUrl: './course-delete-dialog.component.html',
  styleUrls: ['./course-delete-dialog.component.scss']
})
export class CourseDeleteDialogComponent implements OnInit {

  course?: ICourse;

  constructor(public activeModal: NgbActiveModal, private toastr: ToastrService, private academicService: CourseService) { }

  ngOnInit(): void {
  }

  clear(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: string): void {
    this.academicService.deleteCourse(id).then(() => {
        this.activeModal.close();
        this.toastr.success('Course successfully deleted', 'Suceess');
      },
      err => {
        this.toastr.error('An error occurred while deleting Course with ID: ' + id , 'Error');
      });
  }
}
