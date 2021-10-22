import { FC, FormEvent, useState } from "react"
import { Form } from "react-bootstrap"
import { Layout } from "../../components"
import { useAuth } from "../../hooks"
import { getParams } from "../../utils/params"
import { edittask } from "./api"
import { getSelectedTasks } from '../../api'
import { Task } from "../../types";

const EditTask: FC =  () => {

  const { titleParams, descriptionParams, progressParams, creationDateParams, startDateParams, completionDateParams, idParams } = getParams()
  
  
  const [tarea, setTarea] = useState<Task>()
  
  const selectedTask = async () => {
    const task = await getSelectedTasks(`${idParams}`)
    setTarea(task);
  }

  if (!tarea) {
    selectedTask()
  }
   
    const [title, setTitle] = useState<string>(`${tarea?.title}`)
    const [description, setDescription] = useState<string>(`${tarea?.description}`)
    const [progress, setProgress] = useState<string>(`${tarea?.progress}`)
    const [creationDate, setCreationDate] = useState<string>(`${tarea?.creationDate}`)
    const [startDate, setStartDate] = useState<string>(`${tarea?.startDate}`)
    const [completionDate, setCompletionDate] = useState<string>(`${tarea?.completionDate}`) 
    
    const {userSession} = useAuth()
  
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    
      edittask({ title, description, progress, user: userSession.id, creationDate, startDate, completionDate });
      
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
                <option value="pendiente" selected>Pendiente</option>
                <option value="enproceso">En Proceso</option>
                <option value="finalizada">Finalizada</option>
                <option value="postergada">Postergada</option>
                <option value="cancelada">Cancelada</option>
                </select>
            </div>
    
            {/* <div>
              <label htmlFor="user">Usuario</label>
              <input
                id="user"
                type="text"
                name="user"
                value={`${user}`}
                onChange={(e) => {
                  setUser(e.target.value);
                }}
              />
            </div> */}
    
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