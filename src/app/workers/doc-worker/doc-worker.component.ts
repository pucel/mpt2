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
        console.log('Jsem tu');
        this.worker = workerState.currentWorker;
        console.log(this.worker);
        return true;
      }),
      tap(() => {
        this.store.dispatch(new TemplateActions.FetchTemplates());
        this.initForm();
      }))
  }

  initForm() {
    console.log(this.worker);
    //Get the templates from store
    this.templates$ = this.store.select('template').pipe(
      map(templateState => {
        return templateState.templates
      }));
  }

  onSubmit(template: Template) {
    console.log(template);
    this.store.dispatch(new WorkerActions.CreateDoc({ workerId: this.worker._id, templateId: template._id }));
  }

}
