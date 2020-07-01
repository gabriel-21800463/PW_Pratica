import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseComponent} from './manageCourse/course/course.component';
import {SubjectComponent} from './manageSubject/subject/subject.component';
import {TeacherComponent} from './manageTeacher/teacher/teacher.component';
import {CourseUpdateComponent} from './manageCourse/course/course-update.component';
import {CourseResolver} from './manageCourse/course.resolver';
import {CourseDetailComponent} from './manageCourse/course/course-detail.component';
import {TeacherUpdateComponent} from './manageTeacher/teacher/teacher-update.component';
import {TeacherDetailComponent} from './manageTeacher/teacher/teacher-detail.component';
import {TeacherResolver} from './manageTeacher/teacher.resolver';
import {SubjectUpdateComponent} from './manageSubject/subject/subject-update.component';
import {SubjectResolver} from './manageSubject/subject.resolver';
import {SubjectDetailComponent} from './manageSubject/subject/subject-detail.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'course',
        component: CourseComponent
      },
      {
        path: 'teacher',
        component: TeacherComponent
      },
      {
        path: 'subject',
        component: SubjectComponent
      },
      {
        path: 'universit',
        component: CourseComponent,
      },
      {
        path: 'course/new',
        component: CourseUpdateComponent,
        resolve: {
          course: CourseResolver
        }
      },
      {
        path: 'course/:id/view',
        component: CourseDetailComponent,
        resolve: {
          course: CourseResolver
        }
      },
      {
        path: 'universit/teacher/:id/view',
        component: TeacherDetailComponent,
        resolve: {
          course: CourseResolver
        }
      },
      {
        path: 'universit/subject/:id/view',
        component: SubjectDetailComponent,
        resolve: {
          course: CourseResolver
        }
      },
      {
        path: 'course/:id/edit',
        component: CourseUpdateComponent,
        resolve: {
          course: CourseResolver
        }
      },
      {
        path: 'teacher/new',
        component: TeacherUpdateComponent,
        resolve: {
          teacher: TeacherResolver
        }
      },
      {
        path: 'teacher/:id/view',
        component: TeacherDetailComponent,
        resolve: {
          teacher: TeacherResolver
        }
      },
      {
        path: 'teacher/view',
        component: TeacherDetailComponent,
        resolve: {
          teacher: TeacherResolver
        }
      },
      {
        path: 'teacher/edit',
        component: TeacherDetailComponent,
        resolve: {
          teacher: TeacherResolver
        }
      },
      {
        path: 'teacher/:id/edit',
        component: TeacherUpdateComponent,
        resolve: {
          teacher: TeacherResolver
        }
      },
      {
        path: 'subject/new',
        component: SubjectUpdateComponent,
        resolve: {
          subject: SubjectResolver
        }
      },
      {
        path: 'subject/:id/view',
        component: SubjectDetailComponent,
        resolve: {
          subject: SubjectResolver
        }
      },
      {
        path: 'subject/:id/edit',
        component: SubjectUpdateComponent,
        resolve: {
          subject: SubjectResolver
        }
      },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversityRoutingModule { }
