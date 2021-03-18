import { CreatedDocument } from '../createdDocument.model';
import * as DocumentActions from './document.actions';


export interface State {
  documents: CreatedDocument[];
}

const initialState: State = {
  documents: []
}


export function documentReducer(
  state = initialState,
  action: DocumentActions.DocumentActions
) {
  switch (action.type) {
    case DocumentActions.FETCH_DOCUMENTS:
      return {
        ...state,
        initialState
      };
    case DocumentActions.SET_DOCUMENTS:
      return {
        ...state,
        documents: [...action.payload]
      };
    case DocumentActions.ADD_DOCUMENT:
      return {
        ...state,
        documents: [...state.documents, action.payload]
      };
    default:
      return state;
  }
}
