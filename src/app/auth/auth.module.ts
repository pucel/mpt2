import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
//import { SharedModule } from "../shared/shared.module";
import { AuthComponent } from "./auth.component";
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [AuthComponent, SignupComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, //SharedModule,
    RouterModule.forChild([{ path: '', component: AuthComponent }, { path: 'signup', component: SignupComponent }])]
})

export class AuthModule {

}
