import React from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import { Title, P } from './styled';
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.botao());
  }
  return (
    <Container>
      <Title>
        Pagina de login
        <small>Oi</small>
      </Title>
      <P>Lorem ipsum solor sit amet</P>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
