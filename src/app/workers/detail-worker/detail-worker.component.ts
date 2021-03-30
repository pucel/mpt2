import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as AppState from '../../store/app.reducer';
import * as WorkerActions from '../store/worker.actions';
import { Worker } from '../worker.model';

@Component({
  selector: 'app-detail-worker',
  templateUrl: './detail-worker.component.html',
  styleUrls: ['./detail-worker.component.scss']
})
export class DetailWorkerComponent implements OnInit {

  store$: Observable<boolean>;
  worker: Worker;

  constructor(private store: Store<AppState.AppState>) { }

  ngOnInit(): void {

    this.store$ = this.store.select('worker').pipe(
      map(workerState => {
        this.worker = workerState.currentWorker;
        return true;
      }));
  }

  // delete worker
  onDelete(worker: Worker) {
    this.store.dispatch(new WorkerActions.DeleteWorker(worker._id));
  }

  // show component for edit
  onEdit(worker: Worker) {
    this.store.dispatch(new WorkerActions.EditWorker(worker));
  }


}
