import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IAcademic } from '../academic.model';
import { ToastrService } from 'ngx-toastr';
import { AcademicService } from '../academic.service';

@Component({
  selector: 'app-manage-academic-delete-dialog',
  templateUrl: './manage-academic-delete-dialog.component.html',
  styleUrls: ['./manage-academic-delete-dialog.component.scss']
})
export class ManageAcademicDeleteDialogComponent implements OnInit {
  academic?: IAcademic;

  constructor(public activeModal: NgbActiveModal, private toastr: ToastrService, private projectService: AcademicService) { }

  ngOnInit(): void {
  }

  clear(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: string): void {
    this.projectService.deleteAcademic(id).then(() => {
        this.activeModal.close();
        this.toastr.success('Project successfully deleted', 'Suceess');
      },
      err => {
        this.toastr.error('An error occurred while deleting project with ID: ' + id , 'Error');
      });
  }
}
