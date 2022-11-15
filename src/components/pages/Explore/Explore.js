import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../../actions/postAction';
import Header from '../../elements/Header/Header';
import './Explore.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';

function Explore() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts.products);
  const [dataSource, setDatasource] = useState(Array.from({ length: 3 }));
  const [hasMore, setHasmore] = useState(true);

  const fetchMoreData = () => {
    setTimeout(() => {
      setDatasource(dataSource.concat(Array.from({ length: 3 })));
    }, 500);
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(getPosts());
    });

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      <div className='container-fluid'>
        <InfiniteScroll dataLength={dataSource.length} next={fetchMoreData} hasMore={hasMore}>
          <div className='row'>
            {posts?.map((items) => {
              return (
                <div className='  col-md-4'>
                  <div class='cards'>
                    <img
                      className='card-img-top'
                      src={items.thumbnail}
                      width='100%'
                      height='300px'
                      alt='Card_image-cap'
                    />
                    <div className='card-body'>
                      <h5 className='card-title'>{items.title}</h5>
                      <p className='card-text'>{items.description}</p>
                      <Link to='/' className='btn btn-primary button-color'>
                        Go somewhere
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
}

export default Explore;
