/* eslint-disable */
import React, { useState } from 'react';
import { get } from 'lodash'
import { Link } from 'react-router-dom';
import { Container } from '../../styles/GlobalStyles';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';
import { AlunoContainer, ProfilePicture } from './styled';
import axios from '../../services/axios';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);
  React.useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
      setAlunos(response.data);
    }

    getData();
  }, []);

  return (
    <Container>
      <h1>Alunos</h1>
      <AlunoContainer>
        {alunos.map((aluno) => (
          <div key={String(aluno.id)}>
            <ProfilePicture>
              {get(aluno, 'Fotos[0].url', false) ? <img src={aluno.Fotos[0].url} alt="" /> : <FaUserCircle size={36} />}
            </ProfilePicture>

            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>

            <Link to={`/aluno/${aluno.id}/edit`}><FaEdit size={16} /></Link>
            <Link to={`/aluno/${aluno.id}/edit`}><FaWindowClose size={16} /></Link>
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}
