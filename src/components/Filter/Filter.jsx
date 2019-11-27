import React, { Component } from "react";
import { connect } from "react-redux";
import { addFilterProp, addDirectionProps } from "../../action/getTasks";
import{StyledSelect} from './filterStyle.js'

class Filter extends Component {
  filterChange = event => {
    this.props.updateFilterProp(event.target.value);
  };
  directionChange = event => {
    this.props.updateDirectionProp(event.target.value);
  };

  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Filter
          <StyledSelect onChange={this.filterChange}>
            <option value="id">Id</option>
            <option value="status">Status</option>
            <option value="username">Username</option>
            <option value="email">Email</option>
          </StyledSelect>
        </label>
        <label>
          Direction
          <StyledSelect onChange={this.directionChange}>
            <option value="desc">down</option>
            <option value="asc">up</option>
          </StyledSelect>
        </label>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateFilterProp: value => dispatch(addFilterProp(value)),
    updateDirectionProp: value => dispatch(addDirectionProps(value))
  };
};

export default connect("", mapDispatchToProps)(Filter);
