import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleChange = e => {
    setSelectedCategory(e.target.value);
  };

  const filteredItems = selectedCategory === "All" ? items : items.filter(item => item.category === selectedCategory);

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleChange}>
          <option value="All">All</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Deli">Deli</option>
          <option value="Bakery">Bakery</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map(item => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
