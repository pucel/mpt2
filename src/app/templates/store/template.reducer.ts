import { Template } from '../template.model';
import * as TemplateActions from './template.actions';


export interface State {
  templates: Template[];
}

const initialState: State = {
  templates: [
    new Template("35", "Contract", 1, "Popis")
  ]
}


export function templateReducer(
  state = initialState,
  action: TemplateActions.TemplateActions
) {
  switch (action.type) {
    case TemplateActions.FETCH_TEMPLATES:
      return {
        ...state,
        initialState
      };
    case TemplateActions.SET_TEMPLATES:
      return {
        ...state,
        templates: [...action.payload]
      };
    case TemplateActions.ADD_TEMPLATE:
      return {
        ...state,
        templates: [...state.templates, action.payload]
      };
    default:
      return state;
  }


}


