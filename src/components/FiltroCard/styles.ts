import styled from 'styled-components'

type Props = {
  ativo: boolean
}

export const Card = styled.div<Props>`
  padding: 8px;
  border: 2px solid ${(props) => (props.ativo ? '#008b8b' : '#5e5e5e')};
  background-color: ${(props) => (props.ativo ? '#1c1c1c' : '#1c1c1c')};
  color: ${(props) => (props.ativo ? '#008b8b' : '#fff')};
  border-radius: 8px;
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  margin-right: 8px;
`

export const Label = styled.span`
  font-size: 14px;
  display: inline-block;
`
