import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import * as AppState from '../../store/app.reducer';
import * as TemplateActions from '../store/template.actions';
import { Template } from '../template.model';

@Component({
  selector: 'app-detail-template',
  templateUrl: './detail-template.component.html',
  styleUrls: ['./detail-template.component.scss']
})
export class DetailTemplateComponent implements OnInit {

  store$: Observable<boolean>;
  template: Template;

  constructor(private store: Store<AppState.AppState>) { }

  ngOnInit(): void {
    this.store$ = this.store.select('template').pipe(
      map(templateState => {
        this.template = templateState.currentTemplate;
        return true;
      }));
  }

  // delete template
  onDelete(template: Template) {
    this.store.dispatch(new TemplateActions.DeleteTemplate(template));
  }

  // show component for edit
  onEdit(template: Template) {
    this.store.dispatch(new TemplateActions.UpdateTemplate(template));
  }


}
