import React, { Component } from "react";
import { Formik } from "formik";
import { StuledField, StuledBtn } from "./headerStyle.js";
import { getAllTasks } from "../../action/getTasks";
import { connect } from "react-redux";

// createTask({email:'test@test.com',username:'Yarik', text:'hello world'})
// getAllTasks('Yarik')
class Header extends Component {
  render() {
    //   this.props.updateTasks()
    //   console.log(this.props.tasksList)
    return (
      <Formik
        initialValues={{
          login: "",
          password: ""
        }}
      >
        {({ values, handleSubmit, dirty }) => (
          <form onSubmit={handleSubmit}>
            <StuledField
              name="login"
              value={values.login}
              placeholder="login"
            />
            <StuledField
              name="password"
              value={values.password}
              placeholder="password"
            />
            <StuledBtn type="submit" disabled={!dirty ? "disabled" : ""}>
              Submit
            </StuledBtn>
          </form>
        )}
      </Formik>
    );
  }
}
const mapStateToProps = state => {
    return{
    }
};
const mapDispatchToProps = dispatch => {
  return {
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
