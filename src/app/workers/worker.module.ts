import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateWorkerComponent } from './create-worker/create-worker.component';
import { UpdateWorkerComponent } from './update-worker/update-worker.component';
import { ListWorkerComponent } from './list-worker/list-worker.component';
import { WorkerRoutingModule } from './worker-routing.module';
import { CommonModule } from "@angular/common";
import { DocWorkerComponent } from './doc-worker/doc-worker.component';
import { DocumentModule } from '../documents/document.module';
import { DetailWorkerComponent } from './detail-worker/detail-worker.component';
import { HeaderWorkerComponent } from './header-worker/header-worker.component';

@NgModule({
  declarations: [
    CreateWorkerComponent,
    UpdateWorkerComponent,
    ListWorkerComponent,
    DocWorkerComponent,
    DetailWorkerComponent,
    HeaderWorkerComponent

  ],
  imports: [RouterModule, ReactiveFormsModule, WorkerRoutingModule, CommonModule, DocumentModule]
})
export class WorkerModule { }
