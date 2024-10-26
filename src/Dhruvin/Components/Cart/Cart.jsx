import React from 'react'
import Header from '../../../Vivek/Component/header/Header'
import Footer from '../../../Vivek/Component/footer/Footer'
import '../Css/Cart.css'

const Cart = () => {
  return (
    <div>
      <Header/>
      
      {/* **************** Empty Card ************* */}
       <section className='mt-5 mb-5 d-none'>
          <div className='d_container'>
            <div className='row'>
              <div className='col-xl-12 text-center'>
                  <div>
                      <img className='ds_cart-img' src={require('../Img/cart.png')} alt=""  />
                      <h4 className='ds_card-title'>Your cart is empty!</h4>
                      <p className='ds_card-text'>There is nothing in your bag. add some item.</p>
                      <button className='btn ds_cart-btn mt-3'>Continue Shopping</button>
                  </div>
              </div>
            </div>
          </div>
       </section>

       
      {/* **************** Cart Without Address ************* */}
       <section className='mb-5 mt-4'>
          <div>
              <div className='d_container'>
                 <div className='d-flex justify-content-between'>
                   <h2>Cart</h2>
                   <button className='btn ds_with-btn'>+Add From Wishlist</button>
                 </div>

                 <div className="row mt-4">
                    <div className="col-xl-8">
                        <div>
                            <div className='position-relative' style={{zIndex:'2'}}>
                                <div className='ds_with-line'></div>
                                <div className='ds_with-line2'></div>
                               <div className=' row justify-content-between w-100 m-0'>
                                  <div className='col-xl-4 p-0' >
                                    <div className='ds_with-circle text-center' style={{lineHeight:"35px"}}>
                                      <img src={require("../Img/cart-icon.png")} alt="" />
                                    </div>
                                    <p className='ds_with-text mt-1'>Cart</p>
                                  </div>
                                  <div className='col-xl-4 p-0 '>
                                     <div className='text-center mx-auto'>
                                           <div className='ds_with-circle d-inline-block m-auto' style={{lineHeight:"35px"}}>
                                              <img src={require("../Img/order.png")} alt="" />
                                           </div>
                                           <p className='ds_with-text mt-1'>Order Summary</p>
                                     </div>
                                  </div>
                                  <div className='col-xl-4 p-0 '>
                                     <div className='d-flex justify-content-end flex-column align-items-end'>
                                           <div className='ds_with-circle me-3' style={{lineHeight:"35px"}}>
                                              <img src={require("../Img/order.png")} alt="" />
                                           </div>
                                           <p className='ds_with-text mt-1'>Payment</p>
                                     </div>
                                  </div>
                               </div>
                            </div>

                            <div className='mt-3'>
                               <div className="ds_with-shadow">
                                  <div className='d-flex justify-content-between align-items-center'>
                                     <p className='mb-0 fw-600'>No saved Addresses</p>
                                     <button className='btn ds_with-add'>+Add Address</button>
                                  </div>
                               </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4">
                        <div>
                            <div className='ds_with-cupon'>
                              <div>
                                 <h6 className='ps-3 mb-3 fw-600'>Apply Coupon</h6>
                                 <div className='ds_with-border'></div>
                              </div>
                              <div>
                                <div className='px-3 mt-3'>
                                    <form action="" className='position-relative'>
                                        <img className='ds_add-cupan' src={require('../Img/cupon.png')} alt="" />
                                       <input type="email" class="form-control ds_add-input" id="exampleInputEmail1" placeholder="Enter coupon code" aria-describedby="emailHelp"/>
                                       <button className='btn ds_add-apply'>Apply</button>
                                    </form>
                                </div>
                              </div>
                              <div className='px-3 mt-3 fw-500'>
                                 <p>Special offers</p>
                                 <div class="form-check d-flex">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                    <div>
                                       <label class="form-check-label" for="flexRadioDefault1">
                                         NEW100
                                       </label>
                                       <p className='text-muted ds_add-offer-txt'>Get Flat $100 Off on cart value of 500 & Above</p>
                                    </div>
                                 </div>
                              </div>
                            </div>
                        </div>
                    </div>
                 </div>

                 
              </div>
          </div>
       </section>
      <Footer/>
    </div>
  )
}

export default Cart
