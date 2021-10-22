import { FC, FormEvent, useState } from "react";
import { Form } from "react-bootstrap";
//import { User } from "../../types";
import { addtask } from "./api";
import { Layout } from "../../components";
import { useAuth } from "../../hooks";

const AddTask: FC = () => {
    
    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [progress, setProgress] = useState<string>("")
   // const [user, setUser] = useState<string>("")
    const [creationDate, setCreationDate] = useState<string>("")
    const [startDate, setStartDate] = useState<string>("")
    const [completionDate, setCompletionDate] = useState<string>("")
    

    const {userSession} = useAuth()
  
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
          
      addtask({ title, description, progress, user: userSession.id, creationDate, startDate, completionDate });
      
      };

      return (
        <Layout mainClass="add-tasks">
          <h4>Agregar nuevas tareas</h4>
          <Form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Título</label>
              <input
                id="title"
                type="text"
                name="title"
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
                onChange={(e) => {
                  setCompletionDate(e.target.value);
                }}
              />
            </div>
            <button type="submit">Agregar Tarea</button>
          </Form>
        </Layout>
      );

    
}

export { AddTask };