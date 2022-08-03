import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ToDoList from "./ToDoList.js";
import ToDoList2 from "./ToDoList2.js";
import Screen from "./Screen.js";

//1. class형 컴포넌트 ==> ToDoList
//2. 함수형 컴포넌트 ==> ToDoList2
//test시 helloWorld밑에만 바꾸면됨


function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Screen />
    </div>
  );
}

export default App;
