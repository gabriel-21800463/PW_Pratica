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
  boas?: any;
  courses: ICourse[] | null = null;
  // tslint:disable-next-line:max-line-length
  private course: any;
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
  getVal(item)
  {
    console.log(item.value);
    /*alert(item.value);*/
    this.boas = item.value;
    alert(this.boas);
    // tslint:disable-next-line:triple-equals
    if (this.boas == 'oi'){
      alert('muito bem');
    }
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.courses.length; i++){
      console.log(this.courses[i]);
      // tslint:disable-next-line:triple-equals
      if (this.boas == this.courses[i]){
        alert('existe');
      }
    }
    // tslint:disable-next-line:triple-equals
    /*if (this.boas == this.course.nomeCurso){
      alert('existe');
    }*/
  }

}
