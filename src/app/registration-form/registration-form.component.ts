import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
import { AppComponent } from '../app.component';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../modals/user.modal';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})

export class RegistrationFormComponent implements OnInit {

  registerForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
  role : String;
  inviteeUID: String;
  inviteeData:User
  
  constructor(
    public firebaseService: FirebaseService,
    public data: AppComponent,
    public authService: AuthService,
    private fb: FormBuilder,
    private route: ActivatedRoute, 
    private router:Router

  ) {
      this.createForm();
     }
  
     createForm() {
       this.registerForm = this.fb.group({
         firstName: ['', Validators.required ],
         lastName: ['', Validators.required ],
         email: ['', Validators.required ],
         password: ['',Validators.required],
         confirmPassword: ['', {validator: this.checkPasswords }]
       });
     }


checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  let pass = group.controls.password.value;
  let confirmPass = group.controls.confirmPass.value;

  return pass === confirmPass ? null : { notSame: true }     
}
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.role = params.param1
      this.inviteeUID = params.param2
      console.log('Inside Registration Component: '+this.role+' '+this.inviteeUID)
      this.firebaseService.getUser(this.inviteeUID).subscribe(result => {
        const data = result as User
        this.setData(data)
      })
    })
  }

  setData(data){
    this.inviteeData = data;
    console.log(this.inviteeData)
  }
  
  tryRegister(value){
    this.authService.doRegister(value,this.inviteeData, this.role)
    this.router.navigate(['mcop'])
  }
}