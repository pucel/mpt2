import { Worker } from "../worker.model";
import * as WorkerActions from './worker.actions';

export interface State {
  workers: Worker[];
  currentWorker: Worker;
}

const initialState: State = {
  workers: [],
  currentWorker: null
}



export function workerReducer(
  state = initialState,
  action: WorkerActions.WorkerActions) {
  switch (action.type) {
    case WorkerActions.FETCH_WORKERS:
      return {
        ...state,
        initialState
      };
    case WorkerActions.SET_WORKERS:
      return {
        ...state,
        workers: [...action.payload]
      };
    case WorkerActions.ADD_WORKER:
      return {
        ...state,
        workers: [...state.workers, action.payload]
      };
    case WorkerActions.UPDATE_WORKER:
      // const updatedWorker = {
      //   ...state.workers[action.payload.index],
      //   ...action.payload.newWorker
      // };

      // const updatedWorkers = [...state.workers];
      // updatedWorkers[action.payload.index] = updatedWorker;
      return {
        ...state
        //, workers: updatedWorkers
      };
    case WorkerActions.GET_WORKER:
      return {
        ...state
      };
    // case WorkerActions.DELETE_WORKER:
    // return {
    //   ...state
    // };
    case WorkerActions.CREATE_DOC:
      return {
        ...state
      };
    case WorkerActions.SET_CURRENT_WORKER:
      return {
        ...state,
        currentWorker: action.payload
      };
    default:
      return state;
  }
}


