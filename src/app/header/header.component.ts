import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from '../auth/store/auth.actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuthenticated = false;
  user$: Observable<boolean>;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
    this.user$ = this.store.select('auth')
      .pipe(map(authState => {
        this.isAuthenticated = !!authState.user;
        return true;
      }))
    this.user$.subscribe();
  }

  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }

}

