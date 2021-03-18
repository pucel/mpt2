import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UploadFileStoreModule } from '../upload-file/upload-file-store.module';

import { CreateTemplateComponent } from './create-template/create-template.component'
import { TemplateRoutingModule } from './template-routing.module';
import { ListtemplateComponent } from './list-template/list-template.component';
import { UpdateTemplateComponent } from './update-template/update-template.component';

@NgModule({
  declarations: [
    CreateTemplateComponent,
    ListtemplateComponent,
    UpdateTemplateComponent
  ],
  imports: [RouterModule, ReactiveFormsModule, TemplateRoutingModule, CommonModule, UploadFileStoreModule]
})
export class templateModule { }
