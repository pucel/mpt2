import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { CreateDocumentComponent } from "./create-document/create-document.component";
import { ListDocumentComponent } from "./list-document/list-document.component";



const routes: Routes = [
  { path: 'new', component: CreateDocumentComponent, canActivate: [AuthGuard] },
  { path: '', component: ListDocumentComponent, canActivate: [AuthGuard] }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentRoutingModule { }
