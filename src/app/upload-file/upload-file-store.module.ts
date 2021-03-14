import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UploadFileEffects } from './upload-file-store/effects';
import { featureReducer } from './upload-file-store/reducer';
import { UploadFileComponent } from './upload-file.component';

@NgModule({
  declarations: [UploadFileComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('uploadFile', featureReducer),
    EffectsModule.forFeature([UploadFileEffects])
  ],
  exports: [UploadFileComponent]
})
export class UploadFileStoreModule { }
