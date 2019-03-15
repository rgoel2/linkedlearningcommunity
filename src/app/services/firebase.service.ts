import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../modals/user.modal'
import { firestore } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) {}

  getUser(userKey){
    return this.db.collection<User>('users').doc(userKey).valueChanges();
  }

  updateUserContacts(userKey, value, role){
       
    if(role=='s')
        return this.db.collection(`users/${userKey}/contacts`).doc('0').update({students:firestore.FieldValue.arrayUnion(value)});
      else
        return this.db.collection(`users/${userKey}/contacts`).doc('0').update({others:firestore.FieldValue.arrayUnion(value)});
  }

  addUser(userKey, userData){
    return this.db.collection('users').doc(userKey).set(userData)
  }

  addUserContacts(userKey, contactsData){
    console.log('inside addusercontacts function')
    return this.db.collection(`users/${userKey}/contacts`).doc('0').set(contactsData)
  }
}