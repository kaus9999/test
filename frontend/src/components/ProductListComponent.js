import { useState } from 'react';
import Table from 'react-bootstrap/Table';

function ProductListComponent(props) {

  let headersMap = props['headers'];
  let dataMap = props['data'];

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
        {headersMap.map((header, index)=>{
          return (
            <th key={index}>
            {header}
            </th>
          )
        })}
        </tr>
      </thead>
      <tbody>
        {dataMap.map((product, index)=>{
          return (
            <tr key={index}>
              <td>{product.id}</td>
              <td>{product.name}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  );
}

export default ProductListComponent;