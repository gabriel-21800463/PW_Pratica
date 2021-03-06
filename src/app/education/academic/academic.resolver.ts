import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ICourse, Academic } from './academic.model';
import { AcademicService } from './academic.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({ providedIn: 'root' })
export class AcademicResolver implements Resolve<ICourse> {
  constructor(private router: Router, private spinner: NgxSpinnerService, private academicService: AcademicService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ICourse> | Observable<never> {
    const id = route.params.id;
    if (id) {
      this.spinner.show();
      return this.academicService.getAcademicById(id).pipe(map((data: ICourse) => {
        this.spinner.hide();
        if (data) {
          return data;
        } else {
          this.router.navigate(['404']);
          return null;
        }
      }, err => {
        this.spinner.hide();
      }), take(1));
    }
    return of(new Academic());
  }
}
