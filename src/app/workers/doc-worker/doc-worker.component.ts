import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import * as AppState from '../../store/app.reducer';
import * as WorkerActions from '../store/worker.actions';
import * as TemplateActions from '../../templates/store/template.actions';
import { Worker } from '../worker.model';
import { Template } from '../../templates/template.model';

@Component({
  selector: 'app-doc-worker',
  templateUrl: './doc-worker.component.html',
  styleUrls: ['./doc-worker.component.scss']
})
export class DocWorkerComponent implements OnInit {

  templates$: Observable<Template[]>;
  store$: Observable<boolean>;

  worker: Worker;

  constructor(private store: Store<AppState.AppState>) { }

  ngOnInit(): void {

    //Get the current worker from store
    this.store$ = this.store.select('worker').pipe(
      map(workerState => {
        this.worker = workerState.currentWorker;
        return true;
      }),
      tap(() => {
        this.store.dispatch(new TemplateActions.FetchTemplates());
        this.initForm();
      }))
  }

  initForm() {
    //Get the templates from store
    this.templates$ = this.store.select('template').pipe(
      map(templateState => {
        return templateState.templates
      }));
  }

  onSubmit(template: Template) {
    this.store.dispatch(new WorkerActions.CreateDoc({ workerId: this.worker._id, templateId: template._id }));
  }

  onClose() {
    //this.store.dispatch(new WorkerActions.SetWorkerListState(WorkerStatus.Ready))
  }

  // show component with already created files related to the worker
  onShowFiles(worker: Worker) {
    this.store.dispatch(new WorkerActions.ShowWorkersFiles(worker));
  }

}
