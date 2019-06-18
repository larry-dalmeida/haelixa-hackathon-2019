import React from "react";
import { Link } from "react-router-dom";

import "./ProductList.css";

const Match = ({ farm_test, facility_1_test, facility_2_test, facility_3_test}) => {
    const metrics = [farm_test, facility_1_test, facility_2_test, facility_3_test];
    const matchPercent = (metrics.map(metric => metric === 'NA' ? 0 : parseInt(metric, 10)).reduce((x, y) => x + y, 0) / metrics.length) * 100;
    const styleClass = matchPercent < 40 ? 'bad-match' : matchPercent < 75 ? 'ok-match' : 'good-match';
    return (
        <div className={`match ${styleClass}`}>{matchPercent}% Match</div>
    );
};

const ProductItem = ({ article, url, qty, image, ...product }) => (
  <tr>
    <td>
      <img src={image} alt={article} />
      <Link to={url}>{article}</Link>
    </td>
    <td><Match {...product} /></td>
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
