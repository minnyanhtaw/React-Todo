import React, { useState } from "react";
import Heading from "./Heading";
import ListCreateForm from "./ListCreateForm";
import ListGroup from "./ListGroup";
import ListStatus from "./ListStatus";

const App = () => {
  const [tasks, setTask] = useState([
    {
      id: 1,
      job: "Read Js Book",
      isDone: true,
    },
    {
      id: 2,
      job: "Read Documentation",
      isDone: true,
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

  const addTask = (job) => {
    const newTask = {
      id: Date.now(),
      job: job,
      isDone: false,
    };
    setTask([...tasks, newTask]);
  };

  return (
    <div className=" border mx-auto mt-10 max-w-[500px] p-5">
      <Heading />
      <ListCreateForm addTask={addTask} />
      <ListStatus tasks={tasks} />
      <ListGroup tasks={tasks} />
    </div>
  );
};

export default App;
