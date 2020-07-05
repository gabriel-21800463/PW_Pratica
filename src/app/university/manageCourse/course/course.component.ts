import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ICourse} from '../course.model';
import {CourseService} from '../course.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {CourseDeleteDialogComponent} from './course-delete-dialog.component';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  procura: string;
  courses: ICourse[] | null = null;
  filtraData: number;
  // tslint:disable-next-line:max-line-length
  constructor(protected modalService: NgbModal, private courseService: CourseService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.courseService.getCourses().subscribe(data => {
      this.spinner.hide();
      this.courses = data;
    }, err => {
      this.spinner.hide();
    });
  }
  trackId(index: number, item: ICourse): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return Number(item.id);
  }

  delete(course: ICourse): void {
    const modalRef = this.modalService.open(CourseDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.course = course;
  }
  Search(){
    // tslint:disable-next-line:triple-equals
    if ( this.procura != '' ){
      this.courses = this.courses.filter (res => {
        // tslint:disable-next-line:max-line-length
        // @ts-ignore
        // tslint:disable-next-line:max-line-length
        return res.nomeCurso.toLocaleLowerCase().match(this.procura.toLocaleLowerCase()) + res.teacher.toLocaleLowerCase().match(this.procura.toLocaleLowerCase())  + res.nomeAluno.toLocaleLowerCase().match(this.procura.toLocaleLowerCase()) ;
      });
      // tslint:disable-next-line:triple-equals
    }else if (this.procura == '' ){
      this.ngOnInit();
    }
  }

}

