import axios from '../utils/axios'

const URL = "http://localhost:8099/api/categories"


export const fetchCategories = () => axios.get(URL);
export const fetchCategory = (categoryId) => axios.get(`${URL}/${categoryId}`);
export const createCategory = (category) => axios.post(URL, category);

