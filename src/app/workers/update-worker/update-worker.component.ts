import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import * as AppState from '../../store/app.reducer';
import * as WorkerActions from '../store/worker.actions';
import { Worker } from '../worker.model';

@Component({
  selector: 'app-update-worker',
  templateUrl: './update-worker.component.html',
  styleUrls: ['./update-worker.component.scss']
})
export class UpdateWorkerComponent implements OnInit {

  updateWorkerForm: FormGroup;

  store$: Observable<boolean>;
  worker: Worker;

  constructor(private store: Store<AppState.AppState>) { }

  ngOnInit(): void {

    //Get the current worker from store
    this.store$ = this.store.select('worker').pipe(
      map(workerState => {
        console.log('Jsem tu');
        this.worker = workerState.currentWorker;
        console.log(this.worker);
        return true;
      }),
      tap(() => {
        this.initForm()
      })
    );
  }

  initForm() {
    this.updateWorkerForm = new FormGroup({
      'firstName': new FormControl(this.worker.firstName, Validators.required),
      'lastName': new FormControl(this.worker.lastName, Validators.required),
    });
  }

  onSubmit() {
    const newWorker = new Worker(this.worker._id, this.updateWorkerForm.value['firstName'], this.updateWorkerForm.value['lastName']);
    this.store.dispatch(new WorkerActions.UpdateWorker(newWorker));
  }
}
