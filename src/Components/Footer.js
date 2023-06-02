import React from 'react'
import './Footer.css'
    import {
      MDBFooter
    } from 'mdb-react-ui-kit';
const Footer = () => {
    
      return (
        <div className='footr'>
        <MDBFooter className='text-center' color='white' bgColor='dark'>
          <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2023 Copyright
            <a className='text-white' href='https://mdbootstrap.com/'>
            </a>
          </div>
        </MDBFooter>
        </div>
      );
    }

export default Footer;
