import React, { useState } from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard,
  faUserTie,
  faWallet, 
  faShield } from '@fortawesome/free-solid-svg-icons';
import './Faq.scss'

const Faq = () => {
  const options = [
    { icon: faCreditCard, text: 'Cartão de crédito e débito'},
    { icon: faWallet, text: 'Conta e abertura'},
    { icon: faShield, text: 'Token digital'},
    { icon: faUserTie, text: 'Produtos e serviços'},
  ];

  const [ index, setIndex ] = useState(0);

  const handleClick = (key) => {
    setIndex(key);
  };
  
  return(
    <section className='faq text-light'> 
      <Container className=' py-5'>
        <h2 className='faq-title my-5 pb-2 d-grid justify-content-center'>Dúvidas frequentes</h2>
          <Row className='d-flex align-items-center justify-items-center'>
            <Col className='d-lg-none mb-5 justify-items-center' xs={12}>
              <Row>
                {options.map(({ icon }, key) => (
                  <Col className='d-flex justify-content-center'>
                  <FontAwesomeIcon  icon={icon} size='2x' color={key===index ? '#fff' : '#bbb'}  onClick={() => handleClick (key)}/>
                  </Col>
                ))}
              </Row>
              <Row className='ms-5 ps-5 mt-5'>
                <p className='lead'>{options[index].text}</p>
              </Row>
            </Col>


            <Col className='d-none d-lg-block'>
              {options.map(({ icon, text }, key ) => (
                 <Row className='align-items-center mb-3'>
                 <Col xs={2} className=' d-flex justify-items-center'>
                   <FontAwesomeIcon  icon={icon} size='3x' color={key===index ? '#fff' : '#bbb'}  onClick={() => handleClick(key)} key={key}/>
                 </Col>
                 <Col xs={10} className='h5 fw-normal d-none d-lg-block' onClick={() => handleClick(key)} key={key}>
                   { text }
                 </Col>
               </Row>
              ))}          
                
            </Col> 

            <Col>
              <Accordion defaultActiveKey='0' activeKey={`${index}`}>
                <Accordion.Item eventKey="0" className='faq__card'>
                  <Accordion.Header>Lorem ipsum dolor sit amet</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className='faq__card'>
                  <Accordion.Header>Nulla porttitor eros ac ex tristique posuere</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className='faq__card'>
                  <Accordion.Header>Quisque fringilla tincidunt arcu</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className='faq__card'>
                  <Accordion.Header className='header'>Nam elementum lobortis purus a maximus tortor</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>

      </Container>  
    </section>
)
};

export default Faq;
