import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  const handleClick = () => {
    setIsInCart(prevIsInCart => !prevIsInCart);
  };

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <div className="item">
        <span>{name}</span>
        <span className="category">{category}</span>
      </div>
      <button onClick={handleClick}>{isInCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
