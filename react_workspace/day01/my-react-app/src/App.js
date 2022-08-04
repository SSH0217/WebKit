//영화페이지

import "./App.css";
import React, { useState } from "react";
import ToDoList from "./ToDoList.js";
import ToDoList2 from "./ToDoList2.js";
import Screen from "./Screen.js";
import MovieInput from "./MovieInput.js";
import MovieSearch from "./MovieSearch.js";
import MovieList from "./MovieList.js";

//1. class형 컴포넌트 ==> ToDoList
//2. 함수형 컴포넌트 ==> ToDoList2
//test시 helloWorld밑에만 바꾸면됨

function App() {
  const today = new Date().toISOString().substring(0, 10);
  const [movieList, setMovieList] = useState([
    { no: 1, movieTitle: "로키", movieOpenDate: "1982-01-15", rating: 3},
    { no: 2, movieTitle: "엔드게임", movieOpenDate: "2018-12-31", rating: 5},
    { no: 3, movieTitle: "아이언맨", movieOpenDate: "2006-06-30", rating: 4},
  ]);

  function saveMovieFn(movieTitle, movieOpenDate) {
    
  }
  return (
    <div className="container">
      <h1>영화 평점 정보 관리</h1>
      <h3>오늘 날짜 : {today}</h3>
      {/* <Screen /> */}

      {/* inputForm */}
      <MovieInput movieList={movieList} setMovieList={setMovieList} />

      {/* searchForm */}
      <MovieSearch />

      {/* listTable */}
      <MovieList movieList={movieList} setMovieList={setMovieList}/>
    </div>
  );
}

export default App;
