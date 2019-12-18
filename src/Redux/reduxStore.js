import {combineReducers, createStore, applyMiddleware} from 'redux';
import taskReducer from './taskReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import {watchSortTasks} from "./../sagas/saga";
import {watchTextEdit} from "../sagas/saga";



const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers({
    taskPage: taskReducer,
});
const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(sagaMiddleware),
));
sagaMiddleware.run(watchSortTasks, watchTextEdit);

window.store = store;

export default store;
