import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Template } from '../template.model';
import * as TemplateActions from '../store/template.actions';
import * as AppState from '../../store/app.reducer';

@Component({
  selector: 'app-update-template',
  templateUrl: './update-template.component.html',
  styleUrls: ['./update-template.component.scss']
})
export class UpdateTemplateComponent implements OnInit {
  template: Template;
  updateTemplateForm: FormGroup;
  store$: Observable<boolean>;

  constructor(private store: Store<AppState.AppState>, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.store$ = this.store.select('template').pipe(
      map(templateState => {
        this.template = templateState.currentTemplate;
        this.initForm();
        return true;
      }));

  }

  initForm() {
    console.log('this Template');
    console.log(this.template);
    this.updateTemplateForm = this.fb.group({
      name: [this.template.name, Validators.required],
      description: [this.template.description, Validators.required]
    });
  }




  onSubmit() {
    this.store.dispatch(new TemplateActions.UpdateTemplate(<Template>(this.updateTemplateForm.value)));
  }


}


