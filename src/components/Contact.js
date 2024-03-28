import React from 'react'
import {motion} from 'framer-motion';


export const Contact = () => {
  return (

    
    <motion.div 
      
    id="contact"
    className="contact-form"
    initial= {{opacity:0}}
    animate = {{opacity:1}}
    exit = {{opacity:0}}
    transition={{ duration: 2 }}
        
    >
      <div className="form-container container mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-10 text-center">
                    <h2 className= "mt-3">Contact Me</h2>
                    <form action="https://formspree.io/f/mbjnzovp" method="POST">
                        <div className="mb-3 pb-2">
                            <label htmlFor="name" className="form-label">Name/Company Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                required
                                style={{ width: '90vw', maxWidth: '80%', margin: '0 auto' }} // Set width to 90vw and center-align
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Your Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                required
                                style={{ width: '90vw', maxWidth: '80%', margin: '0 auto' }} 
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea
                                className="form-control"
                                id="message"
                                name="message"
                                rows="5"
                                required
                                style={{ width: '90vw', maxWidth: '80%', margin: '0 auto' }} 
                            ></textarea>
                        </div>
                        <div className="d-grid justify-content-center">
                            <button type="submit" className="btn btn-primary btn-lg mb-3">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        
        
    
    
    
    
    
    </motion.div>
  )
}

