import React from "react";

function MovieShow() {
    const params = useParams();

  return (
    <div>
      <h3>{movies[params.movieId].title}</h3>
    </div>
  );
}

export default MovieShow;