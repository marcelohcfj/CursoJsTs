import React from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import { Title, P } from './styled';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch({
      type: 'BOTÃO_CLICADO',
    });
  }
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
