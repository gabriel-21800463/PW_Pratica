import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ToastrService} from 'ngx-toastr';
import {ISubject} from '../subject.model';
import {SubjectService} from '../subject.service';

@Component({
  selector: 'app-subject-delete-dialog',
  templateUrl: './subject-delete-dialog.component.html',
  styleUrls: ['./subject-delete-dialog.component.scss']
})
export class SubjectDeleteDialogComponent implements OnInit {

  subject?: ISubject;

  constructor(public activeModal: NgbActiveModal, private toastr: ToastrService, private subjectService: SubjectService) { }

  ngOnInit(): void {
  }

  clear(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: string, date: number): void {
    this.subjectService.deleteSubject(id + date).then(() => {
        this.activeModal.close();
        this.toastr.success('Subject successfully deleted', 'Suceess');
      },
      err => {
        this.toastr.error('An error occurred while deleting Subject with ID: ' + id , 'Error');
      });
  }
}
