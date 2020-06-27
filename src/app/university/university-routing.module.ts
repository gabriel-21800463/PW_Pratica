import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseComponent} from './manageCourse/course/course.component';
import {NotasComponent} from './notas/notas.component';
import {SubjectComponent} from './subject/subject.component';
import {TeacherComponent} from './teacher/teacher.component';
import {ExtramilesComponent} from './extramiles/extramiles.component';


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
        path: 'notas',
        component: NotasComponent
      },
      {
        path: 'extramiles',
        component: ExtramilesComponent
      },
      ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversityRoutingModule { }
