import axios from "axios";

import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_FAIL, 
  PRODUCT_DETAILS_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/productConstants";

// Get All Products
export const getProduct =(keyword = "")=>async (dispatch) => {
    try {
      dispatch({ type: ALL_PRODUCT_REQUEST });
      console.log(keyword);
      let link = `/api/v1/products?keyword=${keyword}`
      const { data } = await axios.get(link);
      console.log(data);
      dispatch({
        type: ALL_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };
// Action creator using redux-thunk
// export const getProduct = () => async (dispatch) => {
//   try {
//     dispatch({ type: ALL_PRODUCT_REQUEST });
//     const { data } = await axios.get('/api/v1/products');
//     dispatch({
//       type: ALL_PRODUCT_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: ALL_PRODUCT_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

//product details
export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/product/${id}`);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
