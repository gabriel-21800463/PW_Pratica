import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators, AbstractControl } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {AcademicService} from '../academic.service';
import {Academic} from '../academic.model';

@Component({
  selector: 'app-manage-academic-update',
  templateUrl: './manage-academic-update.component.html',
  styleUrls: ['./manage-academic-update.component.scss']
})
export class ManageAcademicUpdateComponent implements OnInit {

  manageAcademicForm: FormGroup;
  isSaving: boolean;

  constructor(
    protected activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private academicService: AcademicService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.createForm();
    this.activatedRoute.data.subscribe(({ academic }) => {
      this.updateForm(academic);
    });
  }

  saveProject(): void {
    this.isSaving = true;
    if (!this.manageAcademicForm.get(['id']).value) {
      this.academicService.createAcademic(this.manageAcademicForm.getRawValue()).then(data => {
          this.isSaving = false;
          this.toastr.success('New Project successfully created', 'Success');
          this.router.navigate(['/manageacademicstudies']);
        },
        err => {
          this.isSaving = false;
          this.toastr.error('An error occurred while saving a new project', 'Error');
        });
    } else {
      this.academicService.updateAcademic(this.manageAcademicForm.getRawValue()).then(() => {
          this.isSaving = false;
          this.toastr.success('Project successfully updated', 'Success');
          this.router.navigate(['/manageacademicstudies']);
        },
        err => {
          this.isSaving = false;
          this.toastr.error('An error occurred while saving a new project', 'Error');
        });
    }
  }

  previousState(): void {
    window.history.back();
  }

  private createForm() {
    this.manageAcademicForm = new FormGroup({
      id: new FormControl(''),
      educationalInstitution: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      formation: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      fieldOfStudy: new FormControl('', [Validators.required, Validators.maxLength(80)]),
      grade: new FormControl('', [Validators.required, Validators.maxLength(40)]),
      activities: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(350)]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      formRecaptcha: new FormControl(null, [Validators.required])
    });
  }

  private updateForm(academic: Academic): void {
    this.manageAcademicForm.patchValue({
      id: academic.id,
      educationalInstitution: academic.educationalInstitution,
      formation: academic.formation,
      fieldOfStudy: academic.fieldOfStudy,
      startDate: academic.startDate,
      endDate: academic.endDate,
      grade: academic.grade,
      activities: academic.activities,
      description: academic.description
    });
  }
}
