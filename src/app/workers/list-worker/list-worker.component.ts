import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Worker } from '../worker.model'
import * as WorkerActions from '../store/worker.actions';
import * as AppState from '../../store/app.reducer';
import * as fromWorkerSelectors from '../store/worker.selector';


@Component({
  selector: 'app-list-worker',
  templateUrl: './list-worker.component.html',
  styleUrls: ['./list-worker.component.scss']
})
export class ListWorkerComponent implements OnInit {

  workers$: Observable<Worker[]>;
  status$: Observable<void>;

  displayFiles: boolean = false;
  displayCreateDoc: boolean = false;
  displayEditForm: boolean = false;
  display: string;

  workerList$: Observable<boolean>;
  detail$: Observable<boolean>;
  isReady$: Observable<boolean>;
  update$: Observable<boolean>;
  files$: Observable<boolean>;
  updateCompleted$: Observable<boolean>;
  createDoc$: Observable<boolean>;
  numberOfWorkers$: Observable<boolean>;

  constructor(private store: Store<AppState.AppState>) { }

  ngOnInit(): void {
    // download workers to store
    this.store.dispatch(new WorkerActions.FetchWorkers());

    // get workers from store and display them
    this.workers$ = this.store.select('worker').pipe(
      map(
        workerState => workerState.workers
      ));

    this.workerList$ = this.store.pipe(
      select(fromWorkerSelectors.showWorkerList)
    );

    this.detail$ = this.store.pipe(
      select(fromWorkerSelectors.showDetail)
    );

    this.createDoc$ = this.store.pipe(
      select(fromWorkerSelectors.selectWorkerCreateDoc)
    );

    this.files$ = this.store.pipe(
      select(fromWorkerSelectors.selectWorkerShowFiles)
    );

    this.update$ = this.store.pipe(
      select(fromWorkerSelectors.selectWorkerUpdate)
    );

    // this.isReady$ = this.store.pipe(
    //   select(fromWorkerSelectors.selectWorkerReady)
    // );





    // this.isReady$ = this.store.pipe(
    //   select(fromWorkerSelectors.selectWorkerUpdateCompleted)
    // );





    // this.detail$ = this.store.pipe(
    //   select(fromWorkerSelectors.showDetail)
    // );

    // this.numberOfWorkers$ = this.store.pipe(
    //   select(fromWorkerSelectors.getWorkersLength)
    // );
  }






  // this.update$ = this.store.pipe(
  //   select(fromFileUploadSelectors.selectUploadFileProgress)
  // );

  // this.files$ = this.store.pipe(
  //   select(fromFileUploadSelectors.selectUploadFileError)
  // );

  // this.updateCompleted$ = this.store.pipe(
  //   select(fromFileUploadSelectors.selectUploadFileInProgress)
  // );

  // this.createDoc$ = this.store.pipe(
  //   select(fromFileUploadSelectors.selectUploadFileReady)
  // );







  // this.status$ = this.store.select('worker').pipe(
  //   map(workerState => {
  //     this.display = workerState.status;
  //   })//,
  //   // tap(() => {
  //   //   console.log(this.display);
  //   // })
  // )




  onDetail(worker: Worker) {
    this.store.dispatch(new WorkerActions.ShowWorkerDetail(worker));
  }
}
