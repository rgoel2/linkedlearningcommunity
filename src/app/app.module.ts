import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//Components
import { HomeComponent } from './home/home.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { McopComponent } from './mcop/mcop.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { ResourcesComponent } from './resources/resources.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router';

//Firebase 
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';

import { AuthService } from './services/auth.service';

const appRoutes: Routes = [
  {path:'resources', component:ResourcesComponent},
  {path:'aboutus', component:AboutUsComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'register', component:RegistrationFormComponent},
  {path:'mcop', component:McopComponent},
  {path:'', component:HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ImageCarouselComponent,
    ResourcesComponent,
    GalleryComponent,
    AboutUsComponent,
    HomeComponent,
    RegistrationFormComponent,
    McopComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
 	  AngularFirestoreModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})



export class AppModule { }
