import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as AppState from '../../store/app.reducer';


@Component({
  selector: 'app-display-document',
  templateUrl: './display-document.component.html',
  styleUrls: ['./display-document.component.scss']
})
export class DisplayDocumentComponent implements OnInit {
  doc = "";
  store$: Observable<boolean>;

  constructor(private store: Store<AppState.AppState>) { }

  ngOnInit(): void {
    this.store$ = this.store.select('document').pipe(
      map(documentState => {
        this.doc = documentState.currentDocument;
        return true;
      }));
  }
}










