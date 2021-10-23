export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
    gender: string;
  };
  
export type Task = {
  id: string;
  title: string;
  description: string;
  progress: string;
  user: string;
  creationDate: string;
  startDate: string;
  completionDate: string;
  };
  