import React from 'react';
import { Container , Button, Row, Col, Image} from 'react-bootstrap';
import Cartao from '../Assets/credit-card.jpg';
import './CreditCard.scss';


const CreditCard = () => (
  <Container className='my-lg-5'>
    <Row>
      <Col xs={12} lg={7} className='mb-5 mb-lg-0 px-5 pc-lg-0'>
        <row> 
          <h2 className='h2 display-4 my-5'>Cartão de Crédito</h2>
        </row>
        <row>
          <p>Crédito Pessoal</p> 
          <p>Pagamentos on-line</p>
          <p>APP</p>
          <p>Carteira Digital</p>
        </row>
       
      </Col>
      <Col className='text-lg-start my-5'>
        <Image src= {Cartao} alt='Magbank Credit Card Example' fluid/> 
        <Button variant="outline-light">Abra sua conta</Button>
      </Col>
    </Row>
  </Container>
);

export default CreditCard; 