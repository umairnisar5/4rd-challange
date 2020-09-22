import React from 'react';
import ReactDOM from 'react-dom';
import {add, sub , mult , div } from "./Cals";

ReactDOM.render(
  <>

  <ul>
    <li>The sum of two no is  {add(40,4)}</li>
    <li>The subtraction of   {sub (40,4)} </li>
    <li>The multipliction of  {mult (40,4)} </li>
    <li>The divion of  {div (40,4)} </li>

  </ul>

  </>,
 
  document.getElementById('root')
);

