import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
//import { AlertComponent } from '../shared/alert/alert.component';
//import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from './store/auth.actions';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './user.model';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit, OnDestroy {
  isLoading = false;
  error: string = '';
  user: string = '';
  isAuthenticated = false;

  authForm: FormGroup;

  private closeSub: Subscription;
  private storeSub: Subscription;
  private userSub: Subscription;

  constructor(
    private store: Store<fromApp.AppState>, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.storeSub =
      this.store.select('auth').subscribe(authState => {
        this.isLoading = authState.loading;
        this.error = authState.authError;
        if (this.error) {
          console.error(this.error);
        }
      });
    this.initForm();
    this.isLogedIn();
  }

  initForm() {
    let email: string;
    let password: string;
    this.authForm = new FormGroup({
      'email': new FormControl(email, Validators.required),
      'password': new FormControl(password, [Validators.required, Validators.minLength(6)])
    });
  }

  isLogedIn() {
    this.userSub = this.store.select('auth')
      .pipe(map(authState => {
        return authState.user
      }))
      .subscribe(user => {
        this.isAuthenticated = !!user;
      });
    // only for presenting who is logged in on FE
    this.user = localStorage.getItem('userData');
  }

  onSignup() {
    this.router.navigate(['auth/signup']);
  }

  onSubmit() {
    if (!this.authForm.valid) {
      console.error('error');
      return;
    }
    const email = this.authForm.value.email;
    const password = this.authForm.value.password;
    this.store.dispatch(new AuthActions.LoginStart({ email: email, password: password }));
    this.authForm.reset();
  }

  // onHandleError() {
  //   this.store.dispatch(new AuthActions.ClearError());
  // }

  ngOnDestroy() {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
    if (this.storeSub) {
      this.storeSub.unsubscribe();
    }
  }


  onLogOut() {
    this.store.dispatch(new AuthActions.Logout());
  }
}
