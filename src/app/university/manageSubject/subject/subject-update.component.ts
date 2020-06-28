import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Subject} from '../subject.model';
import {SubjectService} from '../subject.service';

@Component({
  selector: 'app-subject-update',
  templateUrl: './subject-update.component.html',
  styleUrls: ['./subject-update.component.scss']
})
export class SubjectUpdateComponent implements OnInit {

  subjectForm: FormGroup;
  isSaving: boolean;

  constructor(
    protected activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private subjectService: SubjectService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.createForm();
    this.activatedRoute.data.subscribe(({ course: subject }) => {
      this.updateForm(subject);
    });
  }

  saveSubject(): void {
    this.isSaving = true;
    if (!this.subjectForm.get(['id']).value) {
      this.subjectService.createSubject(this.subjectForm.getRawValue()).then(data => {
          this.isSaving = false;
          this.toastr.success('New Subject successfully created', 'Success');
          this.router.navigate(['/subject']);
        },
        err => {
          this.isSaving = false;
          this.toastr.error('An error occurred while saving a new subject', 'Error');
        });
    } else {
      this.subjectService.updateSubject(this.subjectForm.getRawValue()).then(() => {
          this.isSaving = false;
          this.toastr.success('Subject successfully updated', 'Success');
          this.router.navigate(['/subject']);
        },
        err => {
          this.isSaving = false;
          this.toastr.error('An error occurred while saving a new subject', 'Error');
        });
    }
  }

  previousState(): void {
    window.history.back();
  }

  private createForm() {
    this.subjectForm = new FormGroup({
      id: new FormControl(''),
      nomeAluno: new FormControl('', [Validators.required, Validators.maxLength(35)]),
      disciplina: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      curso: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      dataInicio: new FormControl('', [Validators.required]),
      dataFinal: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      turno: new FormControl('', [Validators.required]),
      formRecaptcha: new FormControl(null, [Validators.required])
    });
  }

  private updateForm(subject: Subject): void {
    this.subjectForm.patchValue({
      id: subject.id,
      nomeAluno: subject.nomeAluno,
      disciplina: subject.disciplina,
      curso: subject.curso,
      dataIninio: subject.dataIninio,
      dataFinal: subject.dataFinal,
      email: subject.email,
      turno: subject.turno,
    });
  }
}

