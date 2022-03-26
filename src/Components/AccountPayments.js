import React from "react";
import { Button, Col, Tabs, Tab, Form, Row } from 'react-bootstrap';

const AccountPayments = ( ) => (
  
  <>
    <Col xs={12} lg={8} className='mt-lg-5 pt-5'>
      <h2 className='mt-4'>Pagamentos</h2>
        <Tabs className='mt-lg-5 pt-lg-2' variant="tabs" defaultActiveKey="boleto">
          <Tab eventKey="boleto" title= 'Boleto'>
            <Form>
              <Form.Group className="my-4 ms-3" controlId="formBarCode">
                <Form.Label><strong>Código de barras</strong></Form.Label>
                <Form.Control type="number" placeholder="Insira o código de barras" />  
              </Form.Group> 
              <Form.Group controlId="formPaymentType" className="mb-5 ms-3">
                <Form.Label><strong>Forma de pagamento</strong></Form.Label>
                  <div className="d-flex">
                    <Form.Check 
                      type='radio'
                      id='debit'
                      label='Débito em conta corrente'
                      name='paymentType'
                    />
                    <Form.Check 
                      type='radio'
                      id='credit'
                      className="ms-4"
                      label='Cartão de Crédito'
                      name='paymentType'
                    />
                    </div>
              </Form.Group>
              <Button variant="success" className="ms-3">Continuar</Button>
            </Form>
          </Tab>      
          <Tab eventKey="transfer" title='Transferências' >
            <Form>
              <Row className="mt-5 mb-4 ms-2">
                <Form.Group as={Col} controlId="formBank">
                  <Form.Label><strong>Banco</strong></Form.Label>
                  <Form.Select defaultValue="Selecione">
                    <option>Banco do Brasil</option>
                    <option>Caixa Econômica</option>
                    <option>Bradesco</option>
                    <option>Nubank</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId="formBankBranch">
                  <Form.Label><strong>Agência</strong></Form.Label>
                  <Form.Control />
                </Form.Group>
                <Form.Group as={Col} controlId="formAccountNumber">
                  <Form.Label><strong>Conta</strong></Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>
              <Row className="ms-2">
                <Form.Group as={Col} controlId="formTransferValue">
                  <Form.Label><strong>Valor da transferência</strong></Form.Label>
                  <Form.Control />
                </Form.Group>
                <Form.Group as={Col} controlId="formHistoryLabel">
                  <Form.Label><strong>Identificação nos extratos</strong></Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>
              <Form.Group controlId="formPaymentType" className="mb-5">
              </Form.Group>
              <Button variant="success" className="ms-3">Continuar</Button>
            </Form>
          </Tab>
        </Tabs>    
    </Col> 
  
  </>
  
);

  

export default AccountPayments;