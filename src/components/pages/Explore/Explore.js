import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../../actions/postAction';
import Header from '../../elements/Header/Header';
import './Explore.css';

function Explore() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts.products);

  useEffect(() => {
    dispatch(getPosts());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      <div className='row'>
        {posts?.map((items) => {
          return (
            <div className='col-md-4'>
              <div class='card explore_card_width'>
                <img className='card-img-top' src={items.thumbnail} width='100%' alt='Card image cap' />
                <div className='card-body'>
                  <h5 className='card-title'>{items.title}</h5>
                  <p className='card-text'>{items.description}</p>
                  <a href='#' className='btn btn-primary'>
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Explore;
