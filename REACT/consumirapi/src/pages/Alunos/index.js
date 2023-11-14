/* eslint-disable */
import React, { useState } from 'react';
import { get } from 'lodash'
import { Link } from 'react-router-dom';
import { Container } from '../../styles/GlobalStyles';
import { FaUserCircle, FaEdit, FaWindowClose, FaExclamation } from 'react-icons/fa';
import { AlunoContainer, ProfilePicture, NovoAluno } from './styled';
import axios from '../../services/axios';
import { toast } from 'react-toastify';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);
  React.useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
      setAlunos(response.data);
    }

    getData();
  }, []);

  const handleDeleteAsk = e => {
    e.preventDefault();
    const exclamation = e.currentTarget.nextSibling;
    exclamation.setAttribute('display', 'block');
    e.currentTarget.remove()
  }

  const handleDelete = async (e, id, index) => {
    e.persist();

    try {
      await axios.delete(`/alunos/${id}`);
      const novosAlunos = [...alunos];
      novosAlunos.splice(index, 1);
      setAlunos(novosAlunos);
    } catch (err) {
      const status = get(err, 'response.status', 0);

      if (status === 401) {
        toast.error('Você precisa fazer login');
      } else {
        toast.error('Ocorreu um erro ao excluir aluno');
      }
    }
  };

  return (
    <Container>
      <h1>Alunos</h1>

      <NovoAluno to="/aluno/">Novo Aluno</NovoAluno>

      <AlunoContainer>
        {alunos.map((aluno) => (
          <div key={String(aluno.id)}>
            <ProfilePicture>
              {get(aluno, 'Fotos[0].url', false) ? <img src={aluno.Fotos[0].url} alt="" /> : <FaUserCircle size={36} />}
            </ProfilePicture>

            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>

            <Link to={`/aluno/${aluno.id}/edit`}><FaEdit size={16} /></Link>
            <Link onClick={handleDeleteAsk} to={`/aluno/${aluno.id}/delete`}><FaWindowClose size={16} /></Link>

            <FaExclamation size={16} display="none" cursor="pointer" onClick={e => handleDelete(e, aluno.id)} />
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}
