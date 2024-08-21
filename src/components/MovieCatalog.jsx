import { Divider, Empty, Flex } from 'antd'
import PropTypes from 'prop-types'
import MovieCard from './MovieCard'

function MovieCatalog({ title, movieList = [] }) {
  return (
    <>
      <Divider orientation='left'>{title}</Divider>
      <Flex justify='center'>{!movieList.length && <Empty />}</Flex>
      <section
        style={{
          display: 'grid',
          gap: '8px',
          gridTemplateColumns: 'repeat(5,  1fr)',
          paddingBlock: '6px',
        }}
      >
        {movieList.slice(0, 5).map((movie) => (
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

MovieCatalog.propTypes = {
  title: PropTypes.string.isRequired,
  movieList: PropTypes.array.isRequired,
}

export default MovieCatalog
