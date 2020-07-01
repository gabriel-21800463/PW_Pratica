import {Component, OnInit} from '@angular/core';
import {ICourse} from '../university/manageCourse/course.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CourseService} from '../university/manageCourse/course.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {ISubject} from '../university/manageSubject/subject.model';
import {SubjectService} from '../university/manageSubject/subject.service';
import {ITeacher} from '../university/manageTeacher/teacher.model';
import {TeacherService} from '../university/manageTeacher/teacher.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  courses: ICourse[] | null = null;
  subjects: ISubject[] | null = null;
  teachers: ITeacher[] | null = null;

  public show = false;
  public buttonName: any = 'Ver detalhes';

  public show1 = false;
  public buttonName1: any = 'Ver detalhes';

  public show2 = false;
  public buttonName2: any = 'Ver detalhes';

  constructor(
    protected modalService: NgbModal,
    private courseService: CourseService,
    private spinner: NgxSpinnerService,
    private subjectService: SubjectService,
    private teacherService: TeacherService
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.courseService.getCourses().subscribe(data => {
      this.spinner.hide();
      this.courses = data;
    }, err => {
      this.spinner.hide();
    });

    this.spinner.show();
    this.subjectService.getSubjects().subscribe(data => {
      this.spinner.hide();
      this.subjects = data;
    }, err => {
      this.spinner.hide();
    });

    this.spinner.show();
    this.teacherService.getTeachers().subscribe(data => {
      this.spinner.hide();
      this.teachers = data;
    }, err => {
      this.spinner.hide();
    });
  }

  toggle() {

    // CHANGE THE NAME OF THE BUTTON.
    if (this.show === true) {
      this.show = false;
      this.buttonName = 'Ver detalhes';
    }
    else {
      this.show = true;
      this.buttonName = 'Ocutar Detalhes';
    }
  }
  toggle1() {

    // CHANGE THE NAME OF THE BUTTON.
    if (this.show1 === true) {
      this.show1 = false;
      this.buttonName1 = 'Ver detalhes';
    }
    else {
      this.show1 = true;
      this.buttonName1 = 'Ocutar Detalhes';
    }
  }
  toggle2() {

    // CHANGE THE NAME OF THE BUTTON.
    if (this.show2 === true) {
      this.show2 = false;
      this.buttonName2 = 'Ver detalhes';
    }
    else {
      this.show2 = true;
      this.buttonName2 = 'Ocutar Detalhes';
    }
  }

}
export class NgbdDropdownBasic {
}


