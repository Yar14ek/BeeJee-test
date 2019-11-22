import { GET_ALL_TASKS } from "../action/getTasks.js";

const initalState = {
  taskList: [],
  quantityTask:0,
};

export function tasksReducer(state = initalState, action) {
    switch (action.type) {
    case GET_ALL_TASKS:
      {
          console.log(action.payload.tasks)
        return {...state, taskList: action.payload.tasks, quantityTask:action.payload.total_task_count };
      }

    default:{
        return{
            state
        }
    }
  }
}
