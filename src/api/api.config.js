import axios from "axios";

export const movieApiClient = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YmVkZWQ3ZDZiMmIxY2UyYzVmZGU1MzI1ZGM3MWI0YiIsIm5iZiI6MTcyNDI0OTkzMC40NDk4NzEsInN1YiI6IjY2YmY2Mjc4OWQ3YWMwNzBhZTlhZGVmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h_HljyKa1UyWoxOP7lQ5MszWkmpY7---V-UHfWf04OI",
  },
});
