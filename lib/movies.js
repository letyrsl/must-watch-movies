// get data from API
export async function getMoviesData() {
  const url = 'https://api.themoviedb.org/3/movie/popular?api_key=f9c8d2ec17ad7eced08c1d32c265e9fc&language=en-US&page=1'
  const res = await fetch(url)
  const movies = await res.json()

  return movies.results.map((movie) => {
    return {
      title: movie.title,
      img: movie.poster_path
    }
  })
}
