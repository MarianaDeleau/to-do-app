import { api } from "../utils/axios"
import { Task } from "../types";
import { mapToArray } from "./users"


const getSelectedTasks = (dataid) => {
    const response = api.get(`/tasks/${dataid}.json`);
    return response;
  };
  
  export { getSelectedTasks };
  