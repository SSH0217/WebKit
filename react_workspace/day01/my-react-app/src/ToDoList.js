import React from 'react';

class ToDoList extends React.Component {
  constructor(props) {
    console.log(props.title);
    super(props);

    this.state = {
      data: "hahaha",
    };
  }
  render() {
    let styleObj = { color: "red", textDecoration: "underline" };
    return (
      <div>
        <h2>ToDo List</h2>
        <div>
          <label>할일 : </label>
          <input
            type="text"
            value={this.state.data}
            onChange={(e) => {
              this.setState({ data: e.currentTarget.value });
            }}
          />
          <div id="status">상태 : {this.state.data}</div>
          <ol>
            <li>
              <span style={styleObj}>프로젝트 기획하기</span>
              <button>완료</button>
              <button>삭제</button>
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default ToDoList;
