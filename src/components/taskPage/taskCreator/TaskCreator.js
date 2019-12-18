
import React from 'react';
import { connect } from 'react-redux';
import styles from './TaskCreator.module.css';
import Selector from '../../Common/Selector';
import {
  addTaskAction,
  deleteTaskAction,
  editTaskTextAction, setTasksAction,
  sortByDueDateAction, updateCompletionAction,
  updateDueDateAction, updateIdAction, updateImportanceAction,
  updateTaskTextAction,
} from '../../../Redux/taskReducer';


const TaskCreator = ({ importance, taskText, dueDate, addTaskAction, updateTaskTextAction,
                       updateDueDateAction, updateImportanceAction, }) => {
  const newTaskText = React.createRef();

  const addTask = () => {
    addTaskAction(taskText);
    updateImportanceAction('Normal');
  };

  const changeText = () => {
    const text = newTaskText.current.value;
    updateTaskTextAction(text);
  };
  const updateDueDate = (date) => {
    updateDueDateAction(date);
  };
  return (
    <div className={styles.taskCreatorBox}>
      <Selector
        updateImportance={updateImportanceAction}
        importance={importance}
      />
      <div className={styles.input}>
        <input
          type="text"
          className={styles.input}
          value={taskText}
          ref={newTaskText}
          onChange={changeText}
        />
      </div>
      <div className={styles.addButton}>
        <button
          type="button"
          onClick={addTask}
        >
          add task
        </button>
      </div>
      <div className={styles.dateChooser}>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => updateDueDate(e.target.value)}
        />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => (
  {
    tasks: state.taskPage.tasks,
    taskText: state.taskPage.taskText,
    id: state.taskPage.id,
    importance: state.taskPage.importance,
    isCompleted: state.taskPage.isCompleted,
    creationDate: state.taskPage.creationDate,
    dueDate: state.taskPage.dueDate,
    isExpired: state.taskPage.isExpired,
  });

const mapDispatchToProps = {
  addTaskAction,
  deleteTaskAction,
  updateTaskTextAction,
  sortByDueDateAction,
  editTaskTextAction,
  updateIdAction,
  updateDueDateAction,
  updateImportanceAction,
  updateCompletionAction,
  setTasksAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskCreator);
