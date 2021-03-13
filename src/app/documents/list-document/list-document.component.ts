import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import * as DocumentActions from '../store/document.actions';
import * as AppState from '../../store/app.reducer';
import { Document } from '../document.model';

@Component({
  selector: 'app-list-document',
  templateUrl: './list-document.component.html',
  styleUrls: ['./list-document.component.scss']
})
export class ListDocumentComponent implements OnInit {

  id: string;
  documents: Document[];
  subscription: Subscription;

  constructor(private store: Store<AppState.AppState>, private router: Router,
    private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.start();
  }

  start() {
    this.store.dispatch(new DocumentActions.FetchDocuments());

    this.subscription = this.store.select('document')
      .pipe(
        map(
          documentState => documentState.documents
        ))
      .subscribe(
        (documents: Document[]) => {
          this.documents = documents;
        }
      );
  }

  onDelete(document: Document) {
    this.store.dispatch(new DocumentActions.DeleteDocument(document._id));
    this.start();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
