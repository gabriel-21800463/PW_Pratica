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
          this.toastr.error('An error occurred while saving a new Course', 'Error');
        });
    } else {
      this.courseService.updateCourse(this.courseForm.getRawValue()).then(() => {
          this.isSaving = false;
          this.toastr.success('Course successfully updated', 'Success');
          this.router.navigate(['/course']);
        },
        err => {
          this.isSaving = false;
          this.toastr.error('An error occurred while saving a new Course', 'Error');
        });
    }
  }

  previousState(): void {
    window.history.back();
  }

  private createForm() {
    this.courseForm = new FormGroup({
      id: new FormControl(''),
      date: new FormControl(''),
      nomeCurso: new FormControl('', [Validators.required, Validators.maxLength(35)]),
      teacher: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      subject: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      turno: new FormControl('', [Validators.required]),
      estagio: new FormControl('', [Validators.required]),
      ects: new FormControl('', [Validators.required]),
      specialization: new FormControl('', [Validators.required, Validators.maxLength(40)]),
      grau: new FormControl('', [Validators.required]),
      disciplina: new FormControl('', [Validators.required, Validators.maxLength(35)]),
      nomeAluno: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      bolsa: new FormControl('', [Validators.required]),
      nacionalidade: new FormControl('', [Validators.required, Validators.maxLength(35)]),
      formRecaptcha: new FormControl(null, [Validators.required]),
    });
  }

  private updateForm(course: Course): void {
    this.courseForm.patchValue({
      id: course.id,
      date: course.date,
      nomeCurso: course.nomeCurso,
      teacher: course.teacher,
      subject: course.subject,
      turno: course.turno,
      estagio: course.estagio,
      ects: course.ects,
      specialization: course.specialization,
      grau: course.grau,
      disciplina: course.disciplina,
      nomeAluno: course.nomeAluno,
      bolsa: course.bolsa,
      nacionalidade: course.nacionalidade
    });
  }
}
