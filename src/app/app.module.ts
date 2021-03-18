import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkerEffects } from './workers/store/worker.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import { AuthEffects } from './auth/store/auth.effects';
import { HeaderComponent } from './header/header.component';
import { UploadFileStoreModule } from './upload-file/upload-file-store.module';
import { TemplateEffects } from './templates/store/template.effects';
import { DocumentEffects } from './documents/store/document.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([WorkerEffects, AuthEffects, TemplateEffects, DocumentEffects]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
    UploadFileStoreModule
  ],
  providers: [,],
  bootstrap: [AppComponent]
})
export class AppModule { }
