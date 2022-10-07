import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GetProducts, {
  removeFromCart,
  increase,
  decrease,
} from "../redux/actions";
import ButtonAppBar from "../components/nav";
import ListItems from "../components/listItems";
import {
  TableBody,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  Button,
} from "@mui/material";

export default function ShoppingCart() {
  const { cart } = useSelector((state) => ({
    ...state.app,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetProducts([]));
  }, [dispatch]);
  const [data, setData] = useState([]);

  const total = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      setData(JSON.parse(localStorage.getItem("cart")));
    }
  }, [cart]);

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
    localStorage.removeItem("cart", "id");
  };
  const handleIncrease = (item) => {
    dispatch(increase(item));
  };
  const handleDecrease = (item) => {
    dispatch(decrease(item));
  };

  return (
    <>
      <ButtonAppBar />
      <TableContainer>
        <Table sx={{ maxWidth: 700 }} aria-label="simple table">
          <TableBody>
            {(data.length ? data : cart).map((item) => {
              return (
                <ListItems
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  quantity={item.quantity}
                  remove={() => handleRemove(item.id)}
                  add={() => {
                    handleIncrease(item);
                  }}
                  substract={() => {
                    handleDecrease(item);
                  }}
                />
              );
            })}
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell scope="row">Total price</TableCell>
              <TableCell scope="row">{total}</TableCell>
              <TableCell scope="row">
                <Button
                  variant="contained"
                  onClick={() =>
                    localStorage.setItem("cart", JSON.stringify(cart))
                  }
                >
                  Save
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
