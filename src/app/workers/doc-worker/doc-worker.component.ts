import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { first, map } from 'rxjs/operators';
import * as AppState from '../../store/app.reducer';
import * as WorkerActions from '../store/worker.actions';
import { Worker } from '../worker.model';

@Component({
  selector: 'app-doc-worker',
  templateUrl: './doc-worker.component.html',
  styleUrls: ['./doc-worker.component.scss']
})
export class DocWorkerComponent implements OnInit, OnDestroy {
  id: string;
  storeSub: Subscription;
  updateWorkerForm: FormGroup;
  public workerNow: Worker;
  public workerId: string;
  constructor(private store: Store<AppState.AppState>, private route: ActivatedRoute, private router: Router, private http: HttpClient,) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];

        this.store.dispatch(new WorkerActions.GetWorker(this.id));
        this.initForm();
      }
    );
  }

  initForm() {
    this.storeSub = this.store.select('worker').pipe(
      map(workerState => {
        return workerState.workers.find((worker, _id) => {
          return worker._id === this.id;
        });
      })).subscribe(worker => {
        this.workerNow = worker;
        this.workerId = worker._id;
      })



  }

  onSubmit() {
    this.store.dispatch(new WorkerActions.CreateDoc(this.workerId));
  }

  ngOnDestroy() {
    this.storeSub.unsubscribe();
  }

}
