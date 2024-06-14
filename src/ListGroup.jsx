import React from "react";
import emptySvg from "./assets/react.svg";
import List from "./List";
import EmptyList from "./EmptyList";

const ListGroup = (props) => {
  return (
    <div id="listGroup" className="flex flex-col gap-3">
      <EmptyList />

      {props.tasks.map((task) => (
        <List
          editTask={props.editTask}
          deleteTask={props.deleteTask}
          checkTask={props.checkTask}
          job={task.job}
          isDone={task.isDone}
          key={task.id}
          id={task.id}
        />
      ))}
    </div>
  );
};

export default ListGroup;
