import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from '../auth/store/auth.actions';
import * as WorkerActions from '../workers/store/worker.actions';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuthenticated = false;
  user$: Observable<boolean>;

  constructor(
    private store: Store<fromApp.AppState>, private router: Router
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

  onWorkers() {
    this.store.dispatch(new WorkerActions.FetchWorkers());
    this.router.navigate(["/workers"]);
  }

}

