import React, { useState } from "react";

const Assignment = () => {
  const [select, setSelect] = useState();

  function select1() {
    setSelect("select 1");
  }

  function select2() {
    setSelect("select 2");
  }

  return (
    <div className="container">
      <h1>Parent Components</h1>
      <div id="box1">
        <h3>Child Component 1</h3>
        <button onClick={select1}>option1</button>
      </div>
      <div id="box2">
        <h3>Child Component 2</h3>
        <button onClick={select2}>option2</button>
      </div>
      <p id="ptag">Selected option:{select}</p>
    </div>
  );
};

export default Assignment;
