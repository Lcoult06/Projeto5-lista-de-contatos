import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`
export const MainContainer = styled.main`
  padding: 0 40px;
  background-color: #a9a9a9;
  height: 100vh;
  overflow-y: scroll;
`

export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 24px;
  font-weight: bold;
`
export const Campo = styled.input`
  background-color: #000;
  width: 100%;
  height: 30px;
  padding: 8px;
  color: #fff;
  border-radius: 16px;
  margin-bottom: 16px;

  &::placeholder {
    color: #fff;
  }
  background-color: #000;
  border-radius: 16px;
  font-weight: bold;
  color: #fff;
  border-color: #666666;
  width: 100%;
`
export default EstiloGlobal
