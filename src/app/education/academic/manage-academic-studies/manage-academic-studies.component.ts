import { Component, OnInit } from '@angular/core';
import { IAcademic } from '../academic.model';
import { AcademicService } from '../academic.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-manage-academic-studies',
  templateUrl: './manage-academic-studies.component.html',
  styleUrls: ['./manage-academic-studies.component.scss']
})
export class ManageAcademicStudiesComponent implements OnInit {


  academics: IAcademic[] | null = null;

  constructor(private academicService: AcademicService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.academicService.getAcademics().subscribe(data => {
      this.spinner.hide();
      this.academics = data;
    }, err => {
      this.spinner.hide();
    });
  }


}
