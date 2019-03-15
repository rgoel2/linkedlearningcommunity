import { Injectable } from "@angular/core";
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseService } from "./firebase.service";
import  * as firebase from 'firebase/app';
import 'firebase/auth'


@Injectable()
export class AuthService {
    constructor(
     public afAuth: AngularFireAuth,
     public firebaseService : FirebaseService
    //  public data: AppComponent
   ){}

doRegister(value, inviteeData, role){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(res=>{
        this.populateUserInFireStore(res.user.uid, value,inviteeData, role)
      })
  })
}

populateUserInFireStore(uid, userData,inviteeData ,role){
  console.log('Here in Populate Method')
  // console.log(userData)
  
  const contacts = {
    students: [],
    others: [inviteeData.uid]
  }
  const user = {
    // contacts:[data.inviteeUID],
    uid: uid,
    firstname: userData.firstName,
    lastName : userData.lastName,
    email: userData.email,
    imageURL:"https://firebasestorage.googleapis.com/v0/b/mcop-65e2a.appspot.com/o/default_profile.jpeg?alt=media&token=50dd0811-7ad8-4aab-8a9c-095d5bf13732",
    role:"other",
    school:role=='s'?inviteeData.school : ""
  }

  console.log(user)
  if(role=='s'){
    user.role="student"
    // user.school = userData.school;
  }
  else if(role=='t'){
    user.role = "teacher"
  } else if (role=='o'){
    user.role='others'
  }

  this.firebaseService.addUser(uid, user)
  this.firebaseService.addUserContacts(uid, contacts)
  this.firebaseService.updateUserContacts(inviteeData.uid, uid, role)
  }
}