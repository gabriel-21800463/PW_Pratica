import { Component, OnInit } from '@angular/core';
import { ICourse} from '../academic.model';
import { AcademicService } from '../academic.service';
import { NgxSpinnerService } from 'ngx-spinner';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ManageAcademicDeleteDialogComponent} from './manage-academic-delete-dialog.component';


@Component({
  selector: 'app-manage-academic-studies',
  templateUrl: './manage-academic-studies.component.html',
  styleUrls: ['./manage-academic-studies.component.scss']
})
export class ManageAcademicStudiesComponent implements OnInit {


  academics: ICourse[] | null = null;

  constructor(protected modalService: NgbModal, private academicService: AcademicService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.academicService.getAcademics().subscribe(data => {
      this.spinner.hide();
      this.academics = data;
    }, err => {
      this.spinner.hide();
    });
  }

  trackId(index: number, item: ICourse): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return Number(item.id);
  }

  delete(academic: ICourse): void {
    const modalRef = this.modalService.open(ManageAcademicDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.academic = academic;
  }


}
