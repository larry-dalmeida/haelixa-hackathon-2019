import React, { Component } from 'react';
import Card from '../Card'
import Tracker from '../Tracker' 

class Product extends Component {
    render() {
        const { products, match: { params } } = this.props;
        const { article } = products.find(product => product.id === parseInt(params.id, 10));
        return (
            <div>
                <h1>{article}</h1>
                <Card name={'Farm 1'} value={80} />
                <Tracker />
            </div>
        );
    }
}

export default Product;