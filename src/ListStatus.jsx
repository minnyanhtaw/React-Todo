import React from "react";

const ListStatus = (props) => {
  return (
    <div className="flex justify-between mb-5">
      <h2 className="font-bold text-zinc-700">Your List</h2>
      <p className="font-bold text-white bg-zinc-700 px-2 rounded-full py-1">
        Done(
        <span id="doneCount">
          {props.tasks.filter((task) => task.isDone === true).length}
        </span>
        /<span id="totalCount">{props.tasks.length}</span>)
      </p>
    </div>
  );
};

export default ListStatus;
