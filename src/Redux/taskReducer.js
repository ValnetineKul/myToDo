
export const actions = {
  ADD_TASK: 'ADD_TASK',
  DELETE_TASK: 'DELETE_TASK',
  UPDATE_TASK_TEXT: 'UPDATE_TASK_TEXT',
  UPDATE_DUE_DATE: 'UPDATE_DUE_DATE',
  UPDATE_IMPORTANCE: 'UPDATE_IMPORTANCE',
  UPDATE_ID: 'UPDATE_ID',
  EDIT_TASK_TEXT: 'EDIT_TASK_TEXT',
  EDIT_DUE_DATE: 'EDIT_DUE_DATE',
  UPDATE_COMPLETION: 'UPDATE_COMPLETION',
  SORT_BY_DUE_DATE: 'SORT_BY_DUE_DATE',
  SET_TASKS: 'SET_TASKS',
  SORT_TASKS: 'SORT_TASKS',
};

const startDate = new Date().toISOString().substring(0, 10);

const initialState = {
  tasks: [
    {
      id: 1,
      taskText: 'Very important stuff',
      importance: 'Normal',
      isExpired: false,
      isCompleted: false,
      creationDate: startDate,
      dueDate: '2019-11-11',
    },
  ],
  id: 2,
  taskText: 'Test',
  importance: '',
  isCompleted: false,
  isExpired: false,
  creationDate: startDate,
  dueDate: '',
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_TASK: {
      const newTask = {
        id: state.id,
        taskText: state.taskText,
        importance: state.importance ? state.importance : 'Normal',
        isExpired: action.task.isExpired ? action.task.isExpired : false,
        isCompleted: state.isCompleted ? state.isCompleted : false,
        creationDate: startDate,
        dueDate: state.dueDate ? state.dueDate : 'Not stated',
      };
      if (state.taskText.length > 2 && state.taskText.length < 100) {
        return {
          ...state,
          tasks: [...state.tasks, newTask],
          taskText: '',
          dueDate: '',
          id: state.id + 1,
        };
      }
      if (state.taskText.length < 2) {
        alert('Task description is too short');
      } else if (state.taskText.length > 100) {
        alert('Task description is too long');
      }
      return {...state};
    }
    case actions.UPDATE_TASK_TEXT: {
      return {
        ...state,
        taskText: action.text,
      };
    }
    case actions.UPDATE_DUE_DATE: {
      return {
        ...state,
        dueDate: action.date,
      };
    }
    case actions.UPDATE_IMPORTANCE: {
      return {
        ...state,
        importance: action.value,
      };
    }
    case actions.UPDATE_ID: {
      return {
        ...state,
        id: action.id,
      };
    }
    case actions.SET_TASKS: {
      console.log(3333, action);
      return {
        ...state,
        tasks: action.tasks,
      };
    }
    case actions.DELETE_TASK: {
      return {
        ...state,
        tasks: action.tasks,
      }
    }
    case actions.EDIT_DUE_DATE: {
      return {
        ...state,
        tasks: action.tasks,
      }
    }
    default:
      return state;
  }
};


export const addTaskAction = (task) => (
  {type: actions.ADD_TASK, task});

export const deleteTaskAction = (tasks) => (
  {type: actions.DELETE_TASK, tasks});

export const updateTaskTextAction = (text) => (
  {type: actions.UPDATE_TASK_TEXT, text});

export const editTaskTextAction = (text, id) => (
  {type: actions.EDIT_TASK_TEXT, text, id});

export const editDueDateAction = (tasks) => (
  {type: actions.EDIT_DUE_DATE, tasks});

export const updateDueDateAction = (date) => (
  {type: actions.UPDATE_DUE_DATE, date});

export const updateImportanceAction = (value) => (
  {type: actions.UPDATE_IMPORTANCE, value});

export const updateIdAction = (id) => (
  {type: actions.UPDATE_ID, id});

export const updateCompletionAction = (value, id) => (
  {type: actions.UPDATE_COMPLETION, value, id});

export const sortByDueDateAction = (data) => (
  {type: actions.SORT_BY_DUE_DATE, data});

export const sortTasks = (tasks) => (
  {type: actions.SORT_TASKS, tasks});




export const setTasksAction = (tasks) => (
  {type: actions.SET_TASKS, tasks});

export const setTasksActionAsync = (tasks) => (
  {type: actions.SET_TASKS, tasks});


export default taskReducer;
