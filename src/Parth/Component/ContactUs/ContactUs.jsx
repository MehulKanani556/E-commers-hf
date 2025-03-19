import React, { useState } from 'react';
import axios from 'axios';
import Header from '../../../Vivek/Component/header/Header';
import Footer from '../../../Vivek/Component/footer/Footer';
import Process from '../../../Vivek/Component/common/Process';
import Subscribe from '../../../Vivek/Component/common/Subscribe';
import './ContactUs.css';

function ContactUs() {
  const BaseUrl = process.env.REACT_APP_BASEURL;
  const token = localStorage.getItem('token');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNo: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      const response = await axios.post(
        `${BaseUrl}/api/createContctUs`,
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.status === 200) {
        setSuccess('Your message has been sent successfully.');
        setFormData({ name: '', email: '', contactNo: '', subject: '', message: '' });
      }
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error('API Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

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
                        <p className='text-light ms-3'>132 Dartmouth Street Boston, <br /> Massachusetts 02156 United States</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-8 col-lg-7 mt-3">
                <div className='ms-sm-4'>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label ds_label">Name</label>
                      <input type="text" className="form-control ds_us-email" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label ds_label">Email</label>
                      <input type="email" className="form-control ds_us-email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label ds_label">Contact no.</label>
                      <input type="number" className="form-control ds_us-email" name="contactNo" value={formData.contactNo} onChange={handleChange} required />
                    </div>

                    <div className='mt-4 pt-2'>
                      <label className='fw-bold'>Select Subject</label>
                      <div className='d-flex flex-wrap mt-2'>
                        {["General Inquiry", "Payment related", "Product related"].map((subject, index) => (
                          <div key={index} className="form-check ds_us-margin ms-sm-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="subject"
                              value={subject}
                              checked={formData.subject === subject}
                              onChange={handleChange}
                              required
                            />
                            <label className="form-check-label" style={{ color: "#6A6A6A" }}>
                              {subject}
                            </label>
                          </div>
                        ))}
                      </div>

                      <label className='mt-4 mb-2' style={{ color: "#6A6A6A" }}>Message</label>
                      <div className="form-floating">
                        <textarea
                          className="form-control ds_us-textarea"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Leave a comment here"
                          required
                        />
                      </div>
                    </div>

                    {error && <p className="text-danger mt-2">{error}</p>}
                    {success && <p className="text-success mt-2">{success}</p>}

                    <div className='text-center mt-4'>
                      <button type="submit" className="btn ds_us-submit" disabled={loading}>
                        {loading ? 'Submitting...' : 'Submit'}
                      </button>
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
  );
}

export default ContactUs;
