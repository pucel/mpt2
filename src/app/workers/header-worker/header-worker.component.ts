import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Worker } from '../worker.model'
import * as WorkerActions from '../store/worker.actions';
import * as AppState from '../../store/app.reducer';
import * as fromWorkerSelectors from '../store/worker.selector';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header-worker',
  templateUrl: './header-worker.component.html',
  styleUrls: ['./header-worker.component.scss']
})
export class HeaderWorkerComponent implements OnInit {

  workers$: Observable<Worker[]>;
  status$: Observable<void>;

  displayFiles: boolean = false;
  displayCreateDoc: boolean = false;
  displayEditForm: boolean = false;
  display: string;
  worker: Worker;

  workerList$: Observable<boolean>;
  detail$: Observable<boolean>;
  isReady$: Observable<boolean>;
  update$: Observable<boolean>;
  files$: Observable<boolean>;
  updateCompleted$: Observable<boolean>;
  createDoc$: Observable<boolean>;
  numberOfWorkers$: Observable<boolean>;
  store$: Observable<boolean>;

  constructor(private store: Store<AppState.AppState>) { }

  ngOnInit(): void {
    // download workers to store
    this.store$ = this.store.select('worker').pipe(
      map(workerState => {
        this.worker = workerState.currentWorker;
        return true;
      })
    );

    this.detail$ = this.store.pipe(
      select(fromWorkerSelectors.showDetail)
    );

    this.workerList$ = this.store.pipe(
      select(fromWorkerSelectors.showWorkerList)
    );



    // this.numberOfWorkers$ = this.store.pipe(
    //   select(fromWorkerSelectors.getWorkersLength)
    // );

    // get workers from store and display them
    // this.workers$ = this.store.select('worker').pipe(
    //   map(
    //     workerState => workerState.workers
    //   ));

    // this.isReady$ = this.store.pipe(
    //   select(fromWorkerSelectors.selectWorkerReady)
    // );



    // this.update$ = this.store.pipe(
    //   select(fromWorkerSelectors.selectWorkerUpdate)
    // );

    // this.isReady$ = this.store.pipe(
    //   select(fromWorkerSelectors.selectWorkerUpdateCompleted)
    // );

    // this.files$ = this.store.pipe(
    //   select(fromWorkerSelectors.selectWorkerShowFiles)
    // );

    // this.createDoc$ = this.store.pipe(
    //   select(fromWorkerSelectors.selectWorkerCreateDoc)
    // );

    // this.detail$ = this.store.pipe(
    //   select(fromWorkerSelectors.showDetail)
    //);
  }

  // show component with already created files related to the worker
  onShowFiles(worker: Worker) {
    this.store.dispatch(new WorkerActions.ShowWorkersFiles(worker));
  }
  // display component for creating new file from component
  onCreateDoc(worker: Worker) {
    this.store.dispatch(new WorkerActions.CreateNewDocuments(worker));
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
