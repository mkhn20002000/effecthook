import React, { useState, useEffect } from "react";
const ProductList = ({ category }: { category: string }) => {
  const [product, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching products in ", category);
    setProducts(["Cloting", "Household"]);
  }, [category]);
  return <div>{`Your category is ${category}`}</div>;
};

export default ProductList;
