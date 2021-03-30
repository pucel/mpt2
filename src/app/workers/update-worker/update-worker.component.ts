import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private store: Store<AppState.AppState>, private fb: FormBuilder) { }

  ngOnInit(): void {

    //Get the current worker from store
    this.store$ = this.store.select('worker').pipe(
      map(workerState => {
        this.worker = workerState.currentWorker;
        return true;
      }),
      tap(() => {
        this.initForm()
      })
    );
  }

  initForm() {
    this.updateWorkerForm = this.fb.group({
      firstName: [this.worker.firstName, Validators.required],
      lastName: [this.worker.lastName, Validators.required],


      // this.updateWorkerForm = new FormGroup({
      //   'firstName': new FormControl(this.worker.firstName, Validators.required),
      //   'lastName': new FormControl(this.worker.lastName, Validators.required),
      // });
    })
  }

  onSubmit() {
    this.store.dispatch(new WorkerActions.EditWorker(<Worker>this.updateWorkerForm.value));

  }

  onClose() {
    //this.store.dispatch(new WorkerActions.SetWorkerListState(WorkerStatus.Ready))
  }
}

