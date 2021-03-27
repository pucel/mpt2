import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';
import { State, DisplayLeft, DisplayRight } from './worker.reducer';
import { Worker } from '../worker.model';



// const getReady = (state: State): boolean =>
//   state.status === WorkerStatus.Ready;

const update = (state: State): boolean =>
  state.displayLeftPanel === DisplayLeft.Update;

// const updateCompleted = (state: State): boolean =>
// state.displayLeftPanel === DisplayLeft.UpdateCompleted;

const currentWorkerId = (state: State): string =>
  state.currentWorker._id;

const currentWorker = (state: State): Worker =>
  state.currentWorker;

const showFiles = (state: State): boolean =>
  state.displayRightPanel === DisplayRight.Files;

const createDoc = (state: State): boolean =>
  state.displayRightPanel === DisplayRight.CreateDoc;

const workersLength = (state: State): boolean =>
  state.workers.length === 0;

const amountOfWorkers = (state: State): number =>
  state.workers.length;



// used in list workers
const workerList = (state: State): boolean =>
  state.displayLeftPanel === DisplayLeft.Workers;



const workerDetail = (state: State): boolean =>
  state.displayLeftPanel === DisplayLeft.Detail;

const showCreateWorker = (state: State): boolean =>
  state.displayLeftPanel === DisplayLeft.CreateWorker;


export const selectWorkerFeatureState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('worker');

export const createWorker: MemoizedSelector<
  object,
  boolean
> = createSelector(
  selectWorkerFeatureState,
  showCreateWorker
);


export const getWorkersLength: MemoizedSelector<
  object,
  boolean
> = createSelector(
  selectWorkerFeatureState,
  workersLength
);

export const selectWorkerUpdate: MemoizedSelector<
  object,
  boolean
> = createSelector(
  selectWorkerFeatureState,
  update
);


// export const selectWorkerReady: MemoizedSelector<
//   object,
//   boolean
// > = createSelector(
//   selectWorkerFeatureState,
//   getReady
// );



// export const selectWorkerUpdateCompleted: MemoizedSelector<
//   object,
//   boolean
// > = createSelector(
//   selectWorkerFeatureState,
//   updateCompleted
// );

export const selectWorkerCreateDoc: MemoizedSelector<
  object,
  boolean
> = createSelector(
  selectWorkerFeatureState,
  createDoc
);

export const selectWorkerShowFiles: MemoizedSelector<
  object,
  boolean
> = createSelector(
  selectWorkerFeatureState,
  showFiles
);

export const getCurrentWorkerId: MemoizedSelector<
  object,
  string
> = createSelector(
  selectWorkerFeatureState,
  currentWorkerId
);

export const getCurrentWorker: MemoizedSelector<
  object,
  Worker
> = createSelector(
  selectWorkerFeatureState,
  currentWorker
);


export const showWorkerList: MemoizedSelector<
  object,
  boolean
> = createSelector(
  selectWorkerFeatureState,
  workerList
);

export const showDetail: MemoizedSelector<
  object,
  boolean
> = createSelector(
  selectWorkerFeatureState,
  workerDetail
);

export const amountWorkers: MemoizedSelector<
  object,
  number
> = createSelector(
  selectWorkerFeatureState,
  amountOfWorkers
);



export const selectors = createSelector(selectWorkerFeatureState, status => status.currentWorker);
