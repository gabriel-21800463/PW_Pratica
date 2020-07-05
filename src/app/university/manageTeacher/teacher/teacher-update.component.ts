import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators, AbstractControl } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Teacher} from '../teacher.model';
import {TeacherService} from '../teacher.service';
import {ICourse} from '../../manageCourse/course.model';
import {CourseService} from '../../manageCourse/course.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-teacher-update',
  templateUrl: './teacher-update.component.html',
  styleUrls: ['./teacher-update.component.scss']
})
export class TeacherUpdateComponent implements OnInit {

  teacherForm: FormGroup;
  isSaving: boolean;

  courses: ICourse[] | null = null;

  constructor(
    protected activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private teacherService: TeacherService,
    private formBuilder: FormBuilder,
    private router: Router,
    private courseService: CourseService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.createForm();
    this.activatedRoute.data.subscribe(({ teacher }) => {
      this.updateForm(teacher);
    });

    this.courseService.getCourses().subscribe(data => {
      this.spinner.hide();
      this.courses = data;
    }, err => {
      this.spinner.hide();
    });
  }

  saveTeacher(): void {
    this.isSaving = true;
    if (!this.teacherForm.get(['id']).value) {
      this.teacherService.createTeacher(this.teacherForm.getRawValue()).then(data => {
          this.isSaving = false;
          this.toastr.success('New Teacher successfully created', 'Success');
          this.router.navigate(['/teacher']);
        },
        err => {
          this.isSaving = false;
          this.toastr.error('An error occurred while saving a new teacher', 'Error');
        });
    } else {
      this.teacherService.updateTeacher(this.teacherForm.getRawValue()).then(() => {
          this.isSaving = false;
          this.toastr.success('Teacher successfully updated', 'Success');
          this.router.navigate(['/teacher']);
        },
        err => {
          this.isSaving = false;
          this.toastr.error('An error occurred while saving a new teacher', 'Error');
        });
    }
  }

  previousState(): void {
    window.history.back();
  }

  private createForm() {
    this.teacherForm = new FormGroup({
      id: new FormControl(''),
      date: new FormControl(''),
      nomeTeacher: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      curso: new FormControl('', [Validators.required]),
      grau: new FormControl('', [Validators.required]),
      localFormacao: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      disciplina: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      turno: new FormControl('', [Validators.required]),
      formRecaptcha: new FormControl(null, [Validators.required])
    });
  }

  private updateForm(teacher: Teacher): void {
    this.teacherForm.patchValue({
      id: teacher.id,
      date: teacher.date,
      nomeTeacher: teacher.nomeTeacher,
      curso: teacher.curso,
      grau: teacher.grau,
      localFormacao: teacher.localFormacao,
      disciplina: teacher.disciplina,
      turno: teacher.turno,
    });
  }
}
