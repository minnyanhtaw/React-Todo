import React, { useState } from "react";
import Heading from "./Heading";
import ListCreateForm from "./ListCreateForm";
import ListGroup from "./ListGroup";
import ListStatus from "./ListStatus";

const App = () => {
  return (
    <div className=" border mx-auto mt-10 max-w-[500px] p-5">
      <Heading />
      <ListCreateForm />
      <ListStatus />
      <ListGroup />
    </div>
  );
};

export default App;
