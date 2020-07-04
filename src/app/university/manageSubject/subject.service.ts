import { Injectable } from '@angular/core';
import { switchMap, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import {ISubject} from './subject.model';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private static SUBJECT_KEY = 'subject';

  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(public af: AngularFirestore, public db: AngularFireDatabase, public angularAuth: AngularFireAuth) {
  }

  public getSubjects(): Observable<Array<ISubject>> {
    return this.angularAuth.user
      .pipe(takeUntil(this.unsubscribe),
        switchMap(user => {
          return this.af.collection<ISubject>(SubjectService.SUBJECT_KEY).valueChanges();
        }));
  }

  public getSubjectById(subjectId: string): Observable<ISubject> {
    return this.af.collection<ISubject>(SubjectService.SUBJECT_KEY).doc(subjectId).valueChanges();
  }

  ordemDesc(subject: boolean): Observable<Array<ISubject>> {
    return this.angularAuth.user
      .pipe(takeUntil(this.unsubscribe),
        switchMap(subjects => {
          return this.af.collection<ISubject>(SubjectService.SUBJECT_KEY,
            ref => ref.orderBy('date', 'desc')).valueChanges();
        }));
  }

  public async createSubject(subject: ISubject): Promise<void> {
    const currentUser = firebase.auth().currentUser;
    subject.id = this.af.createId();
    subject.date = Date.now();
    return await this.af.collection(SubjectService.SUBJECT_KEY).doc(subject.id + subject.date).set(subject);
  }

  public async updateSubject(subject: ISubject): Promise<void> {
    const currentUser = firebase.auth().currentUser;
    return await this.af.collection(SubjectService.SUBJECT_KEY).doc(subject.id + subject.date).set(subject);
  }

  public async deleteSubject(subjectId: string): Promise<void> {
    const currentUser = firebase.auth().currentUser;
    return await this.af.collection(SubjectService.SUBJECT_KEY).doc(subjectId).delete();
  }
}
