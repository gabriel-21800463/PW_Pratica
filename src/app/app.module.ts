import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './layouts/footer/footer.component';
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { ProjectModule } from './project/project.module';
import { EducationModule} from './education/education.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ManageCertificationsUpdateComponent } from './education/certifications/manage-certifications/manage-certifications-update.component';
import { ManageCertificationsDeleteDialogComponent } from './education/certifications/manage-certifications/manage-certifications-delete-dialog.component';
import { ManageCertificationsDetailComponent } from './education/certifications/manage-certifications/manage-certifications-detail.component';
import { CourseComponent } from './university/manageCourse/course/course.component';
import { SubjectComponent} from './university/manageSubject/subject/subject.component';
import {UniversityModule} from './university/university.module';
import {ContactsModule} from './contacts/contacts.module';
import {ProfileModule} from './profile/profile.module';
const firebaseConfig = {
  apiKey: 'AIzaSyDSK_cAe7IiiXSFJUAQbt2DKIUXyGRWa-c',
  authDomain: 'my-linkedin-a21800463.firebaseapp.com',
  databaseURL: 'https://my-linkedin-a21800463.firebaseio.com',
  projectId: 'my-linkedin-a21800463',
  storageBucket: 'my-linkedin-a21800463.appspot.com',
  messagingSenderId: '999968207165',
  appId: '1:999968207165:web:22a80f401698e1d8ac9554',
  measurementId: 'G-GJ2K1X19SB'
};

@NgModule({
  declarations: [
    FooterComponent,
    MainComponent,
    NavbarComponent,
    ManageCertificationsUpdateComponent,
    ManageCertificationsDeleteDialogComponent,
    ManageCertificationsDetailComponent,
    CourseComponent,
    SubjectComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    ProjectModule,
    EducationModule,
    UniversityModule,
    ContactsModule,
    ProfileModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      preventDuplicates: true
    }),
    NgxSpinnerModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
