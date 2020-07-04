import {Component, OnInit} from '@angular/core';
import {ICourse} from '../university/manageCourse/course.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CourseService} from '../university/manageCourse/course.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {ISubject} from '../university/manageSubject/subject.model';
import {SubjectService} from '../university/manageSubject/subject.service';
import {ITeacher} from '../university/manageTeacher/teacher.model';
import {TeacherService} from '../university/manageTeacher/teacher.service';
import {Course} from '../university/manageCourse/course.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  courses: ICourse[] | null = null;
  subjects: ISubject[] | null = null;
  teachers: ITeacher[] | null = null;
  guardaTeacher: string;
  guardaSubject: string;
  guardaNome: string;
  guardaTurno: string;
  guardaTemporario: number;
  public show = false;
  public buttonName: any = 'View Details';

  public show1 = false;
  public buttonName1: any = 'View Details';

  public show2 = false;
  public buttonName2: any = 'View Details';

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
      this.buttonName = 'View Details';
    }
    else {
      this.show = true;
      this.buttonName = 'Hide Details';
    }
    // tslint:disable-next-line:prefer-for-of
    for (let ultimo = this.courses.length - 1; ultimo > 0; ultimo--){
      // tslint:disable-next-line:prefer-for-of
      for (let i = ultimo; i > 0; i--){
        if (this.courses[i].date > this.courses[i - 1].date){
          this.guardaTemporario = this.courses[i].date;
          this.guardaNome = this.courses[i].nomeCurso;
          this.guardaTurno = this.courses[i].turno;
          this.guardaTeacher = this.courses[i].teacher;
          this.guardaSubject = this.courses[i].nomeAluno;
          this.courses[i].teacher = this.courses[i - 1].teacher;
          this.courses[i].nomeAluno = this.courses[i - 1].nomeAluno;
          this.courses[i].turno = this.courses[i - 1].turno;
          this.courses[i].nomeCurso = this.courses[i - 1].nomeCurso;
          this.courses[i].date = this.courses[i - 1].date;
          this.courses[i - 1].teacher = this.guardaTeacher;
          this.courses[i - 1].nomeAluno = this.guardaSubject;
          this.courses[i - 1].turno = this.guardaTurno;
          this.courses[i - 1].nomeCurso = this.guardaNome;
          this.courses[i - 1].date = this.guardaTemporario;
        }
      }
      /*if (this.guarda1 < this.courses[i].date){
          this.guarda1 = this.courses[i].date;
      }*/
      /*if ( this.guarda1 > this.courses[i].date){
        this.guarda1 = this.courses[i].date;
      }*/
    }
  }
  toggle1() {

    // CHANGE THE NAME OF THE BUTTON.
    if (this.show1 === true) {
      this.show1 = false;
      this.buttonName1 = 'View Details';
    }
    else {
      this.show1 = true;
      this.buttonName1 = 'Hide Details';
    }
  }
  toggle2() {

    // CHANGE THE NAME OF THE BUTTON.
    if (this.show2 === true) {
      this.show2 = false;
      this.buttonName2 = 'View Details';
      console.log(this.courses);
    }
    else {
      this.show2 = true;
      this.buttonName2 = 'Hide Details';
    }
  }
}
export class NgbdDropdownBasic {
}
export interface SortQuery {
  property: string;
  direction: string;
}




