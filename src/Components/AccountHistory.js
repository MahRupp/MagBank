import React from "react";
import { Col, Table } from 'react-bootstrap';

const AccountHistory = ({data}) => {
  const { history } = data;

  return (
    <Col xs={12} lg={8} className='mt-lg-5 ms-4 pt-lg-4'>
      <h2 className='my-5'>Extrato de conta corrente</h2>
      <Table striped borderless>
        <thead>
            <tr>
            <th>Data</th>
            <th>Descrição</th>
            <th>Valor (R$)</th>
            <th>Saldo (R$)</th>
          </tr>
        </thead>
        <tbody>
          {history.map(({ date, description, value, balance }) => (
            <tr>
              <td>{date}</td>
              <td>{description}</td>
              <td>{value}</td>   
              <td>{balance}</td>                    
            </tr>
          ))}   
        </tbody>    
      </Table>        
    </Col>
  )
};

  

export default AccountHistory;