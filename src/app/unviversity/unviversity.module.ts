import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnviversityRoutingModule } from './unviversity-routing.module';
import { UnviversityComponent } from './unviversity.component';


@NgModule({
  declarations: [UnviversityComponent],
  imports: [
    CommonModule,
    UnviversityRoutingModule
  ]
})
export class UnviversityModule { }
