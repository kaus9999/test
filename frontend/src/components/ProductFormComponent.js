import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ProductFormComponent(props) {

  const [product, setProduct] = useState('');

  function handleChange(event) {
    setProduct(event.target.value);
  }

  const handleSubmit = (event) => {
    props.onLoading(true);
      event.preventDefault();
      event.stopPropagation();
      console.log(product);
      if(product){
        props.onData(product);
        setProduct('');
      }
      props.onLoading(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formProduct">
        <Form.Label>Nome do Produto</Form.Label>
        <Form.Control required type="text" value={product} onChange={handleChange} placeholder="Nome do Produto" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
}

export default ProductFormComponent;