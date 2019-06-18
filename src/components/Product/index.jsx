import React, { Component } from 'react';
import Card from '../Card'
import Tracker from '../Tracker' 
import Modal from '../Modal' 
import './style.css';

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalVisible: false
        }
    }
    render() {
        const { products, match: { params } } = this.props;
        const item = products.find(product => product.id === parseInt(params.id, 10));
        return (            
            <div className="Product-container">
                <h1>{item.article}</h1>
                <Tracker item={item} onItemClick={() => { this.setState({ isModalVisible: !this.state.isModalVisible })}}/>
                {this.state.isModalVisible ? <Modal /> : null}
            </div>
        );
    }
}

export default Product;