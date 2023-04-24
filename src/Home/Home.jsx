import React, { Component } from 'react'
import ShoesStore from './ShoesStore/ShoesStore'


export default class Home extends Component {
  render() {
    return (
      <div className='container' >

        <div className='row '>
          <div className='col-1'>
            <h3>Home</h3>
            <h3>Shop</h3>
          </div>
          <div className='col-11'>
            <h1 className='text-center'>Shoes shop</h1>
            <ShoesStore />
          </div>

        </div>
      </div>
    )
  }
}
