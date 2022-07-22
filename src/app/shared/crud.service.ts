import { Injectable } from '@angular/core';
import { WorkLog } from '../models/work-log.model';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';

// import {collectionData, collection, DocumentData, doc, getDoc, addDoc} from '@angular/fire/firestore';
// import {Observable} from "rxjs";
//

// import firebase from "@firebase/app";

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(public db: AngularFirestore) {}

  CreateWorkLog(woklog: WorkLog) {
    return this.db.collection('worklogs').add(woklog);
  }

  UpdateWorkLog(id: string, woklog: WorkLog) {
    return this.db.doc('worklogs/' + id).update(woklog);
  }

  DeleteWorkLog(id: string) {
    return this.db.doc('worklogs/' + id).delete();
  }

  GetCurrentDayWorkLogs() {
    return this.db.collection('worklogs').snapshotChanges();
  }

  GetCurrentDayWorkLog(id: string) {
    return this.db
      .collection<any>('worklogs', (ref) => ref.where('id', '==', id))
      .get();

  }
}
