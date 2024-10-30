// src/services/authService.js
import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

export const signup = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const login = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/login`, data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
