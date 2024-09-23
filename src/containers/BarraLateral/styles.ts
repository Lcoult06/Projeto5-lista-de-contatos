import styled from 'styled-components'

export const Aside = styled.aside`
  padding: 16px;
  background-color: #1c1c1c;
  height: 100vh;
`

export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`

export const Campo = styled.input`
  background-color: #000;
  width: 100%;
  height: 30px;
  padding: 8px;
  color: #fff;
  border-radius: 16px;

  &::placeholder {
    color: #fff;
  }
`
