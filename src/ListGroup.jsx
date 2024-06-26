import React from "react";
import List from "./List";
import EmptyList from "./EmptyList";

const ListGroup = (props) => {
  return (
    <div id="listGroup" className="flex flex-col gap-3">
      <EmptyList />

      {props.tasks.map((task) => (
        <List
          editTask={props.editTask}
          checkTask={props.checkTask}
          deleteTask={props.deleteTask}
          key={task.id}
          job={task.job}
          isDone={task.isDone}
          id={task.id}
        />
      ))}
    </div>
  );
};

export default ListGroup;
