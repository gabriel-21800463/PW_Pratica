import { Component, OnInit } from '@angular/core';
import { ICertification } from '../certification.model';
import { CertificationService } from '../certification.service';
import { NgxSpinnerService } from 'ngx-spinner';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ManageCertificationsDeleteDialogComponent} from './manage-certifications-delete-dialog.component';

@Component({
  selector: 'app-manage-certifications',
  templateUrl: './manage-certifications.component.html',
  styleUrls: ['./manage-certifications.component.scss']
})
export class ManageCertificationsComponent implements OnInit {

  certifications: ICertification[] | null = null;

  constructor(protected modalService: NgbModal, private certificationService: CertificationService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.certificationService.getCertifications().subscribe(data => {
      this.spinner.hide();
      this.certifications = data;
    }, err => {
      this.spinner.hide();
    });
  }

  trackId(index: number, item: ICertification): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return Number(item.id);
  }

  delete(certification: ICertification): void {
    const modalRef = this.modalService.open(ManageCertificationsDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.certification = certification;
  }

}
