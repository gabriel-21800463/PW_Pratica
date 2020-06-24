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
    private projectService: AcademicService,
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
      this.projectService.createProject(this.manageAcademicForm.getRawValue()).then(data => {
          this.isSaving = false;
          this.toastr.success('New Project successfully created', 'Success');
          this.router.navigate(['/manageAcademicStudies']);
        },
        err => {
          this.isSaving = false;
          this.toastr.error('An error occurred while saving a new project', 'Error');
        });
    } else {
      this.projectService.updateProject(this.manageAcademicForm.getRawValue()).then(() => {
          this.isSaving = false;
          this.toastr.success('Project successfully updated', 'Success');
          this.router.navigate(['/manageAcademicStudies']);
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

  addProjectTeamMember(): void {
    (this.manageAcademicForm.get(['academicTeamMembers']) as FormArray).push(this.createProjectTeamMemberFormGroup());
  }

  deleteProjectTeamMember(index: number): void {
    (this.manageAcademicForm.get(['academicTeamMembers']) as FormArray).removeAt(index);
  }

  get academicTeamMembersControls(): Array<AbstractControl> {
    return (this.manageAcademicForm.get('academicTeamMembers') as FormArray).controls;
  }

  private createForm() {
    this.manageAcademicForm = new FormGroup({
      id: new FormControl(''),
      educationalInstitution: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      formation: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      fieldOfStudy: new FormControl('', [Validators.required, Validators.maxLength(80)]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      grade: new FormControl('', [Validators.required]),
      activities: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      formRecaptcha: new FormControl(null, [Validators.required]),
      academicTeamMembers: this.formBuilder.array([]),
    });
  }

  private createProjectTeamMemberFormGroup(): FormGroup {
    return new FormGroup({
      id: new FormControl(''),
      memberSpecialization: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      memberName: new FormControl('', [Validators.required, Validators.maxLength(250)]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('')
    });
  }

  private updateForm(academic: Academic): void {
    this.manageAcademicForm.patchValue({
      id: academic.id,
      educationalInstitution: academic.educationalInstitution,
      projectAlias: academic.formation,
      companyName: academic.fieldOfStudy,
      companyAddress: academic.startDate,
      state: academic.endDate,
      city: academic.grade,
      zip: academic.activities
    });
    this.createProjectTeamMemberFormArray(academic)
      .forEach(g => (this.manageAcademicForm.get('academicTeamMembers') as FormArray).push(g));
  }

  private createProjectTeamMemberFormArray(academic: Academic): FormGroup[] {
    const fg: FormGroup[] = [];
    if (!academic.academicTeamMembers) {
      academic.academicTeamMembers = [];
    }
    academic.academicTeamMembers.forEach(projectTeamMember => {
      fg.push(this.formBuilder.group({
          id: new FormControl(projectTeamMember.id),
          startDate: new FormControl(projectTeamMember.startDate, [Validators.required]),
          endDate: new FormControl(projectTeamMember.endDate)
        })
      );
    });
    return fg;
  }
}
