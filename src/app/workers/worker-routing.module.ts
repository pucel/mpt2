import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CreateWorkerComponent } from './create-worker/create-worker.component';
import { DocWorkerComponent } from './doc-worker/doc-worker.component';
import { ListWorkerComponent } from './list-worker/list-worker.component';
import { UpdateWorkerComponent } from './update-worker/update-worker.component';
import { AuthGuard } from '../auth/auth.guard';
import { ContainerWorkerComponent } from './container-worker/container-worker.component';

const routes: Routes = [
  { path: '', component: ContainerWorkerComponent, canActivate: [AuthGuard] },
  // { path: 'new', component: CreateWorkerComponent, canActivate: [AuthGuard] },
  // { path: 'edit', component: UpdateWorkerComponent, canActivate: [AuthGuard] },
  // { path: ':id/edit', component: UpdateWorkerComponent, canActivate: [AuthGuard] },
  // { path: ':id/doc', component: DocWorkerComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkerRoutingModule { }
