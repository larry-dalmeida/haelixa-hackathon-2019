import React from "react";
import { Link } from "react-router-dom";

import "./ProductList.css";

const matchCalculator = (metrics) => metrics.reduce((x, y) => x + y, 0) / metrics.length;

const Match = ({ farm_test, facility_1_test, facility_2_test, facility_3_test}) => {
    return null;
}

const ProductItem = ({ article, url, qty, image }) => (
  <tr>
    <td>
      <img src={image} alt={article} />
      <Link to={url}>{article}</Link>
    </td>
    <td>OK</td>
    <td>{qty}</td>
  </tr>
);

const ProductList = ({ products }) => (
  <div className="product-list">
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Match</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => <ProductItem {...product} key={product.id} />)}
        </tbody>
    </table>
  </div>
);

export default ProductList;
