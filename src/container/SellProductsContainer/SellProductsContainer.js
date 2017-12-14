import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductButton from '../../components/SellProducts/SellProductButtons';
import { ButtonToolbar } from 'react-bootstrap/lib/';
import * as actionTypes from '../../store/actions/actions';
// import axios from 'axios';




class ProductButtons extends Component {

    state = {
        cart: []
    }

    // addToCart = (product) => {
    //     let newArr = this.state.cart.concat(product);
    //     this.setState({ cart: newArr });
    //     console.log(this.state.cart);
    // }

    render() {
        const products = this.props.products.map(product => {
            return <ProductButton key={product.id} name={product.product_name} quantity={product.quantity} click={() => this.props.onAddToCart(product.product_name)} />
        });

        return (
            <div style={{ margin: 10 }} >
                <ButtonToolbar style={{ justifyContent: "center", display: "flex" }}>
                    {products.slice(0, 4)}
                </ButtonToolbar>
                <ButtonToolbar style={{ justifyContent: "center", display: "flex" }}>
                    {products.slice(4, 8)}
                </ButtonToolbar>
                <ButtonToolbar style={{ justifyContent: "center", display: "flex" }}>
                    {products.slice(8, 12)}
                </ButtonToolbar>
                <ButtonToolbar style={{ justifyContent: "center", display: "flex" }}>
                    {products.slice(12, 16)}
                </ButtonToolbar>
                <ButtonToolbar style={{ justifyContent: "center", display: "flex" }}>
                    {products.slice(16, 20)}
                </ButtonToolbar>
                <ButtonToolbar style={{ justifyContent: "center", display: "flex" }}>
                    {products.slice(20, 24)}
                </ButtonToolbar>
                <ButtonToolbar style={{ justifyContent: "center", display: "flex" }}>
                    {products.slice(24, 28)}
                </ButtonToolbar>
                <ButtonToolbar style={{ justifyContent: "center", display: "flex" }}>
                    {products.slice(28, 32)}
                </ButtonToolbar>
                <ButtonToolbar style={{ justifyContent: "center", display: "flex" }}>
                    {products.slice(32, 36)}
                </ButtonToolbar>
                <ButtonToolbar style={{ justifyContent: "center", display: "flex" }}>
                    {products.slice(36, 40)}
                </ButtonToolbar>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.auth.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddToCart: (product) => dispatch(actionTypes.addToCart(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductButtons);