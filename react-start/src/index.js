//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDom from "react-dom";

const name = "supanut";
const number = Math.floor(Math.random() * 10);
ReactDom.render(
  <div>
    <h1>Hello {name}</h1>
    <p>Your lucky number is {number}</p>
  </div>,
  document.getElementById("root")
);
