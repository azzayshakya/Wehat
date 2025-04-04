import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

// Function to get the auth token
const getAuthToken = () => localStorage.getItem("wechatUserToken");

const authHeaders = () => ({
  headers: { Authorization: `Bearer ${getAuthToken()}` },
});

export const loginApi = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const CreateAccountApi = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/create-account`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const fetchProjectsApi = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/project/user-projects`, authHeaders());
    return response.data.projects;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const createProjectApi = async (projectName) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/project/create`, { name: projectName }, authHeaders());
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};


export const getAllUsersApi = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/auth/all-users-except-me`, authHeaders());
    console.log(response.data.users)
    return response.data.users;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};