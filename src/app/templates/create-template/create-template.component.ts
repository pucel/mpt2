import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Template } from '../template.model';
import * as TemplateActions from '../store/template.actions';
import * as AppState from '../../store/app.reducer';

@Component({
  selector: 'app-create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.scss']
})
export class CreateTemplateComponent {

  newTemplateForm: FormGroup;
  //fileToUpload: File = null;

  templateId: string;
  id$: Observable<boolean>;

  constructor(private store: Store<AppState.AppState>, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.newTemplateForm = this.fb.group({
      'name': ['', Validators.required],
      'description': ['', Validators.required]
    });
  }

  onSubmit() {
    // get the id from the uploaded file
    this.id$ = this.store.select('uploadFile').pipe(
      map(uploadFileState => {
        this.templateId = uploadFileState.id;
        return true
      })
    )
    this.id$.subscribe();
    // save new template
    this.store.dispatch(new TemplateActions.AddTemplate(<Template>(this.newTemplateForm.value)));
  }
}
