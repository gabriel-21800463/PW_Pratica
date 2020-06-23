import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [SharedModule, RouterModule.forChild([HOME_ROUTE]), BrowserModule],
  declarations: [HomeComponent]
})
export class HomeModule {}
