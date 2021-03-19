import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Worker } from '../worker.model'
import * as WorkerActions from '../store/worker.actions';
import * as AppState from '../../store/app.reducer';

@Component({
  selector: 'app-list-worker',
  templateUrl: './list-worker.component.html',
  styleUrls: ['./list-worker.component.scss']
})
export class ListWorkerComponent implements OnInit {

  workers$: Observable<Worker[]>;

  displayFiles: boolean = false;
  displayCreateDoc: boolean = false;
  displayEditForm: boolean = false;

  constructor(private store: Store<AppState.AppState>) { }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.start();
  }

  start() {
    // download workers to store
    this.store.dispatch(new WorkerActions.FetchWorkers());

    // get workers from store and display them
    this.workers$ = this.store.select('worker').pipe(
      map(
        workerState => workerState.workers
      ));
  }
  // show comonent for edit
  onEdit(worker: Worker) {
    this.store.dispatch(new WorkerActions.SetCurrentWorker(worker));
    this.displayEditForm = true;
    this.displayCreateDoc = false;
    this.displayFiles = false;
    this.start();
  }
  // show component with already created files related to the worker
  onShowFiles(worker: Worker) {
    this.store.dispatch(new WorkerActions.SetCurrentWorker(worker));
    this.displayEditForm = false;
    this.displayCreateDoc = false;
    this.displayFiles = true;
    this.start();
  }
  // display component for creating new file from component
  onCreateDoc(worker: Worker) {
    this.store.dispatch(new WorkerActions.SetCurrentWorker(worker));
    this.displayEditForm = false;
    this.displayCreateDoc = true;
    this.displayFiles = false;
    this.start();
  }
  // delete worker
  onDelete(worker: Worker) {
    this.store.dispatch(new WorkerActions.DeleteWorker(worker._id));
    this.start();
  }
}
