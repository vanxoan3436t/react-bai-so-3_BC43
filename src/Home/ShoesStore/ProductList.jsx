import React, { Component } from 'react'
export default class ProductList extends Component {
  
    render() {
        let { renderProduct } = this.props;
        return (
            <div className='container'>
              
                <div className='row' >
                    {this.props.renderProduct()}
                </div>

            </div>
        )
    }

}