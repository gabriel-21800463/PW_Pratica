import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators, AbstractControl } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Course} from '../course.model';
import {CourseService} from '../course.service';


@Component({
  selector: 'app-course-update',
  templateUrl: './course-update.component.html',
  styleUrls: ['./course-update.component.scss']
})
export class CourseUpdateComponent implements OnInit {

  courseForm: FormGroup;
  isSaving: boolean;

  constructor(
    protected activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private courseService: CourseService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.createForm();
    this.activatedRoute.data.subscribe(({ course }) => {
      this.updateForm(course);
    });
  }

  saveCourse(): void {
    this.isSaving = true;
    if (!this.courseForm.get(['id']).value) {
      this.courseService.createCourse(this.courseForm.getRawValue()).then(data => {
          this.isSaving = false;
          this.toastr.success('New Course successfully created', 'Success');
          this.router.navigate(['/course']);
        },
        err => {
          this.isSaving = false;
          this.toastr.error('An error occurred while saving a new course', 'Error');
        });
    } else {
      this.courseService.updateCourse(this.courseForm.getRawValue()).then(() => {
          this.isSaving = false;
          this.toastr.success('Course successfully updated', 'Success');
          this.router.navigate(['/course']);
        },
        err => {
          this.isSaving = false;
          this.toastr.error('An error occurred while saving a new course', 'Error');
        });
    }
  }

  previousState(): void {
    window.history.back();
  }

  private createForm() {
    this.courseForm = new FormGroup({
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

  private updateForm(course: Course): void {
    this.courseForm.patchValue({
      id: course.id,
      educationalInstitution: course.educationalInstitution,
      formation: course.formation,
      fieldOfStudy: course.fieldOfStudy,
      startDate: course.startDate,
      endDate: course.endDate,
      grade: course.grade,
      activities: course.activities,
      description: course.description
    });
  }
}
