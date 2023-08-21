import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

import ProductFormComponent from '../components/ProductFormComponent';
import ProductListComponent from '../components/ProductListComponent';
import NotificationComponent from '../components/NotificationComponent';

import { findAll, post } from '../api/ProductApi.js';

import './Products.css';

function Products() {
  let hostname = window.location.hostname;
  let port = window.location.port;

  if(port !== 80 && port !== 443){
    port = ':8080'; // desenvolvimento local
  } else{
    port = '';
  }
  hostname = hostname + port;

  let [data, setData] = useState([]);
  let isLoading = false;
  const headers = ['#', 'Produto'];

function onMount(){
  findAll(hostname).then(data => {
    onLoading(true);
    setData(data);
    onLoading(false);
  })
}


   function onData(product) {
    onLoading(true);

    post(hostname, {'name': product}).then(data => {
      onMount();
    });

    onLoading(false);
  }

  function onLoading(value) {
    isLoading = value;
  }

onMount();  

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>Produtos:</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <ProductFormComponent onLoading={onLoading} data={data} onData={onData}></ProductFormComponent>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Body>
              {isLoading ? (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Carregando...</span>
                </Spinner>
              ) : (
                  <ProductListComponent onLoading={onLoading} headers={headers} data={data}></ProductListComponent>
              )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <NotificationComponent visible={true} header="Produto" message="Salvo com Sucesso!"></NotificationComponent>
    </div>
  );
}

export default Products;