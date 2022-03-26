import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCircle } from '@fortawesome/free-solid-svg-icons';

import AccountBalance from '../Components/AccountBalance';
import AccountPayments from '../Components/AccountPayments';
import AccountHistory from '../Components/AccountHistory';

import './Dashboard.scss';

const Dashboard = ( { className=false } ) => {
  const [ activeLink, setActiveLink ] = useState(0);

  const links = [
    { text: 'Minha Conta', path: '/dashboard', exact:true },
    { text: 'Pagamentos', path: 'payments'},
    { text: 'Extrato', path: 'history'},
  ];

  const data = {
    latestBalance: [
      {date: '22/07', description:'SAQUE 24H 12345', value: '300,00'},
      {date: '21/07', description:'SUPERMERCADO 12345', value: '275,00'},
      {date: '21/07', description:'ESTACIONAMENTO 12345', value: '12,00'},
      {date: '21/07', description:'PAGAMENTO ALUGUEL 121313', value: '1.500,00'}
    ],
    futureBalance: [
      {date: '07/08', description:'PASSAGEM AEREA', value: '3.000,00'},
      {date: '07/08', description:'AMSTERDAM HOTEL', value: '2.500,00'},
      {date: '08/08', description:'FARMACIA', value: '12,00'},
      {date: '08/08', description:'ACADEMIA', value: '300,00'}
    ],
    history: [
      {date: '17/07', description:'SAQUE 24H 325652', value: '-200,00', balance: ''},
      {date: '17/07', description:'SALDO DO DIA', value: '', balance: '2.780,00'},
      {date: '19/07', description:'ESTACIONAMENTO 325652', value: '-12,00', balance: ''},
      {date: '19/07', description:'COMPRA INTERNET', value: '-450,00', balance: ''},
      {date: '19/07', description:'SALDO DO DIA', value: '', balance: '2.318,00'},
      {date: '21/07', description:'SAQUE 24H 325652', value: '-200,00', balance: ''},
      {date: '21/07', description:'DEPÓSITO', value: '1.000,00', balance: ''},
      {date: '21/07', description:'SALDO DO DIA', value: '', balance: '3.118,00'},
    ]
  };

  return (
    <Container className='dashboard py-5'>
      <Row >
        <Col xs={12} lg={3}>
          <Row className='align-items-center mb-5'>
            <Col xs={3}>
                <span className='dashboard__user-avatar'> 
                  <FontAwesomeIcon icon={faCircle} size='5x' color='#f8f9fa'/>
                  <FontAwesomeIcon className='dashboard__user-icon'
                  icon={faUser} size='3x' color='#7c7d7d' />
                </span>
            </Col>
            <Col xs={9} className='ps-lg-5' >
              <h3>Marina Rupp </h3>
              <p className="text-muted">Ag: 1313 C/C 1313-7</p>
            </Col>
          </Row>
          {links.map(( {text, path }, key) => (
            <Row>
              <Link className='dashboard__link' to={path} key={key}>
                <Button 
                className= {`dashboard__button text-start 
                text-left ${key === activeLink ? 'dashboard__button--active' : ''}`} 
                variant='link' 
                size='lg' 
                block="true"
                onClick={() => setActiveLink(key)}
                >
                  {text}
                </Button>
              </Link> 
            </Row> 
          ))}
                 
        </Col>  
        <Routes>
          <Route path="history" element={<AccountHistory data={data} />} /> 
          <Route path="payments" element={<AccountPayments />} />           
          <Route path="/" element= {<AccountBalance data={data}/>} />                    
        </Routes>          
      </Row>
    </Container>    
  );
};

export default Dashboard;
