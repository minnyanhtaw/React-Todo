import React, { useState } from "react";
import Heading from "./Heading";
import ListCreateForm from "./ListCreateForm";
import ListGroup from "./ListGroup";
import ListStatus from "./ListStatus";
import { Toaster } from "react-hot-toast";


const App = () => {
  const [tasks, setTask] = useState([
    {
      id: 1,
      job: "Read Js Book",
      isDone: false,
    },
    {
      id: 2,
      job: "Read Documentation",
      isDone: false,
    },
    {
      id: 3,
      job: "Meet With Client",
      isDone: false,
    },
    {
      id: 4,
      job: "Prepare For Interview",
      isDone: false,
    },
  ]);

  const checkTask = (id) => {
    setTask(
      tasks.map((task) => {
        if (task.id === id) {
          task.isDone = !task.isDone;
        }
        return task;
      })
    );
  };

  const addTask = (job) => {
    const newTask = {
      id: Date.now(),
      job: job,
      isDone: false,
    };
    setTask([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };

  const editTask = (newJob, id) => {
    setTask(
      tasks.map((task) => {
        if (task.id === id) {
          task.job = newJob;
        }
        return task;
      })
    );
  };

  return (
    <div className=" border mx-auto mt-10 max-w-[500px] p-5">
      <Heading />
      <ListCreateForm addTask={addTask} />
      <ListStatus tasks={tasks} />
      <ListGroup
        tasks={tasks}
        checkTask={checkTask}
        deleteTask={deleteTask}
        editTask={editTask}
      />
      <Toaster />
    </div>
  );
};

export default App;
