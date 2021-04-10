import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  //{ path: "", redirectTo: "/workers", pathMatch: "full" },
  {
    path: "employees",
    loadChildren: () =>
      import("./workers/worker.module").then(m => m.WorkerModule)
  },
  {
    path: "templates",
    loadChildren: () =>
      import("./templates/template.module").then(m => m.templateModule)
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
  },
  { path: "", redirectTo: "/auth", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
