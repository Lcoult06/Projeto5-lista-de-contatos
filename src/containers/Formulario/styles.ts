import styled from 'styled-components'

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 24px;
  color: $666666;
`

export const Etiquetas = styled.label`
  font-size: 16px;
  display: block;
  margin-bottom: 5px;
`

export const BotaoForm = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #008b8b;
  border-radius: 16px;
  margin-right: 8px;
`

export const Opcoes = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
    font-size: 16px;
  }

  label {
    margin-right: 6px;
  }
`

export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
  font-size: 14px;
`
