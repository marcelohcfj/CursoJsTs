/* eslint-disable */
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import { get } from 'lodash';
import axios from 'axios';
import history from '../../services/history';

export default function Register() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if(nome. length < 3 || nome.length > 100) {
      formErrors = true;
      toast.error('Campo nome deve ter entre 3 e 100 caracteres')
    }

    if(password. length < 6 || password.length > 100) {
      formErrors = true;
      toast.error('Campo senha deve ter entre 6 e 100 caracteres')
    }

    if(formErrors) return;

    try {
      await axios.post("http://projectmarcee.site/users/", {
        nome,
        password,
        email,
      });

      toast.success('Usuário cadastrado com sucesso!');
      history.push('/login');
    } catch(err) {
      const errors = get(err, 'response.data.errors', []);

      errors.map(error => toast.error(error));
    }

  }

  return (
    <Container>
      <h1>Crie sua conta </h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome:
          <input
          type="text"
          value={nome}
          onChange={e => setNome(e.target.value)}
          placeholder="Seu nome"></input>
        </label>
        <label htmlFor="email">
          Email:
          <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Seu email"></input>
        </label>
        <label htmlFor="password">
          Senha:
          <input
          type="password"
          value={password}
          onChange={e => setpassword(e.target.value)}
          placeholder="Sua Senha"></input>
        </label>

        <button type="sumit">Criar minha conta</button>
      </Form>
    </Container>
  );
}
