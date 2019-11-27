import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllTasks, updatePage, choiseItem } from "../../action/getTasks";
import {
  StuleLi,
  StuleUl,
  StulePageUl,
  StulePageLi,
  Stulediv,
  TextStule
} from "./listStule";

class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: false
    };
  }
  async componentDidMount() {
    const { userName, filterProp, page, sort } = this.props;
    this.setState({
      loader: true
    });
    await this.props.updateTasksList({ userName, filterProp, page, sort });
    this.setState({
      loader: false
    });
  }

  componentDidUpdate(prevProps) {
    const { username, filterProp, page, sort, quantityTask,updateTask } = this.props;
    if (
      quantityTask !== prevProps.quantityTask ||
      filterProp !== prevProps.filterProp ||
      sort !== prevProps.sort ||
      page !== prevProps.page ||
      username !== prevProps.username||
      updateTask!==prevProps.updateTask
    ) {
      this.props.updateTasksList({ username, filterProp, page, sort });
    }
  }

  createList = arr => {
    return arr.map(i => {
      const statusText = i.status ? (
        <p>
          Status: <span style={{ color: "mediumspringgreen" }}>Done</span>
        </p>
      ) : (
        <p>
          Status: <span style={{ color: "tomato" }}>In progress..</span>{" "}
        </p>
      );
      return (
        <StuleLi key={i.id} id={i.id} onClick={() => this.choiseItem(i.id)}>
          <Stulediv>
            <h3>{`Name: ${i.username}`}</h3>
            <p>{`Email: ${i.email}`}</p>
            {statusText}
          </Stulediv>
          <TextStule>{i.text}</TextStule>
        </StuleLi>
      );
    });
  };
  choiseItem = i => {
    this.props.choiceElem(i);
  };
  createPage = val => {
    const num = Math.ceil(val / 3);
    let li = [];

    for (let i = 1; i <= num; i++) {
      let color = +this.props.page === i ? "tomato" : "white";
      li.push(
        <StulePageLi
          key={i}
          style={{ backgroundColor: `${color}` }}
          value={i}
          onClick={i => this.changePage(i)}
        >
          {i}
        </StulePageLi>
      );
    }
    return li;
  };

  changePage = val => {
    this.props.updatePage(val.target.value);
  };

  render() {
    const loader = this.state.loader ? (
      <h1>Loading...</h1>
    ) : this.props.taskList ? (
      this.createList(this.props.taskList)
    ) : null;

    const pageList = this.props.quantityTask
      ? this.createPage(this.props.quantityTask)
      : null;
    return (
      <div>
        <StuleUl>{loader}</StuleUl>
        <StulePageUl>{pageList}</StulePageUl>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    taskList,
    username,
    quantityTask,
    filterProp,
    page,
    sort,
    updateTask
  } = state.tasksReducer;
  return {
    taskList,
    username,
    quantityTask,
    filterProp,
    page,
    sort,
    updateTask
  };
};
const mapDispatchToProps = dispatch => {
  return {
    updateTasksList: name => dispatch(getAllTasks(name)),
    updatePage: page => dispatch(updatePage(page)),
    choiceElem: id => dispatch(choiseItem(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
