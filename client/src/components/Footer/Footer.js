import React from 'react';
import Nav from 'react-bootstrap/Nav'
import './Footer.css'



function Footer() {
    return (

  <div className="footer footer-area footer-padding">
      <Nav className="justify-content-center" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Active</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
    </Nav.Item>
   
  </Nav>
  <p className="text-center mt-4 mb-4"> Copyright &copy;
                              
                                | All rights reserved | Shop Smart</p>
  
  
  

  </div>
);

}

export default Footer;