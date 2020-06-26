import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnviversityComponent } from './unviversity.component';
import {CourseComponent} from './course/course.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'universitycourse',
        component: CourseComponent
      }
      ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnviversityRoutingModule { }
