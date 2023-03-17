import styled from 'styled-components';

export const Input = styled.input`
  outline:none;
  padding: 16px 20px;
  width: 100%;
  border-radius: 5px;
  font-size:16px;
  box-shadow: 1px 1px 5px #0003;
  background-color: #f0f2f5;
  border: none;

  &:hover{
    border-right: 0.1px solid #bbb;
    border-left: 0.1px solid #bbb;
  }
`;