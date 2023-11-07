import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import { Title, P } from './styled';
import axios from '../../services/axios';

export default function Login() {
  React.useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
      const { data } = response;
      console.log(data);
    }

    getData();
  }, []);
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
