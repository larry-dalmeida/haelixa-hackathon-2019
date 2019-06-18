import React from 'react';
import { Link } from 'react-router-dom';

const products = [
    { id: 1, name: 'Cool product 1', url: '/products/1' },
    { id: 2, name: 'Cool product 2', url: '/products/2' },
    { id: 3, name: 'Cool product 3', url: '/products/3' },
    { id: 4, name: 'Cool product 4', url: '/products/4' },
];

const Products = () => (
    <div>
        <ul>
        {products.map(({ id, name, url }) => (
            <li key={id}>
                <h2>{name}</h2>
                <Link to={url}>view details</Link>
            </li>
        ))}
        </ul>
    </div>
);

export default Products;