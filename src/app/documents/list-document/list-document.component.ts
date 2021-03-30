import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { async, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import * as DocumentActions from '../store/document.actions';
import * as AppState from '../../store/app.reducer';
import { Worker } from '../../workers/worker.model';
import { CreatedDocument } from '../createdDocument.model';
import * as WorkerActions from '../../workers/store/worker.actions';
import { selectWorkerFeatureState } from 'src/app/workers/store/worker.selector';
// import { WorkerStatus } from '../../workers/store/worker.reducer';

@Component({
  selector: 'app-list-document',
  templateUrl: './list-document.component.html',
  styleUrls: ['./list-document.component.scss']
})
export class ListDocumentComponent implements OnInit {

  documents$: Observable<CreatedDocument[]>;
  store$: Observable<Worker>;
  worker: Worker;

  constructor(public store: Store<AppState.AppState>) { }

  ngOnInit(): void {
    // Get the current worker from store
    this.store$ = this.store.select('worker').pipe(
      map(workerState => {
        this.worker = workerState.currentWorker;
        return this.worker;
      }),
      tap(() => {
        // Download to store created and uploaded documents for particular worker
        this.store.dispatch(new DocumentActions.FetchDocuments(this.worker._id));
      })
    );

    // Get the created and uploaded documents for particular worker from store
    this.documents$ = this.store.select('document')
      .pipe(
        map(
          documentState => documentState.documents
        ));
  }

  onClose() {
    //this.store.dispatch(new WorkerActions.SetWorkerListState(WorkerStatus.Ready))
  }

  onNewFile() {
    this.store.dispatch(new WorkerActions.CreateNewDocuments(this.worker));
  }
}
