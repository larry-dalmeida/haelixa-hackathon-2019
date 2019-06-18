import React, { Component } from 'react';

class Product extends Component {
    render() {
        const { products, match: { params } } = this.props;
        const { name } = products.find(product => product.id === parseInt(params.id, 10));
        return (
            <div>
                <h1>{name}</h1>
            </div>
        );
    }
}

export default Product;