import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  return (
    <div className='contactContainer'>
        <div className='part-1'>
            <h5 style={{"marginBottom":"40px", "fontWeight": "bold"}}>Contact</h5>
            <h3 className='email' style={{"marginBottom":"40px"}}>Please feel free to reach out: </h3>
            <p className='email' ><FaEnvelope style={{"marginRight":"20px", "fontSize": "22px"}} />hadyalkaderi@gmail.com</p>

        </div>
        <div className='part-2'>
            <form>
                <label className='thirty'>Name</label>
                <input style={{"marginBottom": "25px"}} type='text' />
                <label className='thirty'>Email</label>
                <input type='text' style={{"marginBottom": "25px"}} />
                <label className='thirty'>Message</label>
                <textarea type='text' rows='4' cols='23'></textarea>
            </form>
        </div>
    </div>
  )
}

export default Contact