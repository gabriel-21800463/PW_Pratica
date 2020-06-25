import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAcademic } from '../academic.model';

@Component({
  selector: 'app-manage-academic-detail',
  templateUrl: './manage-academic-detail.component.html',
  styleUrls: ['./manage-academic-detail.component.scss']
})

export class ManageAcademicDetailComponent implements OnInit {
  academic: IAcademic | null = null;

  constructor(protected activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ academic }) => {
      this.academic = academic;
    });
  }

  previousState(): void {
    window.history.back();
  }

}
