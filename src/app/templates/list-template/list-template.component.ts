import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
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

  id: string;
  templates: Template[];
  subscription: Subscription;

  constructor(private store: Store<AppState.AppState>, private router: Router,
    private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.start();
  }

  start() {
    this.store.dispatch(new TemplateActions.FetchTemplates());

    this.subscription = this.store.select('template')
      .pipe(
        map(
          templateState => templateState.templates
        ))
      .subscribe(
        (templates: Template[]) => {
          this.templates = templates;
        }
      );
  }

  onDelete(template: Template) {
    this.store.dispatch(new TemplateActions.DeleteTemplate(template._id));
    this.start();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
