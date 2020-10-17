import React, { Component, Fragment } from 'react';
import Counter from './Counter';
// import './Product.css'

class CardProduct extends Component {
    

    render() {
        return (
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://etanee-images.s3-ap-southeast-1.amazonaws.com/product/Bumbu/Kaldu+Jamur+Ayam.jpeg" alt="" />
                    </div>
                    <p className="product-title"></p>
                    <p className="product-price">Rp 300.000</p>
                    <Counter />
                </div>
        )
    }
}

export default CardProduct;