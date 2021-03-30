import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { ContainerTemplateComponent } from "./container-template/container-template.component";
import { CreateTemplateComponent } from "./create-template/create-template.component";
import { ListtemplateComponent } from "./list-template/list-template.component";
import { UpdateTemplateComponent } from "./update-template/update-template.component";


const routes: Routes = [
  { path: 'new', component: CreateTemplateComponent, canActivate: [AuthGuard] },
  { path: 'update', component: UpdateTemplateComponent, canActivate: [AuthGuard] },
  { path: ':id/edit', component: UpdateTemplateComponent, canActivate: [AuthGuard] },
  { path: '', component: ContainerTemplateComponent, canActivate: [AuthGuard] }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
