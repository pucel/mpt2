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

import { DetailTemplateComponent } from './detail-template/detail-template.component';
import { DisplayTemplateComponent } from './display-template/display-template.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { primeNgModule } from '../primeng.module';


@NgModule({
  declarations: [
    CreateTemplateComponent,
    ListtemplateComponent,
    UpdateTemplateComponent,
    ContainerTemplateComponent,
    DetailTemplateComponent,
    DisplayTemplateComponent
  ],
  imports: [RouterModule, ReactiveFormsModule, TemplateRoutingModule, CommonModule, UploadFileStoreModule, primeNgModule, PdfViewerModule]
})
export class templateModule { }
