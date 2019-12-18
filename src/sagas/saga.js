import {takeLatest, put, select, takeEvery} from 'redux-saga/effects'
import { delay } from "@redux-saga/core/effects";
import * as actions from "../Redux/taskReducer";

const getTasks = state => state.taskPage.tasks;

function* sortTasksAsync() {
  yield delay(1000);
  const tasks = yield select(getTasks);
  const sortedTasks = tasks
       .sort((a, b) => Date.parse(b.dueDate) - Date.parse(a.dueDate));
  yield put(actions.sortTasks(sortedTasks));
}

export function* watchSortTasks(){
  yield takeLatest( actions.sortTasks, sortTasksAsync);
}

function* editTextAsync(props) {
  console.log(props, 999999999999999);
  yield delay(10000);
  const tasks = yield select(getTasks);
  const editedTextTasks = tasks
    .map((task) => (task.id === 1)
    ? { ...task, taskText: 'ass'}
    : task);
  yield put(actions.editTaskTextAction(editedTextTasks))
}

export function* watchTextEdit() {
  yield takeEvery( actions.editTaskTextAction, editTextAsync)
}

// function* checkExpiredAsync() {
//   yield delay(100);
//   const tasks = yield select(getTasks);
//   const tasksCheck = tasks
//     .map((task) => ({...task, isExpired: (Date.parse(task.dueDate) < new Date().getTime())}));
//   yield put(actions.setTasksAction(tasksCheck))
// }
//
// export function* watchCheckExpiredDate() {
//   yield takeLatest(actions.SET_TASKS, checkExpiredAsync);
// }
