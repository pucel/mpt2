import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as TemplateActions from '../store/template.actions';
import * as AppState from '../../store/app.reducer';
import { Template } from '../template.model';

@Component({
  selector: 'app-list-template',
  templateUrl: './list-template.component.html',
  styleUrls: ['./list-template.component.scss']
})
export class ListtemplateComponent implements OnInit {

  templates$: Observable<Template[]>;

  constructor(private store: Store<AppState.AppState>) { }


  ngOnInit(): void {
    this.start();
  }

  start() {
    // get templates from store
    this.store.dispatch(new TemplateActions.FetchTemplates());

    this.templates$ = this.store.select('template')
      .pipe(
        map(
          templateState => templateState.templates
        ))
  }

  onDelete(template: Template) {
    this.store.dispatch(new TemplateActions.DeleteTemplate(template));
    this.start();
  }

  onNewTemplate() {
    this.store.dispatch(new TemplateActions.CreatingNewTemplate());
  }


  onDetail(template: Template) {
    this.store.dispatch(new TemplateActions.ShowTemplateDetail(template));
  }

}
