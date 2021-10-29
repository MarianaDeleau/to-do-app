import { FC, FormEvent, useState } from "react"
import { Form } from "react-bootstrap"
import { Layout } from "../../components"
import { useAuth } from "../../hooks"
import { getParams } from "../../helpers/params"
import { edittask } from "./api"
import { getSelectedTasks } from '../../api'
import { Task } from "../../types";
import { useHistory } from "react-router"

const EditTask: FC =  () => {

  const { idParams } = getParams()
  
    const { push } = useHistory();
    const [tarea, setTarea] = useState<Task>()
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [progress, setProgress] = useState<string>('')
    const [creationDate, setCreationDate] = useState<string>('')
    const [startDate, setStartDate] = useState<string>('')
    const [completionDate, setCompletionDate] = useState<string>('')
  
  const selectedTask = async () => {
    const task: Task = await getSelectedTasks(`${idParams}`)
    setTarea(task)
    setDescription(task?.description)
    setTitle(task?.title)
    setProgress(task?.progress)
    setCreationDate(task?.creationDate)
    setStartDate(task?.startDate)
    setCompletionDate(task?.completionDate)
  }

  if (!tarea) {
    selectedTask()
  }

  console.log(tarea)
  
    const { userSession } = useAuth()
  
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    
      edittask({ title, description, progress, user: userSession.id, creationDate, startDate, completionDate });
      push("/dashboard");
      };

      return (
        <Layout mainClass="edit-task">
          <Form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Título</label>
              <input
                id="title"
                type="text"
                name="title"
                value={`${title}`}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
    
            <div>
              <label htmlFor="description">Descripción</label>
              <input
                id="description"
                type="text"
                name="description"
                value={`${description}`}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
    
            <div>
              <label htmlFor="progress">Progreso</label>
              <select 
                id="progress"
                name="progress"
                value={`${progress}`}
                onChange={(e) => {
                  setProgress(e.target.value);
                }}
                required
              >
                <option value="" selected>Seleccione Estado</option>
                <option value="pendiente">Pendiente</option>
                <option value="enproceso">En Proceso</option>
                <option value="finalizada">Finalizada</option>
                <option value="postergada">Postergada</option>
                <option value="cancelada">Cancelada</option>
                </select>
            </div>

            <div>
              <label htmlFor="creationDate">Fecha de Creación</label>
              <input
                id="creationDate"
                type="date"
                name="creationDate"
                value={`${creationDate}`}
                onChange={(e) => {
                  setCreationDate(e.target.value);
                }}
              />
            </div>

            <div>
              <label htmlFor="startDate">Fecha de Inicio</label>
              <input
                id="startDate"
                type="date"
                name="startDate"
                value={`${startDate}`}
                onChange={(e) => {
                  setStartDate(e.target.value);
                }}
              />
            </div>

            <div>
              <label htmlFor="completionDate">Fecha de Finalización</label>
              <input
                id="completionDate"
                type="date"
                name="completionDate"
                value={`${completionDate}`}
                onChange={(e) => {
                  setCompletionDate(e.target.value);
                }}
              />
            </div>
            <button type="submit">Editar Tarea</button>
          </Form>
        </Layout>
      );

    
}

export { EditTask };