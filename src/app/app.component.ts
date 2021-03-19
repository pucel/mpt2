import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as WorkerActions from './workers/store/worker.actions';
import * as AppState from './store/app.reducer';
import * as AuthActions from './auth/store/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mpt';

  constructor(private store: Store<AppState.AppState>) { }

  ngOnInit() {
    this.store.dispatch(new AuthActions.AutoLogin());
  }
}
