import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllTasks } from "../../action/getTasks";
import { StuleLi, StuleUl } from "./listStule";

class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: false
    };
  }
  async componentDidMount() {
    this.setState({
      loader: true
    });
    await this.props.updateTasks();
    this.setState({
      loader: false
    });
  }

  createList = arr => {
    return arr.map(i => {
      return (
        <StuleLi key={i.id}>
          <div>
            <h3>{i.username}</h3>
            <p>{i.text}</p>
          </div>
        </StuleLi>
      );
    });
  };
  render() {
    const loader = this.state.loader ? (
      <h1>Loading...</h1>
    ) : this.props.taskList ? (
      this.createList(this.props.taskList)
    ) : null;

    return <StuleUl>{loader}</StuleUl>;
  }
}

const mapStateToProps = state => {
  return {
    taskList: state.tasksReducer.taskList
  };
};
const mapDispatchToProps = dispatch => {
  return {
    updateTasks: () => dispatch(getAllTasks("Yarik"))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
