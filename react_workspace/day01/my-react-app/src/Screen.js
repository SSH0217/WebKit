import React, { useState } from "react";

function InputMovie({ movieList, setMovieList, movieLength }) {
  const [movie, setMovie] = useState({
    no: movieLength + 1,
    title: "testMovie",
    openDate: "2022.08.30",
    score: "3"
  });
  var tempTitle = "";
  var tempOpenDate = "";
  return (
    <div>
      <label>영화 제목 : </label>
      <input
        type="text"
        id="movieTitle"
        onChange={(e) => {
          tempTitle = e.target.value;
        }}
      />
      <br />
      <label>개봉날짜 : </label>
      <input
        type="text"
        id="movieOpenDate"
        onChange={(e) => {
          tempOpenDate = e.target.value;
        }}
      />
      <button
        onClick={(e) => {
            if(tempTitle != "" && tempOpenDate != "") {
                setMovie(movie.no = movieLength + 1);
                setMovie(movie.title = tempTitle);
                setMovie(movie.openDate = tempOpenDate);
                setMovieList([...movieList, movie]);

            }
        }}
      >
        저장
      </button>
    </div>
  );
}

function Screen() {
  const [movieList, setMovieList] = useState([
    {
      no: 1,
      title: "MORMIUS",
      openDate: "2022.06.15",
      score: "5",
    },
  ]);
  return (
    <div>
      <InputMovie
        movieList={movieList}
        setMovieList={setMovieList}
        movieLength={movieList.length}
      />
      <hr />
      <label>검색 : </label>
      <input type="text" />
      <table>
        <thead>
          <th>순서</th>
          <th>영화 제목</th>
          <th>개봉 날짜</th>
          <th>별점</th>
          <th>삭제</th>
        </thead>
        <tbody>
          {movieList.map((movie, index) => {
            return (
              <tr key={index}>
                <td>{movie.no}</td>
                <td>{movie.title}</td>
                <td>{movie.openDate}</td>
                <td>{movie.score}</td>
                <td>
                  <button>삭제</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Screen;
