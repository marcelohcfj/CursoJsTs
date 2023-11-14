/* eslint-disable */
import React from 'react';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Title, Form } from './styled';
import axios from '../../services/axios';
import * as actions from '../../store/modules/auth/actions';

export default function Fotos({ match, history }) {
  const dispatch = useDispatch();
  const id = get(match, 'params.id', '');

  const [foto, setFoto] = React.useState('');

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/alunos/${id}`);
        setFoto(get(data, 'Fotos[0].url', ''));
      } catch {
        toast.error('Erro ao obter imagem');
        history.push('/');
      }
    };

    getData();
  }, [id, history]);

  const handleChange = async (e) => {
    const file = e.target.files[0];
    const fotoURL = URL.createObjectURL(file);

    setFoto(fotoURL);

    const formData = new FormData();
    formData.append('aluno_id', id);
    formData.append('foto', file);

    try {

      await axios.post('/fotos/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success('Foto enviada com sucesso!');

    } catch (err) {
      const { status } = get(err, 'response', '');
      toast.error('Erro ao enviar foto.');

      if (status === 401) dispatch(actions.loginFailure());
    }
  };

  return (
    <Container>

      <Title>Fotos</Title>

      <Form>
        <label htmlFor="foto">
          {foto ? <img src={foto} alt="Foto" /> : 'Selecionar'}
          <input type="file" id="foto" onChange={handleChange} />
        </label>
      </Form>
    </Container>
  );
}

Fotos.propTypes = {
  match: PropTypes.shape({}).isRequired,
  history: PropTypes.shape([]).isRequired,
};
