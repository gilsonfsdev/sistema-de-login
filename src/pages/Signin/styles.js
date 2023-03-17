import styled from 'styled-components'

export const Container = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
`;

export const Content = styled.div `
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 10px 10px 10px #0003;
  background-color: white;
  max-width: 350px;
  padding: 20px;
  border-radius: 20px;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #676767;
`;

export const LabelSignup = styled.label`
  font-size: 16px;
  color: #676767;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
  padding: 5px 0px;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color:#676767;
    transition: 0.3s;


    &:hover{
      color: #202020;
    }
  }
`