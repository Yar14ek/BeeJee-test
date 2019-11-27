import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import { StuledField, StuledBtn } from "./headerStyle.js";
import { loginUser, checoutUser } from "../../action/getTasks";

class Header extends Component {

  componentDidUpdate(prevProps){
    if(this.props.isAdmin!==prevProps.isAdmin){
      
    }
  }
  render() {
    return (
      <Formik
        initialValues={{
          username: "",
          password: ""
        }}
        onSubmit={(value, action) => {
          action.resetForm({
            username: "",
            password: ""
          });
          this.props.loginUser(value);
        }}
      >
        {({ values, handleSubmit, dirty }) => (
          <form onSubmit={handleSubmit}>
            <StuledField
              name="username"
              value={values.username}
              placeholder="Name"
            />
            <StuledField
              name="password"
              value={values.password}
              placeholder="Password"
            />
            { localStorage.getItem("token") ? (
              <StuledBtn type="button" onClick={this.props.checout}>
                Checout
              </StuledBtn>
            ) : (
              <StuledBtn type="submit" disabled={!dirty ? "disabled" : ""}>
                Chek in
              </StuledBtn>
            )}
          </form>
        )}
      </Formik>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAdmin: state.tasksReducer.isAdmin
  };
};
const mapDispatchToProps = dispatch => {
  return {
    loginUser: val => dispatch(loginUser(val)),
    checout: () => dispatch(checoutUser())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
