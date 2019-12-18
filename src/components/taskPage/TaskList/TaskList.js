import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import styles from '../TaskPage.module.css';
import * as ACTIONS from '../../../Redux/taskReducer';



class TaskList extends React.Component {

  render() {
    console.log(this.props.tasks, 'taskList 4444444444444444444');
    const { editDueDateAction, deleteTaskAction, setTasksAction, editTaskTextAction, tasks } = this.props;
    const editDueDate = (date, id) => {
      editDueDateAction(tasks.map((task) => (task.id === id) ?
        { ...task, dueDate: date} :
        task));
    };
    // const editTaskText = (text, id) => {
    //   setTasksAction(tasks.map((task) => (task.id === id) ?
    //     { ...task, taskText: text} :
    //     task));
    // };
    const deleteTask = (id) => {
      console.log(setTasksAction, 909090909090909090);
      deleteTaskAction(tasks.filter((task) => task.id !== id));
    };
    const completeTask = (value, id) => {
      setTasksAction(tasks.map((task) => ((task.id === id) ?
        {...task, isCompleted: task.isCompleted} :
        task)));
    };
    const taskElements =
      tasks.map((p) => (
        <tr
          key={p.id}
          className={`${styles.task}
                        ${p.isExpired ? styles.expired : ''} 
                        ${p.isCompleted ? styles.completed : ''}`}
        >
          {console.log(11111111, p.isCompleted)}
          <td>{p.id}</td>
          <td>
            {p.importance}
          </td>
          <td>
            <input
              value={p.taskText}
              type="text"
              onChange={(e) => editTaskTextAction(e.target.value, p.id)}
            />
          </td>
          <td>{p.creationDate}</td>
          <td>
            {p.dueDate}
            <input
              type="date"
              value={p.dueDate}
              onChange={(e) => editDueDate(e.target.value, p.id)}
            />
          </td>
          <td>
            {p.isCompleted ? 'Completed' : 'Not completed'}
          </td>
          <td>
          <span>
            <button
              type="button"
              onClick={() => completeTask(
                p.isCompleted ?
                  p.isCompleted = false :
                  p.isCompleted = true, p.id,
              )}
            >
                            V
            </button>
            <button
              type="button"
              onClick={() => deleteTask(p.id)}
            >
              X
            </button>
          </span>
          </td>
        </tr>
      ));

    return (
      <Table bordered variant="dark">
        <thead>
        <tr>
          <th>#</th>
          <th>Priority</th>
          <th>Task body</th>
          <th>Start date</th>
          <th>Due date</th>
          <th>State</th>
          <th>Controls</th>
        </tr>
        </thead>
        <tbody>
        {taskElements}
        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = (state) => ({
  tasks: state.taskPage.tasks,
});

const mapDispatchToProps = {
  deleteTaskAction: ACTIONS.deleteTaskAction,
  editDueDateAction: ACTIONS.editDueDateAction,
  editTaskTextActionAsync: ACTIONS.setTasksActionAsync,
  editTaskTextAction: ACTIONS.setTasksAction,

};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
