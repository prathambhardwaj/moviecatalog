import { LikeOutlined, StarOutlined } from '@ant-design/icons'
import { Button, List, Space } from 'antd'
import PropTypes from 'prop-types'
import { createElement } from 'react'

const IconText = ({ icon, text }) => (
  <Space>
    {createElement(icon)}
    {text}
  </Space>
)

function SearchList({ data, addToFav, favList, loading }) {
  return !loading ? (
    <List
      itemLayout='vertical'
      size='large'
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          key={item.title}
          actions={[
            <IconText
              icon={StarOutlined}
              text={item.vote}
              key='list-vertical-star-o'
            />,
            <IconText
              icon={LikeOutlined}
              text={item.voteCount}
              key='list-vertical-like-o'
            />,
            <Button key='btn' onClick={() => addToFav(item)}>
              {favList.includes(item.id) ? 'Remove from Fav' : 'Add to Fav'}
            </Button>,
          ]}
          extra={<img width={120} alt='logo' src={item.imageUrl} />}
        >
          <List.Item.Meta title={<a href={item.href}>{item.title}</a>} />
          <p style={{ maxWidth: '700px' }}>{item.content}</p>
        </List.Item>
      )}
    />
  ) : (
    <></>
  )
}

IconText.propTypes = {
  icon: PropTypes.any,
  text: PropTypes.any.isRequired,
}

SearchList.propTypes = {
  data: PropTypes.array.isRequired,
  favList: PropTypes.array.isRequired,
  addToFav: PropTypes.func.isRequired,
  loading: PropTypes.bool,
}

export default SearchList
