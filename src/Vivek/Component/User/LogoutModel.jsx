import React from 'react'
import { Modal } from 'react-bootstrap'

const LogoutModel = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='VK_logout_model'
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <span className='fw-bold m-0 ps-3'>
                        Logout
                    </span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='d-flex flex-column p-md-5 p-2'>
                    <p className='text-center VK_logout_txt m-0'>
                        Are you sure you want to logout?
                    </p>
                    <div className='mt-5'>
                        <div className='d-flex gap-2'>
                            <div className='w-100'>
                                <button className='VK_logut_cancle h-100'>
                                    Cancel
                                </button>
                            </div>
                            <div className='w-100'>
                                <button className='VK_logout_ok h-100'>
                                    Yes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>


    )
}

export default LogoutModel
