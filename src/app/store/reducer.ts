import { createReducer, on } from '@ngrx/store';
import { toggleExpanded } from './actions';
import { toggleEditable } from './actions';
import { TaskState, task_initialState } from './states';

export const taskReducer = createReducer(
  task_initialState,
  on(toggleExpanded, (state) => ({
    ...state,
    isExpanded: !state.isExpanded,
  })),
  on(toggleEditable, (state) => ({
    ...state,
    isEditable: !state.isEditable,
  }))
);
