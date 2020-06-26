import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICertification } from '../certification.model';

@Component({
  selector: 'app-manage-certifications-detail',
  templateUrl: './manage-certifications-detail.component.html',
  styleUrls: ['./manage-certifications-detail.component.scss']
})
export class ManageCertificationsDetailComponent implements OnInit {

  certification: ICertification | null = null;

  constructor(protected activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ certification }) => {
      this.certification = certification;
    });
  }

  previousState(): void {
    window.history.back();
  }
}
