import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UploadFileStoreModule } from '../upload-file/upload-file-store.module';

import { CreateDocumentComponent } from './create-document/create-document.component'
import { DocumentRoutingModule } from './document-routing.module';
import { ListDocumentComponent } from './list-document/list-document.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { primeNgModule } from '../primeng.module';
import { DisplayDocumentComponent } from './display-document/display-document.component';

@NgModule({
  declarations: [
    CreateDocumentComponent,
    ListDocumentComponent,
    DisplayDocumentComponent
  ],
  imports: [RouterModule, ReactiveFormsModule, DocumentRoutingModule, CommonModule, UploadFileStoreModule, primeNgModule, PdfViewerModule],
  exports: [ListDocumentComponent, DisplayDocumentComponent]
})
export class DocumentModule { }
