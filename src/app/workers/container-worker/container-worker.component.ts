import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as AppState from '../../store/app.reducer';
import * as fromWorkerSelectors from '../store/worker.selector';

@Component({
  selector: 'app-container-worker',
  templateUrl: './container-worker.component.html',
  styleUrls: ['./container-worker.component.scss']
})
export class ContainerWorkerComponent implements OnInit {

  constructor(private store: Store<AppState.AppState>) { }

  workerList$: Observable<boolean>;
  createWorker$: Observable<boolean>;
  detail$: Observable<boolean>;
  update$: Observable<boolean>;
  createDoc$: Observable<boolean>;
  files$: Observable<boolean>;
  displayDoc$: Observable<boolean>;

  ngOnInit(): void {

    this.workerList$ = this.store.pipe(
      select(fromWorkerSelectors.showWorkerList)
    );

    this.createWorker$ = this.store.pipe(
      select(fromWorkerSelectors.createWorker)
    );

    this.detail$ = this.store.pipe(
      select(fromWorkerSelectors.showDetail)
    );

    this.update$ = this.store.pipe(
      select(fromWorkerSelectors.selectWorkerUpdate)
    );

    this.createDoc$ = this.store.pipe(
      select(fromWorkerSelectors.selectWorkerCreateDoc)
    );

    this.files$ = this.store.pipe(
      select(fromWorkerSelectors.selectWorkerShowFiles)
    );

    this.displayDoc$ = this.store.pipe(
      select(fromWorkerSelectors.showDocument)
    );

  }


}
