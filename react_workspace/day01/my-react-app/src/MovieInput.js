import React, { useState } from "react";

function MovieInput({movieList, setMovieList}) {    
  const today = new Date().toISOString().substring(0, 10);
  const [movieTitle, setMovieTitle] = useState();
  const [movieOpenDate, setMovieOpenDate] = useState(today);

  function saveData(event) {
      console.log(movieTitle);
      console.log(movieOpenDate);

  }

  return (
    <div>
      <fieldset>
        <legend>영화 제목 정보 입력</legend>
        <label>영화제목 : </label>
        <input
          type="text"
          value={movieTitle}
          onChange={(e) => {
            setMovieTitle(e.currentTarget.value);
          }}
        />
        <br />
        <label>개봉 날짜 : </label>
        <input
          type="date"
          value={movieOpenDate}
          onChange={(e) => {
            setMovieOpenDate(e.currentTarget.value);
          }}
        />
        <button onClick={saveData}>저장</button>
        <br />
      </fieldset>
    </div>
  );
}

export default MovieInput;
