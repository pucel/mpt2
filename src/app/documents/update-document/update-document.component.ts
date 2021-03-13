import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Document } from '../document.model';
import * as DocumentActions from '../store/document.actions';
import * as AppState from '../../store/app.reducer';

@Component({
  selector: 'app-update-document',
  templateUrl: './update-document.component.html',
  styleUrls: ['./update-document.component.scss']
})
export class UpdateDocumentComponent implements OnInit {

  id: string;
  updateDocumentForm: FormGroup;
  private storeSub: Subscription;

  constructor(private store: Store<AppState.AppState>, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.store.dispatch(new DocumentActions.GetDocument(this.id));
        this.initForm();
      }
    );
  }

  initForm() {
    let name = "";
    let description = "";

    this.storeSub = this.store.select('document').pipe(
      map(documentState => {
        return documentState.documents.find((document, _id) => {
          return document._id === this.id;
        });
      })).subscribe(document => {
        name = document.name;
        description = document.description;
      })


    this.updateDocumentForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'description': new FormControl(description, Validators.required),
    });
  }

  onSubmit() {
    const newDocument = new Document(this.id, this.updateDocumentForm.value['name'], 1, this.updateDocumentForm.value['description']);
    this.store.dispatch(new DocumentActions.UpdateDocument(newDocument));
    this.router.navigate(['/documents']);
  }

  ngOnDestroy() {
    this.storeSub.unsubscribe();
  }
}

