import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseComponent} from './course/course.component';
import {NotasComponent} from './notas/notas.component';
import {SubjectComponent} from './subject/subject.component';
import {TeacherComponent} from './teacher/teacher.component';
import {ExtramilesComponent} from './extramiles/extramiles.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'universitycourse',
        component: CourseComponent
      },
      {
        path: 'universityteacher',
        component: TeacherComponent
      },
      {
        path: 'universitysubject',
        component: SubjectComponent
      },
      {
        path: 'universitynotas',
        component: NotasComponent
      },
      {
        path: 'universityextramiles',
        component: ExtramilesComponent
      },
      ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversityRoutingModule { }
