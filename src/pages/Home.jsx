// pages/Home.js
import MovieCard from "../components/MovieCard";

function Home({ movies }) {
  return (
    <>
      <h1>Home Page</h1>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </>
  );
}

export default Home;
