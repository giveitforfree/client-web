import { createCategory, fetchCategories, fetchCategory } from "../../services/CategoryApi";
import { FETCH_CATEGORIES_FAILURE, FETCH_CATEGORIES_SUCCESS } from "./types";

export const fetchCategoriesAction = () => dispatch => {
    try {
        return fetchCategories().then(response => response.data).then(response => {
            const categories = response.map(el => ({ label: el.name, value: el.id }))
            dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: categories || [] })
            return response
        })
    } catch (error) {
        dispatch({ type: FETCH_CATEGORIES_FAILURE, payload: [] })
        return []
    }
}

export const fetchCategoryAction = (categoryId) => dispatch => {
    return fetchCategory(categoryId).then(response => response.data).then(response => {

        return response;
    })
}
export const createCategoryAction = (category) => dispatch => {
    return createCategory(profileId).then(response => response.data).then(response => {

        return response;
    })
}