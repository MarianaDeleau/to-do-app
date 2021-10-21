import { FC, useState } from "react";
import { Layout } from "..";
import { getTasks } from "../../../api";
import { Task } from "../../../types";
import { Card } from "react-bootstrap";


// const Tasks = () => {
//     const [task, setTask] = useState<Task[]>();
  
//     const obtenerTareas = async () => {
//       const response = await getTasks();
//       setTask(response);
//     };
  
//     if (!task) {
//       obtenerTareas();
//     }
  
//     return (
//       <Layout mainClass="tasks">
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Titulo</th>
//               <th>Descripción</th>
//               <th>Progreso</th>
//               <th>Usuario</th>
//               <th>Fecha Creada</th>
//               <th>Fecha Iniciada</th>
//               <th>Fecha Finalizada</th>
//             </tr>
//           </thead>
//           <tbody>
//             {task?.map((item) => {
//               return (
//                 <tr>
//                   <td>{item.id}</td>
//                   <td>{item.title}</td>
//                   <td>{item.description}</td>
//                   <td>{item.progress}</td>
//                   <td>{item.user}</td>
//                   <td>{item.creationDate}</td>
//                   <td>{item.startDate}</td>
//                   <td>{item.completionDate}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//         </Layout>  );
//   };
  

