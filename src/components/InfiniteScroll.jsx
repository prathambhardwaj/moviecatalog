import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { Spin } from 'antd'

function InfiniteScroll({ fetchMoreData, hasMore, loading, children }) {
  const loader = useRef(null)

  const handleObserver = (entities) => {
    const target = entities[0]
    if (target.isIntersecting && hasMore && !loading) {
      fetchMoreData()
    }
  }

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    }

    const observer = new IntersectionObserver(handleObserver, options)

    if (loader.current) {
      observer.observe(loader.current)
    }

    return () => observer.disconnect()
  })

  return (
    <div>
      {children}
      {loading && <Spin />}
      <div ref={loader} style={{ height: '1px' }}></div>
    </div>
  )
}

InfiniteScroll.propTypes = {
  fetchMoreData: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}

export default InfiniteScroll
