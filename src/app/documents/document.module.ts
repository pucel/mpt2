import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CreateDocumentComponent } from './create-document/create-document.component'
import { DocumentRoutingModule } from './document-routing.module';
import { ListDocumentComponent } from './list-document/list-document.component';
import { UpdateDocumentComponent } from './update-document/update-document.component';

@NgModule({
  declarations: [
    CreateDocumentComponent,
    ListDocumentComponent,
    UpdateDocumentComponent
  ],
  imports: [RouterModule, ReactiveFormsModule, DocumentRoutingModule, CommonModule]
})
export class DocumentModule { }
