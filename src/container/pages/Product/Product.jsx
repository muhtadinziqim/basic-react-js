import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import CardProduct from './CardProduct/CardProduct';
import './Product.css'

class Product extends Component {
    // state = {
    //     order: 0
    // }

    // handleCounterChange = (newValue) =>{
    //     this.setState({
    //         order: newValue
    //     })
    // }

    render() {
        return (
            <Fragment>
                <h3>Product</h3>
                <hr/> 
                <div className="header">
                    <div className="logo">
                        <img src="https://etanee.id/static/media/Basket.3f7ab1d9.svg" alt="" />
                    </div>
                    <div className="troley">
                        <img src="https://etanee.id/static/media/briefcase.094bb9d3.svg" alt="" />
                        <div className="count">{this.props.order}</div>
                    </div>
                </div>
                <CardProduct />
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        order: state.totalOrder
    } 
}

export default connect(mapStateToProps)(Product);