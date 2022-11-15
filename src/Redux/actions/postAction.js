import { GET_POSTS } from './types';
import axios from 'axios';

export const getPosts = () => async (dispatch) => {
  const result = await axios.get('https://dummyjson.com/products');
  dispatch({
    type: GET_POSTS,
    payload: result.data,
  });
};
