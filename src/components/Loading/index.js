import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import { Container, Spinner } from './styles';

const Loading = () => {
  <Container>
    <Spinner>
      <FaSpinner color="#FFF" size={55} />
    </Spinner>
    Carregando...
  </Container>;
};

export default Loading;
