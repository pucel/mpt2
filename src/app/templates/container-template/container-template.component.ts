import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromWorkerSelectors from '../store/template.selector';
import * as AppState from '../../store/app.reducer';

@Component({
  selector: 'app-container-template',
  templateUrl: './container-template.component.html',
  styleUrls: ['./container-template.component.scss']
})
export class ContainerTemplateComponent implements OnInit {

  showTemplates$: Observable<boolean>;
  showDetail$: Observable<boolean>;
  showUpdate$: Observable<boolean>;
  file$: Observable<boolean>;
  create$: Observable<boolean>;
  constructor(private store: Store<AppState.AppState>) { }

  ngOnInit(): void {
    this.showTemplates$ = this.store.pipe(
      select(fromWorkerSelectors.showTemplateList)
    );
    this.showDetail$ = this.store.pipe(
      select(fromWorkerSelectors.ShowTemplateDetail)
    );
    this.showUpdate$ = this.store.pipe(
      select(fromWorkerSelectors.ShowTemplateUpdate)
    );
    this.file$ = this.store.pipe(
      select(fromWorkerSelectors.ShowTemplateFile)
    );
    this.create$ = this.store.pipe(
      select(fromWorkerSelectors.CreateTemplate)
    );
  }

}
