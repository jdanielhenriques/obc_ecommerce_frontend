import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../../../styles/card.css";

export default function Product({
  product_idProducts,
  product_name,
  product_description,
  product_price,
  addToCart
}) {
 /*  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find((item) => product.name === item.name);
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  }; */
  return (

    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="WkNEMkcf4K66TnFOhU58fOw.jpg"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ color: "#4D4C7D" }}
          >
            {product_name}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            style={{ color: "#4D4C7D", paddingBottom: "10px" }}
          >
            {product_description}
          </Typography>
          <Typography variant="body1" style={{ color: "#363062" }}>
            R$ {product_price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => {
              let product = {
                product_idProducts: product_idProducts,
                product_name: product_name,
                product_description: product_description,
                product_price: product_price,
              };
              addToCart(product);
              console.log("added");
            }}
            style={{ color: "#4D4C7D", background: "#E9D5DA" }}
            size="small"
          >
            Adicionar ao Carrinho
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
