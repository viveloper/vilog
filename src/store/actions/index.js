import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN,
  LOGOUT,
  FETCH_SECTIONS,
  FETCH_SECTIONS_SUCCESS,
  FETCH_SECTIONS_FAILURE,
  SET_SECTION,
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_POST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  CLEAR_REASON,
  ADD_POST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE
} from '../../constants';

import {
  signup,
  login,
  fetchAllSections,
  fetchPosts,
  fetchPost,
  addPost
} from '../../api';

export const signUpThunk = (
  email,
  nickname,
  password,
  confirmPassword,
  history
) => dispatch => {
  dispatch({ type: SIGNUP });
  signup(email, nickname, password, confirmPassword)
    .then(data => {
      dispatch({
        type: SIGNUP_SUCCESS,
        user: data.user
      });
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      history.push('/');
    })
    .catch(error => {
      if (error.response) {
        // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
        console.log(error.response.data);
        dispatch({
          type: SIGNUP_FAILURE,
          reason: error.response.data
        });
      } else {
        // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
        console.log('Error', error.message);
        dispatch({
          type: SIGNUP_FAILURE,
          reason: { general: error.message }
        });
      }
    });
};

export const loginThunk = (email, password, history) => dispatch => {
  dispatch({ type: LOGIN });
  login(email, password)
    .then(data => {
      dispatch({
        type: LOGIN_SUCCESS,
        user: data.user
      });
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      history.push('/');
    })
    .catch(error => {
      if (error.response) {
        // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
        console.log(error.response.data);
        dispatch({
          type: LOGIN_FAILURE,
          reason: error.response.data
        });
      } else {
        // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
        console.log('Error', error.message);
        dispatch({
          type: LOGIN_FAILURE,
          reason: { general: error.message }
        });
      }
    });
};

export const logout = history => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  history.push('/login');
  return {
    type: LOGOUT
  };
};

export const fetchSectionsThunk = () => dispatch => {
  dispatch({ type: FETCH_SECTIONS });
  fetchAllSections()
    .then(data => {
      dispatch({
        type: FETCH_SECTIONS_SUCCESS,
        sections: data.sections
      });
    })
    .catch(error => {
      if (error.response) {
        // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
        console.log(error.response.data);
        dispatch({
          type: FETCH_SECTIONS_FAILURE
        });
      } else {
        // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
        console.log('Error', error.message);
        dispatch({
          type: FETCH_SECTIONS_FAILURE
        });
      }
    });
};

export const fetchPostsThunk = section => dispatch => {
  dispatch({ type: FETCH_POSTS });
  fetchPosts(section)
    .then(data => {
      dispatch({
        type: FETCH_POSTS_SUCCESS,
        posts: data.posts
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: FETCH_POSTS_FAILURE });
    });
};

// export const fetchPostThunk = postId => dispatch => {
//   console.log('fetchPostThunk');
//   dispatch({ type: FETCH_POST })
//   fetchPost(postId).then(data => {
//     dispatch({
//       type: FETCH_POST_SUCCESS,
//       post: data.post
//     })
//   }).catch(error => {
//     console.log(error);
//     dispatch({ type: FETCH_POST_FAILURE });
//   })
// }

export const addPostThunk = ({
  title,
  content,
  image,
  section,
  history
}) => dispatch => {
  dispatch({ type: ADD_POST });
  addPost(title, content, image, section)
    .then(data => {
      const postId = data.postId;
      dispatch({ type: ADD_POST_SUCCESS });
      history.push(`/section/${section}/posts/${postId}`);
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: ADD_POST_FAILURE });
    });
};

export const clearReason = () => ({
  type: CLEAR_REASON
});
