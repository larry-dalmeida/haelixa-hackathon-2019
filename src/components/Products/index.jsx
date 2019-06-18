import React from 'react';
import { Link } from 'react-router-dom';

const Products = ({ products }) => (
    <div>
        <ul>
        {products.map(({ id, name, url }) => (
            <li key={id}>
                <h2>{name}</h2>
                <Link to={url}>view</Link>
            </li>
        ))}
        </ul>
    </div>
);

export default Products;