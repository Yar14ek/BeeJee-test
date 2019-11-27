export const GET_ALL_TASKS = "GET_ALL_TASKS";
export const ADD_NEW_TASK = "ADD_NEW_TASK";
export const ADD_FILTER_PROP = "ADD_FILTER_PROP";
export const ADD_DIRECTION_PROP = "ADD_DIRECTION_PROP";
export const UPDATE_PAGE = "UPDATE_PAGE";
export const LOGIN_ADMIN = "LOGIN_ADMIN";
export const CHOICE_ITEM = "CHOICE_ITEM";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const CHECOUT_USER = "CHECOUT_USER";
export const UPDATE_TASK = "UPDATE_TASK";
const url = "https://uxcandy.com/~shapoval/test-task-backend/v2/";

export function getAllTasks(prop) {
  const { username = "Yarik", page, filterProp, sort } = prop;
  return async dispatch => {
    await fetch(
      `${url}?developer=${username}&page=${page}&sort_field=${filterProp}&sort_direction=${sort}`
    )
      .then(res => {
        if (!res.status) {
          throw new Error(res.statusText);
        }
        return res;
      })
      .then(res => res.json())
      .then(res => {
        dispatch({
          type: GET_ALL_TASKS,
          payload: res.message
        });
      })

      .catch(err => {
        return new Error(err);
      });
  };
}

export function createTask(data) {
  return async dispatch => {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("email", data.email);
    formData.append("text", data.text);
    await fetch(`${url}create?developer=${data.username}`, {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(res => {
        dispatch({
          type: ADD_NEW_TASK,
          payload: res
        });
      })
      .catch(err => console.log(err));
  };
}

export function updateTasks(data) {
  return async dispatch => {
    const { text, token, status, id, username } = data;
    const formData = new FormData();
    formData.append("status", status);
    formData.append("token", token);
    formData.append("text", text);
    await fetch(`${url}edit/${id}?developer=${username}`, {
      method: "POST",
      body: formData
    }).then(res => res.json()).then(()=>{
      dispatch({
        type:UPDATE_TASK
      })
    })
  };
}
export function loginUser(data) {
  return async dispatch => {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);
    fetch(`${url}login?developer=admin`, {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(res => {
        dispatch({
          type: LOGIN_ADMIN,
          payload: res
        });
      });
  };
}
export const addFilterProp = val => {
  return dispatch => {
    dispatch({
      type: ADD_FILTER_PROP,
      payload: val
    });
  };
};
export const addDirectionProps = val => {
  return dispatch => {
    dispatch({
      type: ADD_DIRECTION_PROP,
      payload: val
    });
  };
};
export const updatePage = val => {
  return dispatch => {
    dispatch({
      type: UPDATE_PAGE,
      payload: val
    });
  };
};
export const choiseItem = id => {
  return dispatch => {
    dispatch({
      type: CHOICE_ITEM,
      payload: id
    });
  };
};
export const closeModal = () => {
  return dispatch => {
    dispatch({
      type: CLOSE_MODAL
    });
  };
};
export const checoutUser = () => {
  return dispatch => {
    dispatch({
      type: CHECOUT_USER
    });
  };
};
