import { useNavigate } from 'react-router-dom';

// components
import Button from '../../components/Button';

// hook
import useAuth from '../../hooks/useAuth';

// style
import * as C from './styles'

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
      <C.Title>Home</C.Title>
      <Button Text="Sair" onClick={() => [signout(), navigate('/')]} />
    </C.Container>
  )
}

export default Home;