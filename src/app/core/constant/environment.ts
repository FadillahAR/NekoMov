export const MOVIE_BASE_URL = 'https://api.themoviedb.org/3/';
export const MOVIE_API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGQwODFhYzNlZGY5YTdjMzI0MTg3MWRkYzQ2ZjA4MSIsInN1YiI6IjY1YTU0MmEyMGYyYWUxMDEzMDViNTA2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ffO558T_WYiClqTW65KnRn8VbdHA6hkMFEE5Z1HdrAE';
export const MOVIE_OPTIONS = {
  headers: {
    Authorization: `Bearer ${MOVIE_API_KEY}`,
  },
};