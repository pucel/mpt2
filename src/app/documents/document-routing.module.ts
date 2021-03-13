import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { CreateDocumentComponent } from "./create-document/create-document.component";
import { ListDocumentComponent } from "./list-document/list-document.component";
import { UpdateDocumentComponent } from "./update-document/update-document.component";


const routes: Routes = [
  { path: 'new', component: CreateDocumentComponent, canActivate: [AuthGuard] },
  { path: 'update', component: UpdateDocumentComponent, canActivate: [AuthGuard] },
  { path: ':id/edit', component: UpdateDocumentComponent, canActivate: [AuthGuard] },
  { path: '', component: ListDocumentComponent, canActivate: [AuthGuard] }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentRoutingModule { }
