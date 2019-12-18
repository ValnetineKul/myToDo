import React from 'react';
import {connect} from 'react-redux';
import TaskCreator from './taskCreator/TaskCreator';
import TaskList from './TaskList/TaskList';
import * as ACTIONS from '../../Redux/taskReducer';

class TaskPage extends React.Component {

  render() {
    console.log(this.props, 9090909090909090);
    return (
      <div>
        <div>
          <TaskCreator/>
        </div>
        <TaskList/>
        <button
          type="button"
          onClick={this.props.sortTasks}
        >
          Sort
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    tasks: state.taskPage.tasks,
  });

const mapDispatchToProps = {
  sortTasks: ACTIONS.sortTasks,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskPage);
