import React, { useState } from "react";
import toast from "react-hot-toast";

const ListCreateForm = (props) => {
  const [text, setText] = useState("");

  const handlerTextInput = (event) => {
    setText(event.target.value);
  };

  const handlerAddBtn = () => {
    props.addTask(text);
    setText("");
    toast.success("Add List Successfully", { position: "bottom-left" });
  };

  const handlerEnter = (event) => {
    if (event.key == "Enter") {
      props.addTask(text);
      setText("");
      toast.success("Add List Successfully", { position: "bottom-left" });
    }
  };

  return (
    <div action="#" id="createListForm" className="mb-5">
      <div className="flex justify-between">
        <input
          name="text-input"
          type="text"
          value={text}
          onChange={handlerTextInput}
          onKeyUp={handlerEnter}
          required
          className="flex-grow p-2 border-2 border-zinc-700"
        />
        <button
          id="addBtn"
          onClick={handlerAddBtn}
          className="bg-zinc-700 p-2 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-4 pointer-events-none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ListCreateForm;
