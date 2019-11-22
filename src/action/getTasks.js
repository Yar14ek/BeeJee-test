export const GET_ALL_TASKS = "GET_ALL_TASKS";
export const ADD_NEW_TASK = "ADD_NEW_TASK";

const url = "https://uxcandy.com/~shapoval/test-task-backend/v2/";

export function getAllTasks(name = "user", page='1' ) {
  return async dispatch => {
    await fetch(`${url}?developer=${name}&page=${page}`)
      .then(res => {
        if (!res.status) {
          throw new Error(res.statusText);
        }
        return res;
      })
      .then(res =>  res.json())
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
  const formData = new FormData();
  formData.append("username", data.username);
  formData.append("email", data.email);
  formData.append("text", data.text);

  fetch(`${url}/create?developer=Yarik`, {
    method: "POST",
    body: formData
  })
    .then(res => res.json())
    .then(res => console.log(res.message));
}
