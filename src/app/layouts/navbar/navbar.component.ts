import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Course, ICourse} from '../../university/manageCourse/course.model';
import { CourseComponent} from '../../university/manageCourse/course/course.component';
import { CourseService} from '../../university/manageCourse/course.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navBarSearchForm: FormGroup;
  course: Course;
  constructor() {
  }
  ngOnInit(): void {
    this.createForm();
  }
  private createForm() {
    this.navBarSearchForm = new FormGroup({
      searchKey: new FormControl(''),
    });
  }
}


