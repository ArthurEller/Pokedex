import React from 'react';
import logoImg from '../../assets/logo02.svg';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Header, Title , Form, Pokedex} from './styles';

const Dashboard: React.FC = () => {
  return (
    <>

    <Header>
    <img src={logoImg} alt="Pokedex"/>

    <Link to="/">
        <FiChevronLeft size={16} />
        Voltar
    </Link>
    </Header>

    <Title>Qual o tipo de pokémon que você procura?</Title>



    <Form>
      <input placeholder="Digite o nome do pokemon "></input>
      <button>Pesquisar</button>
    </Form>

    <Pokedex>
      <form>
          <img src="" alt="Pokemon Foto"/>
          <p>teste2</p>
          <strong>teste1</strong>
          <FiChevronRight size={20} />
      </form>

    </Pokedex>

    </>
  )
}

export default Dashboard;
