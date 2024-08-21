import { Divider, Flex, Input } from 'antd'
import { movieApiClient } from '../api/api.config'
import API_ENDPOINT from '../api/api.endpoint'
import { useEffect, useState } from 'react'
import InfiniteScroll from './InfiniteScroll'
import SearchList from './SearchList'

export default function Search() {
  const { Search } = Input
  const [searchedList, setSearchedList] = useState([])
  const [hasMore, setHasMore] = useState(false)
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [searchKeyword, setSearchKeyword] = useState('')
  const [favList, setFavList] = useState([])

  useEffect(() => {
    const favList = JSON.parse(localStorage.getItem('favList')) ?? []
    setFavList(favList.map((i) => i.id))
  }, [])

  const searchMovieByKeyword = (
    keyword,
    pageNo,
    updateSearchList = undefined
  ) => {
    const url = `${API_ENDPOINT.SEARCH_BY_KEYWORD}?query=${keyword}&language=en-US&page=${pageNo}`
    setIsLoading(true)
    movieApiClient
      .get(url)
      .then((response) => {
        setIsLoading(false)
        if (!response.data) {
          return
        }

        const { results, page, total_pages } = response.data
        const movieList = results.map((movie) => ({
          id: movie.id,
          title: movie.original_title,
          year: movie.release_date.slice(0, 4),
          imageUrl: `https://image.tmdb.org/t/p/w185/${movie.poster_path}`,
          content: movie.overview,
          vote: movie.vote_average,
          voteCount: movie.vote_count,
        }))
        setSearchedList(
          updateSearchList ? movieList : [...searchedList, ...movieList]
        )
        setPage(page)
        setHasMore(page < total_pages)
      })
      .catch((error) => {
        setIsLoading(false)
        console.log(error)
      })
  }

  const onSearchClick = (keyword) => {
    setSearchKeyword(keyword)
    setPage(1)
    setSearchedList([])
    searchMovieByKeyword(keyword, 1, true)
  }

  const fetchMoreData = () => {
    if (!hasMore) return
    setPage(page + 1)
    searchMovieByKeyword(searchKeyword, page + 1)
  }

  const addToFav = (movie) => {
    const list = JSON.parse(localStorage.getItem('favList')) ?? []
    if (list.some((i) => i.id === movie.id)) {
      const newFavList = list.filter((x) => x.id !== movie.id)
      setFavList(newFavList.map((i) => i.id))
      localStorage.setItem('favList', JSON.stringify(newFavList))
    } else {
      const newFavList = [...list, movie]
      setFavList(newFavList.map((i) => i.id))
      localStorage.setItem('favList', JSON.stringify(newFavList))
    }
  }

  return (
    <>
      <Divider orientation='left'>Search Page</Divider>
      <Flex vertical gap={24}>
        <Search
          placeholder='Search your favorite movies here...'
          allowClear
          enterButton='Search'
          size='large'
          onSearch={(value) => onSearchClick(value)}
        />

        <InfiniteScroll
          fetchMoreData={fetchMoreData}
          hasMore={hasMore}
          loading={isLoading}
        >
          <Flex justify='center'>
            <SearchList
              data={searchedList}
              favList={favList}
              addToFav={addToFav}
              loading={isLoading}
            />
          </Flex>
          {/* <ul style={{color: '#000'}}>
            {searchedList.map((item, index) => (
              <li key={index}>{item.title}</li>
            ))}
          </ul> */}
        </InfiniteScroll>
      </Flex>
    </>
  )
}
