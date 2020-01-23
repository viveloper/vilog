import axios from 'axios';
import { SERVER_BASE_URL } from '../constants';

export const signup = (email, nickname, password, confirmPassword) => {
  return axios
    .post(`${SERVER_BASE_URL}/signup`, {
      email,
      nickname,
      password,
      confirmPassword
    })
    .then(res => {
      return res.data;
    });
};

export const login = (email, password) => {
  return axios
    .post(`${SERVER_BASE_URL}/login`, { email, password })
    .then(res => {
      return res.data;
    });
};

export const fetchAllSections = () => {
  return axios
    .get(`${SERVER_BASE_URL}/sections`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
    .then(res => {
      return res.data;
    });
};

export const fetchPosts = section => {
  return axios
    .get(`${SERVER_BASE_URL}/${section}/posts`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
    .then(res => {
      return res.data;
    });
};

export const fetchPost = postId => {
  return axios
    .get(`${SERVER_BASE_URL}/posts/${postId}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
    .then(res => {
      return res.data;
    });
};

export const addPost = (title, content, image, section) => {
  return axios
    .post(
      `${SERVER_BASE_URL}/${section}/posts`,
      {
        title,
        content,
        image
      },
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }
    )
    .then(res => {
      return res.data;
    });
};

export const uploadPostTiltleImage = selectedFile => {
  const formData = new FormData();
  formData.append('file', selectedFile);

  return axios
    .post(`${SERVER_BASE_URL}/post/image`, formData, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
    .then(res => {
      return res.data;
    });
};
