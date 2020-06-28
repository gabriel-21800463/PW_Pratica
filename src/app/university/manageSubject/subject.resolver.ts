import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import {ISubject, Subject} from './subject.model';
import {SubjectService} from './subject.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Injectable({ providedIn: 'root' })
export class SubjectResolver implements Resolve<ISubject> {
  constructor(private router: Router, private spinner: NgxSpinnerService, private subject: SubjectService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ISubject> | Observable<never> {
    const id = route.params.id;
    if (id) {
      this.spinner.show();
      return this.subject.getSubjectById(id).pipe(map((data: ISubject) => {
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
    return of(new Subject());
  }
}
