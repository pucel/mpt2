import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as AppState from '../../store/app.reducer';



@Component({
  selector: 'app-display-template',
  templateUrl: './display-template.component.html',
  styleUrls: ['./display-template.component.scss']
})
export class DisplayTemplateComponent implements OnInit {

  doc = "";
  store$: Observable<boolean>;

  constructor(private store: Store<AppState.AppState>) { }

  ngOnInit(): void {
    this.store$ = this.store.select('template').pipe(
      map(templateState => {
        this.doc = templateState.templateFile;
        console.log(this.doc);
        return true;
      }));
  }

}
