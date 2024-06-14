import React from "react";
import List from "./List";
import EmptyList from "./EmptyList";

const ListGroup = (props) => {
  return (
    <div id="listGroup" className="flex flex-col gap-3">
      <EmptyList />

      {/* {tasks.map((task) => (
        <div
          className={` ${task.isDone && "opacity-40" } border p-2 bg-zinc-400`}
          key={task.id}
        >
          <p>
            {task.id} | {task.isDone ? "Done" : "Not Yet"}
          </p>
          <p>{task.job}</p>
        </div>
      ))} */}
    </div>
  );
};

export default ListGroup;
