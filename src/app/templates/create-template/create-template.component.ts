import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Template } from '../template.model';
import * as TemplateActions from '../store/template.actions';
import * as AppState from '../../store/app.reducer';
import { Subscription } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.scss']
})
export class CreateTemplateComponent {
  newTemplateForm: FormGroup;
  fileToUpload: File = null;
  id: Subscription;
  templateId: string;

  constructor(private store: Store<AppState.AppState>, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    let name = "";
    let description = "";
    this.newTemplateForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'description': new FormControl(description, Validators.required),
    });
  }

  onSubmit() {
    console.log('1');
    this.id = this.store.select('uploadFile').pipe(
      map(uploadFileState => { return uploadFileState.id })
    ).subscribe((upload) => {
      this.templateId = upload;
    })
    const newtemplate = new Template(this.templateId, this.newTemplateForm.value['name'], 1, this.newTemplateForm.value['description']);
    console.log(newtemplate);
    this.store.dispatch(new TemplateActions.AddTemplate(newtemplate));
    console.log('2');
    this.router.navigate(['/templates']);
  }
}
