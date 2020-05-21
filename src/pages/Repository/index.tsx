import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars1.githubusercontent.com/u/37571156?s=460&u=7f524951cfc164e30ee017e5fa6b3dc98144da1e&v=4"
            alt="Renato"
          />
          <div>
            <strong>NomeDoRepositorio</strong>
            <p>Descrição</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>9999</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>9999</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>999</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="/">
          <div>
            <strong>Issue</strong>
            <p>Descriçao</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
