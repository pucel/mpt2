import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Worker } from '../worker.model'
import * as WorkerActions from '../store/worker.actions';


import * as AppState from '../../store/app.reducer';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-worker',
  templateUrl: './list-worker.component.html',
  styleUrls: ['./list-worker.component.scss']
})
export class ListWorkerComponent implements OnInit, OnDestroy {
  id: string;
  workers: Worker[];
  subscription: Subscription;

  constructor(private store: Store<AppState.AppState>, private router: Router,
    private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.store.dispatch(new WorkerActions.FetchWorkers());

    this.subscription = this.store.select('worker')
      .pipe(
        map(
          workerState => workerState.workers
        ))
      .subscribe(
        (workers: Worker[]) => {
          this.workers = workers;
          console.log(this.workers);
        }
      );
  }

  onEditWorker(_id: string) {
    this.id = this.route.snapshot.paramMap.get("_id");
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}