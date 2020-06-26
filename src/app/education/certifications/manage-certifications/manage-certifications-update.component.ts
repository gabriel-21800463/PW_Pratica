import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators, AbstractControl } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {CertificationService} from '../certification.service';
import {Certification} from '../certification.model';

@Component({
  selector: 'app-manage-certifications-update',
  templateUrl: './manage-certifications-update.component.html',
  styleUrls: ['./manage-certifications-update.component.scss']
})

export class ManageCertificationsUpdateComponent implements OnInit {

  manageCertificationForm: FormGroup;
  isSaving: boolean;

  constructor(
    protected activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private certificationService: CertificationService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.createForm();
    this.activatedRoute.data.subscribe(({ certification }) => {
      this.updateForm(certification);
    });
  }

  saveProject(): void {
    this.isSaving = true;
    if (!this.manageCertificationForm.get(['id']).value) {
      this.certificationService.createCertification(this.manageCertificationForm.getRawValue()).then(data => {
          this.isSaving = false;
          this.toastr.success('New Project successfully created', 'Success');
          this.router.navigate(['/maangecertifications']);
        },
        err => {
          this.isSaving = false;
          this.toastr.error('An error occurred while saving a new project', 'Error');
        });
    } else {
      this.certificationService.updateCertification(this.manageCertificationForm.getRawValue()).then(() => {
          this.isSaving = false;
          this.toastr.success('Project successfully updated', 'Success');
          this.router.navigate(['/maangecertifications']);
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
    this.manageCertificationForm = new FormGroup({

      id: new FormControl(''),
      certName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      issuingOrg: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      certCode: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      certUrl: new FormControl(''),
      expires: new FormControl('', [Validators.required]),
      issuingDate: new FormControl('', [Validators.required]),
      expireDate: new FormControl('', [Validators.required]),
      formRecaptcha: new FormControl(null, [Validators.required])
    });
  }

  private updateForm(certification: Certification): void {

    this.manageCertificationForm.patchValue({
      id: certification.id,
      certName: certification.certName,
      issuingOrg: certification.issuingOrg,
      expires: certification.expires,
      issuingDate: certification.issuingDate,
      expireDate: certification.expireDate,
      certCode: certification.certCode,
      certUrl: certification.certUrl,
    });
  }

}
