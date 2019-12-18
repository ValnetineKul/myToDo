import React from 'react';
import {connect} from 'react-redux';
import TaskPage from './TaskPage';
import * as ACTIONS from '../../Redux/taskReducer';


class TaskPageContainer extends React.Component {
  timer = null;

  checkExpiredDate() {
    console.log('check');
    const {tasks, setTasksAction} = this.props;
      const tasksCheck = tasks.map((task) => ({
        ...task,
        isExpired: (Date.parse(task.dueDate) < new Date().getTime()),
      }));
      setTasksAction(tasksCheck);
  }

  componentDidMount() {
    this.timer = setInterval(this.checkExpiredDate.bind(this), 3000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <TaskPage/>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    tasks: state.taskPage.tasks,
    isExpired: state.taskPage.isExpired,
  });

const mapDispatchToProps = {
  setTasksAction: ACTIONS.setTasksAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskPageContainer);
