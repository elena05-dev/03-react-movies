import axios from "axios";
import type { Movie } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3";

interface FetchMoviesResponse {
  results: Movie[];
}

export async function fetchMovies(query: string): Promise<Movie[]> {
  const config = {
    params: {
      query,
      include_adult: false,
      language: "en-US",
      page: 1,
    },
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGQ3N2IzOTQxYWJjNjM4NWIyYmZjNTg1NDc1NzhiOSIsIm5iZiI6MTc1MTMxMTgzNi44MTYsInN1YiI6IjY4NjJlNWRjMTVlZjE1NTZkYTA4MDlmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1BK-xx7A06czdrt7PEmyspODBzm5qH3h5hjC3WLNWno`,
    },
  };

  const response = await axios.get<FetchMoviesResponse>(
    `${BASE_URL}/search/movie`,
    config
  );

  return response.data.results;
}
