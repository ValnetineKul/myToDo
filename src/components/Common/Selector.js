import React, {Component} from 'react';
import styles from '../taskPage/taskCreator/TaskCreator.module.css';
import * as PropTypes from "prop-types";

class Selector extends Component {
  onSelectorChange = (data) => {
    this.props.updateImportance(data.currentTarget.value);
  };

  render() {
    const { importance } = this.props;
    return (
      <div className={styles.priority}>
        <select
          className="custom-select"
          id="inputGroupSelect01"
          value={importance}
          onChange={this.onSelectorChange}
        >
          <option value="Normal">Normal</option>
          <option value="High">High</option>
          <option value="Urgent">Urgent</option>
        </select>
      </div>
    );
  }
}

Selector.propTypes = {
  importance: PropTypes.any,
  updateImportance: PropTypes.any
};

export default Selector;
