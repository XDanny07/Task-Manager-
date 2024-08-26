export interface TaskState {
  isExpanded: boolean;
  isEditable: boolean;
}

export const task_initialState: TaskState = {
  isExpanded: false,
  isEditable: false,
};
