import React, { useState } from 'react';

//구조 분해 할당
function InputWork({ toDoList, setToDoList }) {
    const [work, setWork] = useState("새로운 일");
    return (
      <div>
        <label>할 일 : </label>
        <input
          value={work}
          onChange={(e) => {
            setWork(e.currentTarget.value);
          }}
        />
        <button
          onClick={(e) => {
            setToDoList([...toDoList, { work, isDone: false }]);
          }}
        >
          저장
        </button>
        <div>{work}</div>
      </div>
    );
  }
  
  function ToDoList2(props) {
    const [toDoList, setToDoList] = useState([
      {work:'첫 번째 할 일', isDone:false},
      {work:'두 번째 할 일', isDone:false},
      {work:'세 번째 할 일', isDone:false}
    ])
    return (
      <>
        <h3>{props.title}</h3>
        <InputWork toDoList={toDoList} setToDoList={setToDoList}/>
        <ol>
          {toDoList.map((item, idx) => {
            return (
              <li key={idx}>
                <span>{item.work}</span>
                <button>완료</button>
                <button>삭제</button>
              </li>
            );
          })}
        </ol>
      </>
    );
  }

export default ToDoList2;