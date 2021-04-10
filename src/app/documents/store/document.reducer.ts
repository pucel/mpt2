import { CreatedDocument } from '../createdDocument.model';
import * as DocumentActions from './document.actions';


export interface State {
  documents: CreatedDocument[];
  currentDocument: string;
}

const initialState: State = {
  documents: [],
  currentDocument: null
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
    case DocumentActions.DISPLAY_DOCUMENT:
      return {
        ...state,
        currentDocument: action.payload
      };
    default:
      return state;
  }
}
