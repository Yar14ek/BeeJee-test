import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik} from "formik";
import { updateTasks, closeModal } from "../../action/getTasks";
import {
  ModalContainer,
  ModalText,
  AtentionModal,
  CloseModal,
  StuleField,
  FormStyle,
  StuleButton
} from "./stule_modalWindow";

class ModalWindow extends Component {
  componentDidMount() {
    this.findTask();
  }

  findTask = () => {
    const { idElem, taskList } = this.props;
    let task = taskList.find(e => e.id === idElem);
    return this.updateForm(task);
  };

  updateForm = e => {
    console.log(e);
    return (
      <Formik
        initialValues={{
          text: '',
          status: 0
        }}
        onSubmit={(val, action) => {
          console.log(action);
          const token = localStorage.getItem("token");
          this.props.updateTask({
            ...e,
            token,
            text: val.text,
            status: val.status
          });
          this.props.closeModal();
        }}
      >
        {({ values, handleSubmit }) => (
          <FormStyle onSubmit={handleSubmit}>
            <ModalText>Name:{e.username}</ModalText>
            <StuleField name="text" value={values.text||e.text} />

            <ModalText>Choice status</ModalText>
            <StuleField name="status" component="select">
              <option value="0">In progress..</option>
              <option value="10">Done</option>
            </StuleField>
            <StuleButton type="submit">Update</StuleButton>
          </FormStyle>
        )}
      </Formik>
    );
  };

  render() {
    const token = localStorage.getItem("token");
    const modalWiew =
      this.props.isAdmin || token ? (
        this.findTask()
      ) : (
        <AtentionModal>Need administrator rights</AtentionModal>
      );
    const closeBTN = (
      <CloseModal onClick={() => this.props.closeModal()}>close</CloseModal>
    );
    const modalWindow = this.props.isShowModal ? (
      <ModalContainer>
        {closeBTN}
        {modalWiew}
      </ModalContainer>
    ) : null;
    return <div>{modalWindow}</div>;
  }
}
const mapStateToProps = state => {
  const { taskList, idElem, isShowModal, isAdmin } = state.tasksReducer;
  return {
    taskList,
    idElem,
    isShowModal,
    isAdmin
  };
};
const mapDispatchToProps = dispatch => {
  return {
    updateTask: data => dispatch(updateTasks(data)),
    closeModal: () => dispatch(closeModal())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);
