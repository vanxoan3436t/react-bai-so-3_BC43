import React, { Component } from 'react'

export default class ProductsItem extends Component {
  show = () =>{
  document.querySelector("body").onclick = function () {
    document.querySelector("#exampleModalCenter").classList.toggle("show");
  }
  }
  render() {
    let { proInfo, renderModal } = this.props;

    return (
      < div
     
        className='card' style={{ cursor: 'pointer' }} onClick={() => {
          this.show();
          this.props.renderModal(proInfo);
        }}>
        <img src={proInfo.image} alt="1" />
        <div className='card-body'>
          <h3>Name: {proInfo.name}</h3>
          <p>Price: {proInfo.price}</p>
          <button className='btn btn-dark'>
             Add to card <i className='fa fa-card-plus'></i>
          </button>
        </div>
      </div>


    )
  }
}