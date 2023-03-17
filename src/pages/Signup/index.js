import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

// hooks
import useAuth from '../../hooks/useAuth';

// components
import Input from '../../components/Input';
import Button from '../../components/Button';

// style
import * as C from './styles'

const Signup = () => {
  const { signup } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [emailConf, setEmailConf] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = () => {
    if(!email | !senha | !emailConf){
      setError("Preencha todos os campos");
      return
    } else if(email !== emailConf){
      setError("Os e-mails são diferentes");
      return
    }

    const res = signup(email,senha);

    if (res) {
      setError(res);
      return
    }

    alert("Usuário cadastrado com sucesso");

    navigate('/');
  }

  return (
    <C.Container>
      <C.Label>SISTEMA DE LOGIN</C.Label>
      <C.Content>
        <Input 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu e-mail"
        />
        <Input 
          type="email"
          value={emailConf}
          onChange={(e) => setEmailConf(e.target.value)}
          placeholder="Confirme seu e-mail"
        />
        <Input 
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Digite sua senha"
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Cadastre-se" onClick={handleSignUp}/>
        <C.LabelSignup>Já tem uma conta?</C.LabelSignup>
        <C.Strong>
          <Link to="/">Entre</Link>
        </C.Strong>
      </C.Content>
    </C.Container>
  )
}

export default Signup