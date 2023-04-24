import React, { Component } from 'react'
import 'animate.css'
export default class Modal extends Component {

  render() {
    let { items } = this.props;
    return (

      <div className="modal fade animate__animated animate__fadeInDown animate-delay" id="exampleModalCenter" tabIndex={-1} aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">Detail information</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
             
                <div className='detail-img'>
                  <img className='w-100' src={items.image} alt="1" />
                </div>
                <div className='detail-text'>
                  <p>Name: {items.name}</p>
                  <p>Price: {items.price}</p>
                  <p>Quantity: {items.quantity}</p>
                  <p>Description: {items.description}</p>
                </div>


                <div className='button-add'>
                  <button className='btn btn-dark me-3'>Add to card</button>
                  <button className='btn btn-primary me-3'>+</button>
                  1
                  <button  className='btn btn-danger ms-3'>-</button>
                </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
