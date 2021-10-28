import { useState } from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getTasks } from "../../api";
import { Dashboard2, Layout } from "../../components";
import { TaskCard } from "../../components/common";
import { useAuth } from "../../hooks";
import { Task } from "../../types";
import { User } from "../../types";
import { SortTask } from "../../utils/sort"

const Tasks = () => {
    const [task, setTask] = useState<Task[]>();
  
    const obtenerTareas = async () => {
      const response = await getTasks();
      setTask(response);
    };
  
    if (!task) {
      obtenerTareas();
  }
  
  task?.sort((a, b) => { return SortTask(a,b)})
  
  const { userSession } = useAuth()
     
      return (
        <Layout mainClass="tasks">
          <Dashboard2 title='PENDIENTES' >
            <Col className="d-flex flex-wrap justify-content-md-center">
              {task?.map((item) => {
                if (userSession.id === item.user) {
                  if (item.progress === 'pendiente') {
                    return (                  
                      <TaskCard id={item.id} title={item.title.toUpperCase()} description={item.description} progress={item.progress} user={item.user} creationDate={item.creationDate} startDate={item.startDate} completionDate={item.completionDate} >
                      </TaskCard>                  
                    )
                  }
                }
              })}               
          </Col>
          </Dashboard2>
          <Dashboard2 title='EN PROCESO' >
            <Col className="d-flex flex-wrap justify-content-md-center">
              {task?.map((item) => {
                if (userSession.id === item.user) {
                  if (item.progress === 'enproceso') {
                    return (                  
                      <TaskCard id={item.id} title={item.title.toUpperCase()} description={item.description} progress={item.progress} user={item.user} creationDate={item.creationDate} startDate={item.startDate} completionDate={item.completionDate} >
                      </TaskCard>                  
                    )
                  }
                }
              })}               
          </Col>
          </Dashboard2>
          <Dashboard2 title='FINALIZADAS' >
            <Col className="d-flex flex-wrap justify-content-md-center">
              {task?.map((item) => {
                if (userSession.id === item.user) {
                  if (item.progress === 'finalizada') {
                    return (                  
                      <TaskCard id={item.id} title={item.title.toUpperCase()} description={item.description} progress={item.progress} user={item.user} creationDate={item.creationDate} startDate={item.startDate} completionDate={item.completionDate} >
                      </TaskCard>                  
                    )
                  }
                }
              })}               
          </Col>
          </Dashboard2>
          <Dashboard2 title='POSTERGADAS' >
            <Col className="d-flex flex-wrap justify-content-md-center">
              {task?.map((item) => {
                if (userSession.id === item.user) {
                  if (item.progress === 'postergada') {
                    return (                  
                      <TaskCard id={item.id} title={item.title.toUpperCase()} description={item.description} progress={item.progress} user={item.user} creationDate={item.creationDate} startDate={item.startDate} completionDate={item.completionDate} >
                      </TaskCard>                  
                    )
                  }
                }
              })}               
          </Col>
          </Dashboard2>
          <Dashboard2 title='CANCELADAS' >
            <Col className="d-flex flex-wrap justify-content-md-center">
              {task?.map((item) => {
                if (userSession.id === item.user) {
                  if (item.progress === 'cancelada') {
                    return (                  
                      <TaskCard id={item.id} title={item.title.toUpperCase()} description={item.description} progress={item.progress} user={item.user} creationDate={item.creationDate} startDate={item.startDate} completionDate={item.completionDate} >
                      </TaskCard>                  
                    )
                  }
                }
              })}               
          </Col>
          </Dashboard2>
        </Layout>
        );
  };
  

export { Tasks }
