import axios from 'axios';
import React, { useState, useEffect } from 'react';

function ProductPage() {
  const [productdata, setproductdata] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.post("http://localhost:4000/api/sendproduct", { productname: "Nordic Chair" });
        if (response.data && response.data.length > 0) {
          const product = response.data[0];
        //   const base64Image = product.image.data;
            console.log("image:" ,product.image.data.data.toString('base64'))
          setproductdata({
            image: product.image.data.data.toString('base64'),
            name: product.name,
            price: product.price,
            product_id: product._id
          });
        }
        console.log("this is the product data just set",productdata)
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    }

    fetchData();
  }, []); // Empty dependency array to run only once after initial render

  return (
    <div>
      <h1>Hello</h1>
      {productdata && (
        <div>
          <h1>{productdata.name}</h1>
          <h1>{productdata.price}</h1>
          <h1>{productdata.product_id}</h1>
          <img src={`data:image/png;base64,${productdata.image}`} alt="Your Image" />
        </div>
      )}
    </div>
  );
}

export default ProductPage;
