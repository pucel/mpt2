import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as AppState from '../../store/app.reducer';
import * as WorkerActions from '../store/worker.actions';
import { Worker } from '../worker.model';

@Component({
  selector: 'app-create-worker',
  templateUrl: './create-worker.component.html',
  styleUrls: ['./create-worker.component.scss']
})
export class CreateWorkerComponent implements OnInit {
  newWorkerForm: FormGroup;

  constructor(private store: Store<AppState.AppState>, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    let firstName = "";
    let lastName = "";
    this.newWorkerForm = new FormGroup({
      'firstName': new FormControl(firstName, Validators.required),
      'lastName': new FormControl(lastName, Validators.required),
    });
  }

  onSubmit() {
    const newWorker = new Worker(null, this.newWorkerForm.value['firstName'], this.newWorkerForm.value['lastName']);
    this.store.dispatch(new WorkerActions.AddWorker(newWorker));
    this.router.navigate(['/workers']);
  }

}
