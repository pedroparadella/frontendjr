import axios from 'axios'

const API_URL = 'http://localhost:8000'

export const getCourses = (info) =>
  axios({
    url: `${API_URL}/${info}`,
    method: 'get',
  });

export const createCourse = (info, data) => 
  axios({
      url: `${API_URL}/${info}`,
      method: 'POST',
      "Content-Type": "application/json",
      data
    })

export const deleteCourse = (info, id) => 
  axios({
    url: `${API_URL}/${info}/${id}`,
    method: 'DELETE',
  })

export const editCourse = (info, id, data) =>
  axios({
    url: `${API_URL}/${info}/${id}`,
    method: 'PUT',
    "Content-Type": "application/json",
    data
  })