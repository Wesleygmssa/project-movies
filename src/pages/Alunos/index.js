/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';
import { Container } from '../../styles/Global';
import { AlunoContainer, ProfilePicture } from './styles';
import api from '../../services/api';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);
  React.useEffect(() => {
    async function getData() {
      const response = await api.get('/alunos');
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
              {get(aluno, 'Photos[0].url', '') ? (
                <img src={aluno.Photos[0].url} alt="" />
              ) : (
                  <FaUserCircle size={38} />
                )}
            </ProfilePicture>
            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>
            <Link to={`/aluno/${aluno.id}/edit`}><FaEdit size={16} /></Link>
            <Link to={`/aluno/${aluno.id}/delete`}><FaWindowClose size={16} /></Link>
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}
