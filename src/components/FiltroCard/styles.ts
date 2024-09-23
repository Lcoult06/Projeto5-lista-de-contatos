import styled from 'styled-components'

type Props = {
  ativo: boolean
}

export const Card = styled.div<Props>`
  padding: 8px;
  border: 2px solid ${(props) => (props.ativo ? '#008b8b' : '#5e5e5e')};
  background-color: ${(props) => (props.ativo ? '#fff' : '#fff')};
  color: ${(props) => (props.ativo ? '#008b8b' : '#5e5e5e')};
  border-radius: 8px;
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
