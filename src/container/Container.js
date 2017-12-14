import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, ButtonToolbar } from 'react-bootstrap/lib/';
// import * as actionTypes from '../store/actions/actions';
import LoginContainer from './LoginContainer/LoginContainer';
import CreateAccountContainer from './CreateAccountContainer/CreateAccountContainer';
import SellProductButtons from './SellProductsContainer/SellProductsContainer';
import AddToStockButtons from './AddToStockContainer/AddToStockContainer';
import Inventory from './Inventory/Inventory';
import CreateProduct from './CreateProduct/CreateProduct';

class Container extends Component {

    state = {
        showSellProducts: false,
        showAddToStock: false,
        showInventory: false,
        showCreateProduct: false
    }

    showSellProducts = () => {
        this.setState({
            showSellProducts: true,
            showAddToStock: false,
            showInventory: false,
            showCreateProduct: false
        });
    }

    showAddToStock = () => {
        this.setState({
            showSellProducts: false,
            showAddToStock: true,
            showInventory: false,
            showCreateProduct: false
        });
    }

    showInventory = () => {
        this.setState({
            showSellProducts: false,
            showAddToStock: false,
            showInventory: true,
            showCreateProduct: false
        });
    }

    showCreateProduct = () => {
        this.setState({
            showSellProducts: false,
            showAddToStock: false,
            showInventory: false,
            showCreateProduct: true
        });
    }



    render() {
        return ( 
            <div>
                {this.props.showLogin ? <LoginContainer /> : null}
                {this.props.showCreateAccount ? <CreateAccountContainer /> : null}
                {this.props.isAuthed ?
                <ButtonToolbar style={{ justifyContent: "center", display: "flex" }}>
                    <Button bsStyle="primary" bsSize="large" onClick={this.showSellProducts}>
                        Sell Products
                    </Button>
                    <Button bsStyle="danger" bsSize="large" onClick={this.showAddToStock}>
                        Add to Stock
                    </Button>
                    <Button bsStyle="info" bsSize="large" onClick={this.showInventory}>
                        View Inventory
                    </Button>
                    <Button bsStyle="success" bsSize="large" onClick={this.showCreateProduct}>
                        Create New Product
                    </Button>
                </ButtonToolbar>
                : null}
                {this.state.showSellProducts ? <SellProductButtons /> : null}
                {this.state.showAddToStock ? <AddToStockButtons /> : null}
                {this.state.showInventory ? <Inventory /> : null}
                {this.state.showCreateProduct ? <CreateProduct /> : null}
            </div>);
    }

}

const mapStateToProps = state => {
    return {
        isAuthed: state.main.isAuthed,
        showLogin: state.main.showLogin,
        showCreateAccount: state.main.showCreateAccount
    }
}

export default connect(mapStateToProps)(Container);