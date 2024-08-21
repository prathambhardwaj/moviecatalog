import { Flex } from 'antd'
import { useEffect, useState } from 'react'
import { movieApiClient } from '../api/api.config'
import API_ENDPOINT from '../api/api.endpoint'
import MovieCatalog from './MovieCatalog'

export default function Home() {
  const [popularMovieList, setPopularMovieList] = useState([])
  const [topRatedList, setTopRatedList] = useState([])
  const [upcomingList, setUpcomingList] = useState([])

  const fetchPopularMovieList = (pageNo = 1) => {
    movieApiClient
      .get(`${API_ENDPOINT.FETCH_POPULAR_MOVIES}?page=${pageNo}`)
      .then((response) => {
        const results = response.data.results
        const list = results
          .filter((movie) => !!movie)
          .map((movie) => ({
            id: movie.id,
            title: movie.original_title,
            imageUrl: `https://image.tmdb.org/t/p/w185/${movie.poster_path}`,
            year: movie.release_date.slice(0, 4),
          }))

        setPopularMovieList(list)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const fetchTopRatedMovieList = (pageNo = 1) => {
    movieApiClient
      .get(`${API_ENDPOINT.FETCH_TOP_RATED_MOVIES}?page=${pageNo}`)
      .then((response) => {
        const results = response.data.results
        const list = results
          .filter((movie) => !!movie)
          .map((movie) => ({
            id: movie.id,
            title: movie.original_title,
            imageUrl: `https://image.tmdb.org/t/p/w185/${movie.poster_path}`,
            year: movie.release_date.slice(0, 4),
          }))

        setTopRatedList(list)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const fetchUpcomingMovieList = (pageNo = 1) => {
    movieApiClient
      .get(`${API_ENDPOINT.FETCH_UPCOMING_MOVIES}?page=${pageNo}`)
      .then((response) => {
        const results = response.data.results
        const list = results
          .filter((movie) => !!movie)
          .map((movie) => ({
            id: movie.id,
            title: movie.original_title,
            imageUrl: `https://image.tmdb.org/t/p/w185/${movie.poster_path}`,
            year: movie.release_date.slice(0, 4),
          }))

        setUpcomingList(list)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    fetchPopularMovieList()
    fetchTopRatedMovieList()
    fetchUpcomingMovieList()
  }, [])

  return (
    <Flex vertical>

      <MovieCatalog  title="Popular Movies" movieList={popularMovieList}/>
      <MovieCatalog  title="Top Rated Movies" movieList={topRatedList}/>
      <MovieCatalog  title="Upcoming Movies" movieList={upcomingList}/>

      {/* <InfiniteScroll
      data={data}
      fetchMoreData={fetchMoreData}
      hasMore={hasMore}
      loading={loadings}
      >
        <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      </InfiniteScroll> */}
    </Flex>
  )
}
