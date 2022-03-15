import React from "react";
import { Container, Col, Button, Row }  from "react-bootstrap";
import './Institutional.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe,
  faMobile, 
  faMobileScreenButton, 
  faShield } from "@fortawesome/free-solid-svg-icons";


const Institutional = ({onClick}) => (
  <section className='institutional text-light py-5'>
    <Container>
      <Row>
        <Col xs={12} lg={5}/> 
        <Col xs={12} lg={7}>
          <h2 className='institutional-title my-5'> Já nascemos digital </h2>
          <p className='institutional-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>

          <Row className='py-3 text-light '> 
              <Col xs={2} className='d-flex justify-content-center'>
                <FontAwesomeIcon
                icon={faMobileScreenButton}
                size='2x'
                color='#fff'/>
              </Col>
              <Col xs={10} className='h5 fw-normal'>
              Sem fila e sem burocracia
              </Col>
          </Row>     

          <Row className='py-3 text-light'> 
              <Col xs={2} className='d-flex justify-content-center'>
                <FontAwesomeIcon
                icon={faMobile}
                size='2x'
                color='#fff'/>
              </Col>
              <Col xs={10} className='h5 fw-normal'>
              Simples e prático
              </Col>
          </Row>     

          <Row className='py-3 text-light'> 
              <Col xs={2} className='d-flex justify-content-center'>
                <FontAwesomeIcon
                icon={faGlobe}
                size='2x'
                />
              </Col>
              <Col xs={10} className='h5 fw-normal'>
              Abertura de conta 100% online
              </Col>
          </Row>     

          <Row className='py-3 text-light'> 
              <Col xs={2} className='d-flex justify-content-center'>
                <FontAwesomeIcon
                icon={faShield}
                size='2x'
                color='#fff'/>
              </Col>
              <Col xs={10} className='h5 fw-normal'>
              Transações mais seguras
              </Col>
          </Row>           
           
         
          <Button variant="outline-light" className='institutional-button px-3 py-3 mb-5 mt-4' onClick={onClick}>Abra já a sua conta</Button>
        </Col>
      </Row>
    </Container>      
  </section>


);

export default Institutional; 