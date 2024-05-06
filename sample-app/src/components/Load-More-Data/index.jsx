import React, { useEffect, useState } from 'react';

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]); // Added state for products
  const [count, setCount] = useState(0);

  useEffect(() => { // Added useEffect to call fetchProduct on mount and when count changes
    fetchProduct();
  }, [count]);

  async function fetchProduct() {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
      const result = await response.json(); // Moved this line inside the try block
      console.log(result);
      setProducts(prevProducts => [...prevProducts, ...result]); // Update products state
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        products.map((product, index) => ( // Display the products
          <div key={index}>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
          </div>
        ))
      )}
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Load more</button> // Added "Load more" button
    </div>
  );
}