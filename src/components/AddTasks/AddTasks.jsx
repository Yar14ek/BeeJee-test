import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import { createTask, getAllTasks } from "../../action/getTasks";

import { StuledField, StuledBtn, FormStyle,ErrorDiv } from "./addTaskStyle";

class AddTasks extends Component {
  validateEmail(value) {
    let error;
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }

  render() {
    return (
      <Formik
        initialValues={{
          username: "",
          email: "",
          text: ""
        }}
        onSubmit={(values, action) => {
          this.props.addNewTask({
            username: values.username,
            email: values.email,
            text: values.text
          });
          let page = (values.username===this.props.username)?this.props.page:1
          console.log('page',page)
          getAllTasks({ username: values.username,page:page });
          action.resetForm({
            username: "",
            email: "",
            text: ""
          });
        }}
      >
        {({ errors, touched, values, handleSubmit, dirty }) => (
          <FormStyle onSubmit={handleSubmit}>
            <StuledField
              name="username"
              value={values.username}
              placeholder="Enter your name"
            />
            <StuledField
              name="email"
              value={values.email}
              validate={this.validateEmail}
              placeholder="Enter your email"
            />
            <StuledField
              name="text"
              value={values.text}
              placeholder="Enter your task"
            />
            <StuledBtn type="submit" disabled={!dirty ? "disabled" : ""}>
              Create tasks
            </StuledBtn>
            {errors.email && touched.email && <ErrorDiv>{errors.email}</ErrorDiv>}
          </FormStyle>
        )}
      </Formik>
    );
  }
}
const mapStateToProps=state=>{
  return{
    username:state.tasksReducer.username,
    page:state.tasksReducer.page,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewTask: obj => dispatch(createTask(obj))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddTasks);
