import { api } from "../utils/axios"
import { Task } from "../types";
import { mapToArray } from "./users"


const getSelectedTasks = async (dataid:string) => {
    const response = await api.get(`/tasks/${dataid}.json`);
    return response.data;
  };
  
//getSelectedTasks('-Mm_LuhqQPUrqAk2XRpt')

  export { getSelectedTasks };
  