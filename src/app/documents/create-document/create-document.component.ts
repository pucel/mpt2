import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Document } from '../document.model';
import * as DocumentActions from '../store/document.actions';
import * as AppState from '../../store/app.reducer';

@Component({
  selector: 'app-create-document',
  templateUrl: './create-document.component.html',
  styleUrls: ['./create-document.component.scss']
})
export class CreateDocumentComponent {
  newDocumentForm: FormGroup;
  fileToUpload: File = null;

  constructor(private store: Store<AppState.AppState>, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    let name = "";
    let description = "";
    this.newDocumentForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'description': new FormControl(description, Validators.required),
    });
  }

  onSubmit() {
    const newDocument = new Document(null, this.newDocumentForm.value['name'], 1, this.newDocumentForm.value['description']);
    this.store.dispatch(new DocumentActions.AddDocument(newDocument));
    this.router.navigate(['/documents']);
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload);
  }

  uploadFileToActivity() {
    console.log('test');
    // this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
    //   // do something, if upload success
    // }, error => {
    //   console.log(error);
    // });
  }

}
