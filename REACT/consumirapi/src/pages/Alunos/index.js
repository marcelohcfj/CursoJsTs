import React, { useEffect } from 'react';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';

export default function Alunos() {
  useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
      console.log(response.data);
    }

    getData();
  }, []);

  return (
    <Container>
      <h1>Alunos</h1>
    </Container>
  );
}
