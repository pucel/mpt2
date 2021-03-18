import { Component, OnDestroy, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Observable, Observer, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import * as DocumentActions from '../store/document.actions';
import * as AppState from '../../store/app.reducer';
import { Worker } from '../../workers/worker.model';
import { CreatedDocument } from '../createdDocument.model';
import * as DocumentReducer from '../store/document.reducer';

@Component({
  selector: 'app-list-document',
  templateUrl: './list-document.component.html',
  styleUrls: ['./list-document.component.scss']
})
export class ListDocumentComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  observable: Observable<CreatedDocument[]>;
  documents: CreatedDocument[];
  storeSub: Subscription;
  docSub: Subscription;
  worker: Worker;
  constructor(public store: Store<AppState.AppState>) { }

  ngOnInit(): void {

    this.storeSub = this.store.select('worker').pipe(
      map(workerState => {
        return workerState.currentWorker
      })
    ).subscribe(worker => {
      this.worker = worker;
      this.store.dispatch(new DocumentActions.FetchDocuments(this.worker._id));
    })


    // this.observable.pipe(
    //   map(documentState => {
    //     return documentState.documents
    //   })
    // ).subscribe(documents => {
    //   this.documents = documents;
    // }

    // );

    const simpleObservable = new Observable((observer) => {
      this.store.select('document').pipe(
        map(documentState => {
          return documentState.documents
        }
        )), map((data) => {
          console.log(data);
          observer.next(data)
        })
      // observable execution
      observer.next()
      observer.complete()
    })

    // subscribe to the observable
    simpleObservable.subscribe(documents => {
      console.log(documents);
    })




    //   this.observable.next() = this.store.select('document')
    //     .pipe(
    //       map(
    //         documentState => documentState.documents
    //       ))
    //     .subscribe(
    //       (documents: CreatedDocument[]) => {
    //         observer.next();
    //         console.log(documents);
    //         this.documents = documents;
    //       }
    //     );
    // })







  }


  //   this.store.dispatch(new DocumentActions.FetchDocuments(this.worker._id));
  //   this.observable.next() = this.store.select('document')
  //     .pipe(
  //       map(
  //         documentState => documentState.documents
  //       ))
  //     .subscribe(
  //       (documents: CreatedDocument[]) => {
  //         observer.next();
  //         console.log(documents);
  //         this.documents = documents;
  //       }
  //     );
  // })


  showDocuments() {
    console.log('show');
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
    // this.storeSub.unsubscribe();

  }
}
