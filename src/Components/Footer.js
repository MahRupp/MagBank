import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import logo from "../Assets/MAGbank.png";
import applestore from "../Assets/applestore.png";
import googleplay from "../Assets/googleplay.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFacebookSquare, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

import './Footer.scss';

const Footer = () => (
  <footer>
    <Container>
      <Row className='text-center py-5 align-items-center ps-2'> 
        <Col xs={12} lg={6} className='text-lg-start'> <Image src={logo}/> </Col>

        <Col xs={12} lg={4} className='my-5'>
          <Image src={applestore}/>
          <Image src={googleplay} className='ms-2'/>
        </Col>

        <Col xs={12} lg={2}>
          <FontAwesomeIcon icon={faFacebookSquare} color='#7c7c7c' size='2x' />
          <FontAwesomeIcon icon={faTwitter} color='#7c7c7c' size='2x' className='ms-2' />
          <FontAwesomeIcon icon={faYoutube} color='#7c7c7c' size='2x' className='ms-2' />
        </Col>
      </Row>      
    </Container>
  </footer>
);

export default Footer;