import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';
import { State, DisplayLeft, DisplayRight } from './template.reducer';
import { Template } from '../template.model';



const templates = (state: State): boolean =>
  state.displayLeftPanel === DisplayLeft.Templates;

const detail = (state: State): boolean =>
  state.displayLeftPanel === DisplayLeft.Detail;

const update = (state: State): boolean =>
  state.displayLeftPanel === DisplayLeft.Update;

const create = (state: State): boolean =>
  state.displayLeftPanel === DisplayLeft.CreateTemplate;

const file = (state: State): boolean =>
  state.displayRightPanel === DisplayRight.File;

export const selectTemplateFeatureState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('template');


export const showTemplateList: MemoizedSelector<
  object,
  boolean
> = createSelector(
  selectTemplateFeatureState,
  templates
);


export const ShowTemplateDetail: MemoizedSelector<
  object,
  boolean
> = createSelector(
  selectTemplateFeatureState,
  detail
);



export const ShowTemplateUpdate: MemoizedSelector<
  object,
  boolean
> = createSelector(
  selectTemplateFeatureState,
  update
);

export const ShowTemplateFile: MemoizedSelector<
  object,
  boolean
> = createSelector(
  selectTemplateFeatureState,
  file
);

export const CreateTemplate: MemoizedSelector<
  object,
  boolean
> = createSelector(
  selectTemplateFeatureState,
  create
);
