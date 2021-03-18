import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Template } from '../template.model';
import * as TemplateActions from '../store/template.actions';
import * as AppState from '../../store/app.reducer';

@Component({
  selector: 'app-update-template',
  templateUrl: './update-template.component.html',
  styleUrls: ['./update-template.component.scss']
})
export class UpdateTemplateComponent implements OnInit {

  id: string;
  updateTemplateForm: FormGroup;
  private storeSub: Subscription;

  constructor(private store: Store<AppState.AppState>, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.store.dispatch(new TemplateActions.GetTemplate(this.id));
        this.initForm();
      }
    );
  }

  initForm() {
    let name = "";
    let description = "";

    this.storeSub = this.store.select('template').pipe(
      map(templateState => {
        return templateState.templates.find((template, _id) => {
          return template._id === this.id;
        });
      })).subscribe(template => {
        name = template.name;
        description = template.description;
      })


    this.updateTemplateForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'description': new FormControl(description, Validators.required),
    });
  }

  onSubmit() {
    const newtemplate = new Template(this.id, this.updateTemplateForm.value['name'], 1, this.updateTemplateForm.value['description']);
    this.store.dispatch(new TemplateActions.UpdateTemplate(newtemplate));
    this.router.navigate(['/templates']);
  }

  ngOnDestroy() {
    this.storeSub.unsubscribe();
  }
}

