import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState();

  useEffect(() => {
    // Pego o token e o usuário do localStorage
    const userToken = localStorage.getItem("user_token");
    const userStorage = localStorage.getItem("users_db");

    // Verifico se tem um token e um usuário
    // Verifico se o usuário tem o mesmo email que o token
    // Se for o mesmo eu seto o user com o usuário do banco
    if(userToken && userStorage) {
      const hasUser = JSON.parse(userStorage).filter((user) => user.email === JSON.parse(userToken).email);

      if(hasUser) setUser(hasUser[0]);
    }
  }, []);

  const signin = (email, password) => {
    // Crio uma const para receber os usuários do banco de dados
    const usersStorage = JSON.parse(localStorage.getItem("users_db"));

    // Faço um filtro para verificar se existe algum email cadastrado com este email que está entrando
    const hasUser = usersStorage?.filter((user) => user.email === email)

    // Se tem usuário, verifico se ele tem o mesmo email e password que veio por parâmetro
    if(hasUser?.length){
      if(hasUser[0].email === email && hasUser[0].password === password){

        // Crio um token
        const token = Math.random().toString(36).substring(2);

        // Seto no localStorage um user_token, passando o email e o token
        localStorage.setItem("user_token", JSON.stringify({ email, token}));

        setUser({email, password});
        return; 
      } else {
        return "E-mail ou senha incorreta";
      }
    } else {
      return "Usuário não cadastrado";
    }
  };

  const signup = (email, password) => {
    const userStorage = JSON.parse(localStorage.getItem("users_db"));

    const hasUser = userStorage?.filter((user) => user.email === email);

    if (hasUser) {
      return "E-mail já cadastrado";
    }

    let newUser;

    if(userStorage) {
      newUser = [...userStorage, { email,password }];
    } else {
      newUser = [{ email, password}];
    }

    localStorage.setItem("users_db", JSON.stringify(newUser));
  
    return;
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };

  return (
    <AuthContext.Provider 
      value={{ user, signed: !!user, signin, signup, signout}}
    >
      {children}
    </AuthContext.Provider>)
};