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
  selector: 'app-update-worker',
  templateUrl: './update-worker.component.html',
  styleUrls: ['./update-worker.component.scss']
})
export class UpdateWorkerComponent implements OnInit, OnDestroy {
  id: string;
  updateWorkerForm: FormGroup;
  private storeSub: Subscription;

  constructor(private store: Store<AppState.AppState>, private route: ActivatedRoute, private router: Router) { }

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
    let firstName = "";
    let lastName = "";

    this.storeSub = this.store.select('worker').pipe(
      map(workerState => {
        return workerState.workers.find((worker, _id) => {
          return worker._id === this.id;
        });
      })).subscribe(worker => {
        firstName = worker.firstName;
        lastName = worker.lastName;
      })


    this.updateWorkerForm = new FormGroup({
      'firstName': new FormControl(firstName, Validators.required),
      'lastName': new FormControl(lastName, Validators.required),
    });
  }

  onSubmit() {
    const newWorker = new Worker(this.id, this.updateWorkerForm.value['firstName'], this.updateWorkerForm.value['lastName']);
    this.store.dispatch(new WorkerActions.UpdateWorker(newWorker));
    this.router.navigate(['/workers']);
  }

  ngOnDestroy() {
    this.storeSub.unsubscribe();
  }
}
