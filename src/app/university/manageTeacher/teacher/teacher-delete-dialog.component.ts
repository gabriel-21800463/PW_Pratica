import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ToastrService} from 'ngx-toastr';
import {ITeacher} from '../teacher.model';
import {TeacherService} from '../teacher.service';

@Component({
  selector: 'app-teacher-delete-dialog',
  templateUrl: './teacher-delete-dialog.component.html',
  styleUrls: ['./teacher-delete-dialog.component.scss']
})
export class TeacherDeleteDialogComponent implements OnInit {

  teacher?: ITeacher;

  constructor(public activeModal: NgbActiveModal, private toastr: ToastrService, private academicService: TeacherService) { }

  ngOnInit(): void {
  }

  clear(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: string): void {
    this.academicService.deleteTeacher(id).then(() => {
        this.activeModal.close();
        this.toastr.success('Teacher successfully deleted', 'Suceess');
      },
      err => {
        this.toastr.error('An error occurred while deleting Teacher with ID: ' + id , 'Error');
      });
  }
}
