import React from "react";
import ReactDOM from "react-dom";
//React.createElement(Object)  ==> HTML(Browser rendering)

const parent = React.createElement("div" , {id:"parent"}, [React.createElement("div",{id:"child"},React.createElement("h1",{id:"heading"},"This is Namste React 🚀 ")),
React.createElement("div",{id:"child"},React.createElement("h1",{id:"heading"},"Complex structure"))])


const heading =  React.createElement("h1", {id:"heading"}, "Hello World from React");
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);