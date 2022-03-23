import React from 'react';
import { Container, Row, Col, Button, Tabs, Tab, Table } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCircle } from '@fortawesome/free-solid-svg-icons';

import './Dashboard.scss';

const Dashboard = () => {
  const lastData = [
    {date: '22/07', description:'SAQUE 24H 12345', value: '300,00'},
    {date: '21/07', description:'SUPERMERCADO 12345', value: '275,00'},
    {date: '21/07', description:'ESTACIONAMENTO 12345', value: '12,00'},
    {date: '21/07', description:'PAGAMENTO ALUGUEL 121313', value: '1.500,00'}
  ];

  const futureData = [
    {date: '07/08', description:'PASSAGEM AEREA', value: '3.000,00'},
    {date: '07/08', description:'AMSTERDAM HOTEL', value: '2.500,00'},
    {date: '08/08', description:'FARMACIA', value: '12,00'},
    {date: '08/08', description:'ACADEMIA', value: '300,00'}
  ];

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
          <Row>
              <Button className='dashboard__button  text-start' variant='link' size='lg' block>Minha conta</Button>
          </Row>
          <Row>
            <Button className='dashboard__button text-start' variant='link'size='lg' block>Pagamentos</Button>
          </Row>
          <Row>
            <Button className='dashboard__button text-start' variant='link' size='lg' block>Extrato</Button>
          </Row>
        </Col>
        <Col xs={12} lg={3} className='mt-lg-5 ms-4 pt-lg-4'>
            <h2 className='my-5'>Conta corrente</h2>
            <h6> 
              <small><strong> Saldo em conta corrente</strong> </small> 
            </h6>
            <h4 className='text-success mb-4'>
              <small>R$ </small>3.500<small>,00</small>
            </h4>
            <h6>
              <small><strong>Cheque especial</strong></small>
              </h6>
            <p className='mb-0'>Limite disponível</p>
            <p className='mb-4'>R$ 5.000,00</p>
            <Button variant='secondary'>Ver extrato</Button>
        </Col>
        <Col xs={12} lg={5} className='mt-lg-5 pt-5'>
          <Tabs className='mt-lg-5 pt-lg-5' variant="tabs" >
            <Tab eventKey="latestData" title= 'Últimos lançamentos'defaultActiveKey="latest">
              <Table striped borderless>
                <thead>
                    <tr>
                    <th>Data</th>
                    <th>Descrição</th>
                    <th>Valor (R$)</th>
                  </tr>
                </thead>
                <tbody>
                  {lastData.map(({ date, description, value }) => (
                    <tr>
                      <td>{date}</td>
                      <td>{description}</td>
                      <td>{value}</td>                      
                    </tr>
                  ))}   
                </tbody>    
              </Table>
            </Tab>      
            <Tab eventKey="future" title='Lançamentos futuros' >
              <Table striped borderless>
                <thead>
                    <tr>
                    <th>Data</th>
                    <th>Descrição</th>
                    <th>Valor (R$)</th>
                  </tr>
                </thead>
                <tbody>
                  {futureData.map(({ date, description, value }) => (
                    <tr>
                      <td>{date}</td>
                      <td>{description}</td>
                      <td>{value}</td>                      
                    </tr>
                  ))}   
                </tbody>    
              </Table>
            </Tab>
          </Tabs>    
        </Col>      
      </Row>
    </Container>    
  );
};

export default Dashboard;
