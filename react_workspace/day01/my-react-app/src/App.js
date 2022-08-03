import logo from './logo.svg';
import './App.css';
import React from 'react';
import ToDoList from './ToDoList.js';

//1. class형 컴포넌트
//2. 함수형 컴포넌트
//3. 외부 파일 컴포넌트

function ToDoList2(props) {
  return (<>
    <h3>{props.title}</h3>
    <div>
      <lable>할 일 : </lable>
      <input />
      <button>저장</button>
    </div>
    <ol>
      <li>
      <span>첫번째 할 일</span>
      <button>완료</button>
      <button>완료</button>
      </li>
    </ol>
  </>)
}

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <ToDoList2 title="ToDoList"/>
    </div>
  );
}

export default App;
