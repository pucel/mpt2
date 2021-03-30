import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UploadFileStoreModule } from '../upload-file/upload-file-store.module';

import { CreateTemplateComponent } from './create-template/create-template.component'
import { TemplateRoutingModule } from './template-routing.module';
import { ListtemplateComponent } from './list-template/list-template.component';
import { UpdateTemplateComponent } from './update-template/update-template.component';
import { ContainerTemplateComponent } from './container-template/container-template.component';
import { primeNgModule } from '../primeng.module';
import { DetailTemplateComponent } from './detail-template/detail-template.component';

@NgModule({
  declarations: [
    CreateTemplateComponent,
    ListtemplateComponent,
    UpdateTemplateComponent,
    ContainerTemplateComponent,
    DetailTemplateComponent
  ],
  imports: [RouterModule, ReactiveFormsModule, TemplateRoutingModule, CommonModule, UploadFileStoreModule, primeNgModule]
})
export class templateModule { }
