import * as types from "./types";
import axios from "axios";

function fetchProducts(products) {
  return {
    type: types.FETCH_PRODUCTS,
    payload: products,
  };
}

export function addToCart(item) {
  return {
    type: types.ADD_TO_CART,
    payload: item,
  };
}
export function removeFromCart(id) {
  return {
    type: types.REMOVE_FROM_CART,
    payload: id,
  };
}
export function increase(item) {
  return {
    type: types.INCREASE,
    payload: item,
  };
}
export function decrease(item) {
  return {
    type: types.DECREASE,
    payload: item,
  };
}

export default function GetProducts() {
  return function (dispatch) {
    axios
      .get("https://fakestoreapi.com/products?limit=5")
      .then((response) => {
        const productsData = response.data;
        const products = productsData.map((item) => {
          return {
            ...item,
            quantity: 1,
          };
        });
        dispatch(fetchProducts(products));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
