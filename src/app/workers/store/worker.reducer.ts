
import { Worker } from "../worker.model";
import * as WorkerActions from './worker.actions';

export enum DisplayLeft {
  Ready = 'Ready',
  Update = 'Update',
  Files = 'Files',
  UpdateCompleted = 'UpdateCompleted',
  CreateDoc = 'CreateDoc',
  Detail = 'Detail',
  Workers = 'Workers',
  CreateWorker = 'CreateWorker'
}

export enum DisplayRight {
  Ready = 'Ready',
  Update = 'Update',
  Files = 'Files',
  UpdateCompleted = 'UpdateCompleted',
  CreateDoc = 'CreateDoc',
  Detail = 'Detail',
  Workers = 'Workers',
  Nothing = 'Nothing'
}


export interface State {
  workers: Worker[];
  currentWorker: Worker;
  displayLeftPanel: DisplayLeft;
  displayRightPanel: DisplayRight;
}

const initialState: State = {
  workers: [],
  currentWorker: null,
  displayLeftPanel: DisplayLeft.Workers,
  displayRightPanel: DisplayRight.Nothing
}

export function workerReducer(
  state = initialState,
  action: WorkerActions.WorkerActions) {
  switch (action.type) {
    case WorkerActions.FETCH_WORKERS:
      return {
        ...state,
        displayLeftPanel: DisplayLeft.Workers,
        displayRightPanel: DisplayRight.Nothing
      };
    case WorkerActions.SET_WORKERS:
      return {
        ...state,
        workers: [...action.payload]
      };
    case WorkerActions.ADD_WORKER:
      return {
        ...state
      };
    case WorkerActions.UPDATE_WORKER:
      return {
        ...state,
        displayLeftPanel: DisplayLeft.Detail,
        displayRightPanel: DisplayRight.Files,
        currentWorker: action.payload
      }
    case WorkerActions.SHOW_WORKER_DETAIL:
      return {
        ...state,
        displayLeftPanel: DisplayLeft.Detail,
        displayRightPanel: DisplayRight.Files,
        currentWorker: action.payload,
      }
    case WorkerActions.GET_WORKER:
      return {
        ...state
      };
    case WorkerActions.DELETE_WORKER:
      return {
        ...state,
        displayLeftPanel: DisplayLeft.Workers,
        displayRightPanel: DisplayRight.Nothing,
      };
    case WorkerActions.CREATE_DOC:
      return {
        ...state
      };
    case WorkerActions.EDIT_WORKER:
      return {
        ...state,
        currentWorker: action.payload,
        displayLeftPanel: DisplayLeft.Update,
        displayRightPanel: DisplayRight.Files,
      };
    case WorkerActions.SHOW_WORKERS_FILES:
      return {
        ...state,
        currentWorker: action.payload,
        displayLeftPanel: DisplayLeft.Detail,
        displayRightPanel: DisplayRight.Files,
      };
    // case WorkerActions.SET_WORKER_LIST_STATE:
    //   return {
    //     ...state,
    //     status: action.payload
    //   };
    case WorkerActions.CREATE_NEW_DOCUMENTS:
      return {
        ...state,
        currentWorker: action.payload,
        displayLeftPanel: DisplayLeft.Detail,
        displayRightPanel: DisplayRight.CreateDoc
      };
    case WorkerActions.CREATING_NEW_WORKER:
      return {
        ...state,
        displayLeftPanel: DisplayLeft.CreateWorker,
        displayRightPanel: DisplayRight.Nothing
      };
    default:
      return state;
  }
}


