// const ele = document.createElement("h1");
// ele.innerHTML = "Hello World"
// document.getElementById("container").append(ele);

{/* <div>
  <div>
    <h1>Hello World</h1>
    <h2>Hello Chrome React</h2>
  </div>

  <div>
    <h1>Hello Suman</h1>
    <h2>Hello Chrome React</h2>
  </div>
</div>; */}

// const div = React.createElement("div", {}, [
//   React.createElement("h1", {}, "Hello World"),
//   React.createElement("h2", {}, "Hello Chrome React"),
// ]);

import React from "react";
import ReactDOM from "react-dom";


const div = React.createElement("div",{},[
    React.createElement("div",{},[
        React.createElement("h1",{},"Hello World"),
        React.createElement("h2",{},"Hello Chrome Reat")
    ]),
    React.createElement("div",{},[
        React.createElement("h1",{},"Hello Suman"),
        React.createElement("h2",{},"Hello Abijith")
    ])

])

// const ele = React.createElement("h1",{id:"h1tag"},"Hello World")
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);
