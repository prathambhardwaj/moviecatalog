import { Card } from 'antd'
import PropTypes from 'prop-types'

const { Meta } = Card

function MovieCard({ title, year, imageUrl }) {
  return (
    <div>
      <Card
        hoverable
        cover={
          <img
            height='260px'
            alt='example'
            src={imageUrl ? imageUrl : 'default_movie.jpg'}
          />
        }
      >
        <Meta title={title} description={`Released in: ${year}`} />
      </Card>
    </div>
  )
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
}

export default MovieCard
