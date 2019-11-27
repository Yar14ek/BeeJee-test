import {
  GET_ALL_TASKS,
  ADD_NEW_TASK,
  ADD_FILTER_PROP,
  ADD_DIRECTION_PROP,
  UPDATE_PAGE,
  LOGIN_ADMIN,
  CHOICE_ITEM,
  CLOSE_MODAL,
  CHECOUT_USER,
  UPDATE_TASK,
} from "../action/getTasks.js";

const initalState = {
  taskList: [],
  quantityTask: 0,
  username: "",
  filterProp: "id",
  page: "1",
  sort: "desc",
  loginMessage: "",
  isAdmin: localStorage.getItem('token')?true:false,
  isShowModal: false,
  idElem: "",
  updateTask:false
};

export function tasksReducer(state = initalState, action) {
  switch (action.type) {
    case GET_ALL_TASKS: {
      return {
        ...state,
        taskList: action.payload.tasks,
        quantityTask: action.payload.total_task_count,
        username: action.payload.tasks[0].username
      };
    }

    case ADD_NEW_TASK: {
      return {
        ...state,
        username: action.payload.message.username,
        quantityTask:action.payload.message.total_task_count
      };
    }

    case LOGIN_ADMIN: {
      const { status, message } = action.payload;
      if (status === "error") {
        localStorage.removeItem("token");
        return {
          ...state,
          loginMessage: message,
          isAdmin: false
        };
      }
      localStorage.setItem("token", message.token);
      return {
        ...state,
        loginMessage: "",
        isAdmin: true
      };
    }

    case ADD_FILTER_PROP: {
      return {
        ...state,
        filterProp: action.payload
      };
    }

    case ADD_DIRECTION_PROP: {
      return {
        ...state,
        sort: action.payload
      };
    }

    case UPDATE_PAGE: {
      return {
        ...state,
        page: action.payload
      };
    }
    case CHOICE_ITEM: {
      return {
        ...state,
        idElem: action.payload,
        isShowModal: true
      };
    }
    case CLOSE_MODAL:{
      console.log()
      return{
        ...state,
        isShowModal:false
      }
    }
    case CHECOUT_USER:{
      localStorage.removeItem("token");
      return{
        ...state,
        isAdmin:false
      }
    }
    case UPDATE_TASK:{
      return{
        ...state,
        updateTask: !state.updateTask
      }
    }
    default: {
      return {
        ...state
      };
    }
  }
}
