const API_KEY = process.env.API_KEY;
export default {
  Trending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  NetflixOrignals: {
    title: "Orignals",
    url: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  },
  ActionMovies: {
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  TopRatedMovies: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  HorrorMovies: {
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  RomanceMovies: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  DocumentriesMovies: {
    title: "Documentries",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  },
};
