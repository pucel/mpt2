import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from '../auth/store/auth.actions';
import * as WorkerActions from '../workers/store/worker.actions';
import * as TemplateActions from '../templates/store/template.actions';
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
  }

  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }

  onWorkers() {
    this.store.dispatch(new WorkerActions.FetchWorkers());
  }
  onTemplates() {
    this.store.dispatch(new TemplateActions.FetchTemplates());
  }




}

