import { Document } from '../document.model';
import * as DocumentActions from './document.actions';


export interface State {
  documents: Document[];
}

const initialState: State = {
  documents: [
    new Document("35", "Contract", 1, "Popis")
  ]
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

    default:
      return state;
  }


}


