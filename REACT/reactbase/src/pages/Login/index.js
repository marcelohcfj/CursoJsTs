import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import { Title, P } from './styled';

export default function Login() {
  return (
    <Container>
      <Title>
        Pagina de login
        <small>Oi</small>
      </Title>
      <P>Lorem ipsum solor sit amet</P>
      <button type="button">Enviar</button>
    </Container>
  );
}
