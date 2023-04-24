import React, { Component } from 'react'
import ProductList from './ProductList'
import Modal from './Modal/Modal'
import { productsData } from '../../data/data.js'
import ProductsItem from './ProductsItem';

export default class ShoesStore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: productsData[3]
        }
    }

    renderProduct = () => {
        let arrData = productsData.map((item) => {

            return <div className="col-4 mt-2" key={item.id}>
                <ProductsItem proInfo={item} renderModal={this.renderModal} />

            </div>
        });
        return arrData;
    }

    renderModal = (ob) => {
        this.setState({
            detail: ob
        })
    }

    render() {
        return (
            <div>
                <ProductList renderProduct={this.renderProduct} />
                <Modal items={this.state.detail} />
              
            </div>
        )
    }
}
