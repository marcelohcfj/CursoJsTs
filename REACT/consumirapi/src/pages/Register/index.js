/* eslint-disable */
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/modules/auth/actions';

export default function Register() {
  const dispatch = useDispatch();

  const id = useSelector(state => state.auth.user.id);
  const nomeStored = useSelector(state => state.auth.user.nome);
  const emailStored = useSelector(state => state.auth.user.email);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  React.useEffect(() => {
    if(!id) return;

    setNome(nomeStored);
    setEmail(emailStored);
  }, [emailStored, id, nomeStored])

  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if(nome. length < 3 || nome.length > 100) {
      formErrors = true;
      toast.error('Campo nome deve ter entre 3 e 100 caracteres')
    }

    if(!id && (password.length < 6 || password.length > 100)) {
      formErrors = true;
      toast.error('Campo senha deve ter entre 6 e 100 caracteres')
    }

    if(formErrors) return;

    dispatch(actions.registerRequest({ nome, email, password, id }));
  }

  return (
    <Container>
      <h1>{id ? 'Editar dados' :'Crie sua conta'}</h1>
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

        <button type="sumit">{id ? 'Salvar' :'Criar conta'}</button>
      </Form>
    </Container>
  );
}
