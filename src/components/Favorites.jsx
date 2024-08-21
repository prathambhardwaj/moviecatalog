import { Divider, Empty } from 'antd'
import { useEffect, useState } from 'react'
import MovieCard from './MovieCard'

function Favorites() {
  const [favList, setFavList] = useState([])
  useEffect(() => {
    const favListFromLs = JSON.parse(localStorage.getItem('favList')) ?? []
    setFavList(favListFromLs)
  }, [])

  return (
    <>
      <Divider orientation='left'>My Favorites</Divider>
      {!favList.length && <Empty />}
      <section
        style={{
          display: 'grid',
          gap: '8px',
          gridTemplateColumns: 'repeat(5,  1fr)',
          paddingBlock: '6px',
        }}
      >
        {favList.slice(0, 5).map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            year={movie.year}
            imageUrl={movie.imageUrl}
          />
        ))}
      </section>
    </>
  )
}

export default Favorites
