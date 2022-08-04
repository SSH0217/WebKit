import React, { useState } from "react";

function MovieSearch() {
    const [movieSearch, setMovieSearch] = useState();
    return (
        <div>
        <fieldset>
          <legend>영화 정보 검색</legend>
          <label>영화 검색 : </label>
          <input
            type="text"
            value={movieSearch}
            onChange={(e) => {
              setMovieSearch(e.currentTarget.value);
            }}
          />{" "}
          <span>{movieSearch}</span>
          <br />
        </fieldset>
      </div>
    )

}

export default MovieSearch;