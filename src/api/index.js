import axios from "axios";

const API = axios.create({
     // baseURL: 'https://ecodashboard-backend.onrender.com/api'
     baseURL: 'http://localhost:5000/api'
});

export const getProducts = (pageNum,price, brand, category ) => API.get(`/products/allproducts?pageNum=${pageNum || 1}&brand=${brand || ''}&category=${category || ''}&price=${price || ''}`);

export const bestSellersProducts = () => API.get('/products/bestsellers');