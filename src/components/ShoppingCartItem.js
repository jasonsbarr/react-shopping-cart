import React, { useContext } from "react";
import ProductContext from "../contexts/products";

const Item = ({ id, image, price, title }) => {
  const { removeItem } = useContext(ProductContext);

  return (
    <div className="shopping-cart_item">
      <img src={image} alt={`${title} book`} />

      <div>
        <h1>{title}</h1>
        <p>$ {price}</p>
        <button id={id} onClick={() => removeItem(id)}>
          Remove from cart
        </button>
      </div>
    </div>
  );
};

export default Item;
