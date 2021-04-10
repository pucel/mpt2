import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
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

  templateId: string = "";
  store$: Observable<boolean>;

  constructor(private store: Store<AppState.AppState>, private fb: FormBuilder) { }

  ngOnInit(): void {
    // get the id from the uploaded file
    this.store$ = this.store.select('uploadFile').pipe(
      map(uploadFileState => {
        this.templateId = uploadFileState.id;
        return true
      })
    )
    this.initForm();
  }

  initForm() {
    this.newTemplateForm = this.fb.group({
      _id: [''],
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }


  onSubmit() {
    // save new template
    if (this.templateId) {
      this.newTemplateForm.value['_id'] = this.templateId;
      this.store.dispatch(new TemplateActions.AddTemplate(<Template>(this.newTemplateForm.value)));
    } else
      console.log('ID not set');
  }
}
