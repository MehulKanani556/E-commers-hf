import React from 'react';
import Header from '../../../Vivek/Component/header/Header';
import Footer from '../../../Vivek/Component/footer/Footer';
import Process from '../../../Vivek/Component/common/Process';
import Subscribe from '../../../Vivek/Component/common/Subscribe';
import { Row, Col, Form } from 'react-bootstrap';
import './ContactUs.css'

function ContactUs() {


    function ok () {

    }

    return (
        <>
            <Header />

            
           {/* ******************* Contact Us ***************** */}
        <section className='mt-5 mb-5'>
            <div className='d_container'>
                <div className='text-center'>
                    <h2 className='mb-0 h2'>Contact Us</h2>
                    <p className='ds_us-text'>Any question or remarks? Just write us a message!</p>
                </div>
                <div className='ds_us-box mt-4'>
                   <div className="row align-items-center">
                     <div className="col-xl-4 col-lg-5 mt-3">
                        <div className='ds_us-img'>
                           <div className='ds_us-padding '>
                              <h4 className='h4 text-light'>Contact Information</h4>
                              <p className='ds_us-muted'>Feel free to ask your query anytime</p>
                              <div className='mt-5 pt-sm-5'>
                                 <div className='d-flex mb-4'>
                                    <div>
                                        <img src={require("../../assets/ds_phone-call.png")} alt="" />
                                    </div>
                                    <p className='text-light ms-3'>+1012 3456 789</p>
                                 </div>
                                 <div className='d-flex mb-4'>
                                    <div>
                                        <img src={require("../../assets/ds_sharp-email.png")} alt="" />
                                    </div>
                                    <p className='text-light ms-3'>demo@gmail.com</p>
                                 </div>
                                 <div className='d-flex mb-4'>
                                    <div>
                                        <img src={require("../../assets/ds_phone-call.png")} alt="" />
                                    </div>
                                    <p className='text-light ms-3'>132 Dartmouth Street Boston, <br/> Massachusetts 02156 United States</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                      <div className="col-xl-8 col-lg-7 mt-3">
                        <div className='ms-sm-4'>
                        <form>
                            <div className="mb-3">
                              <label  className="form-label ds_label mb-0">Name</label>
                              <input type="text" className="form-control ds_us-email" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div className="mb-3">
                              <label  className="form-label ds_label">Email</label>
                              <input type="email" className="form-control ds_us-email" id="exampleInputPassword1"/>
                            </div>
                            <div className="mb-3">
                              <label  className="form-label ds_label">Contact no.</label>
                              <input type="number" className="form-control ds_us-email" id="exampleInputPassword1"/>
                            </div>
                            <div className='mt-4 pt-2'>
                                <label htmlFor="" style={{fontWeight:'600'}}>Select Subject</label>
                               <div className='d-flex flex-wrap mt-2'>
                                   <div className="form-check ds_us-margin">
                                     <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={()=>ok()} />
                                     <label className="form-check-label" htmlFor="flexRadioDefault1" style={{color:"#6A6A6A"}}>
                                        General Inquiry
                                     </label>
                                   </div>
                                   <div className="form-check ms-sm-4 ds_us-margin">
                                     <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                     <label className="form-check-label" htmlFor="flexRadioDefault2" style={{color:"#6A6A6A"}}>
                                       Payment related
                                   </label>
                                   </div>
                                   <div className="form-check ms-sm-4 ds_us-margin">
                                     <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                                     <label className="form-check-label" htmlFor="flexRadioDefault3" style={{color:"#6A6A6A"}}>
                                       Product related
                                   </label>
                                   </div>
                               </div>
                               <label htmlFor="" className='mt-4' style={{color:"#6A6A6A"}}>Message</label>
                               <div className="form-floating">
                                   <textarea className="form-control ds_us-textarea"  placeholder="Leave a comment here" ></textarea>
                                </div>
                            </div>
                              <div className='text-center mt-4'>
                                <button type="submit" className="btn ds_us-submit">Submit</button>
                              </div>
                          </form>
                        </div>
                      </div>
                   </div>
                </div>
            </div>
        </section>


            




            <Subscribe />
            <Process />
            <Footer />

        </>
    )
}

export default ContactUs