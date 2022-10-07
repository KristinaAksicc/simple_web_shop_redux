import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GetProducts, { addToCart } from "../redux/actions";
import ButtonAppBar from "../components/nav";
import Cards from "../components/cards";
import { Grid } from "@mui/material";

export default function ProductsPage() {
  const { products } = useSelector((state) => ({
    ...state.app,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetProducts([]));
  }, [dispatch]);

  const handleAddtoCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <>
      <ButtonAppBar />
      <Grid container sx={{ mt: 10 }}>
        {products.map((item) => {
          return (
            <Cards
              key={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              addToCart={() => handleAddtoCart(item)}
            />
          );
        })}
      </Grid>
    </>
  );
}
