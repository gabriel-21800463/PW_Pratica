import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversityRoutingModule } from './university-routing.module';
import { TeacherComponent } from './teacher/teacher.component';
import { SubjectComponent } from './subject/subject.component';
import { NotasComponent } from './notas/notas.component';
import { ExtramilesComponent } from './extramiles/extramiles.component';
import { CourseUpdateComponent } from './course/course-update.component';

@NgModule({
  declarations: [TeacherComponent, SubjectComponent, NotasComponent, ExtramilesComponent, CourseUpdateComponent],
  imports: [
    CommonModule,
    UniversityRoutingModule
  ]
})
export class UniversityModule { }
