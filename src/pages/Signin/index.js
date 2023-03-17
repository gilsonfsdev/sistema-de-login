import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// estilo
import * as C from './styles';

// components
import Button from '../../components/Button';
import Input from '../../components/Input';

// hooks
import useAuth from '../../hooks/useAuth';

const Signin = () => {
  const {signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // verifica se o email e senha estão preenchidos
    if(!email | !senha) {
      setError("Preencha todos os campos");
      return
    }
    
    // passa o email e senha para função signin que verifica se estão corretos
    const res = signin(email, senha);

    // Caso retorne algo é pq deu errado e este erro é setado com setError
    if (res) {
      setError(res);
      return;
    } 
    
    // se encontrou o sign redireciona para home
    navigate("/home");
  }

  return (
    <C.Container>
      <C.Label>SISTEMA DE LOGIN</C.Label>
      <C.Content>
        <Input 
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input 
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Entrar" onClick={handleLogin} />
        <C.LabelSignup>Não tem uma conta?</C.LabelSignup>
        <C.Strong>
          <Link to="/signup">&nbsp; Registre-se</Link>
        </C.Strong>
      </C.Content>
    </C.Container>
  )
}

export default Signin