import { useDispatch } from 'react-redux'
import { Campo, MainContainer, Titulo } from '../../styles'
import { Form, BotaoForm, Etiquetas, Opcoes, Opcao } from './styles'
import { FormEvent, useState } from 'react'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Lista'
import { cadastrar } from '../../store/reducers/tarefa'

const Formulario = () => {
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    const contatoParaAdicionar = new Tarefa(
      nome,
      prioridade,
      enums.Status.PENDENTE,
      telefone,
      email,
      1
    )

    dispatch(cadastrar(contatoParaAdicionar))
  }

  return (
    <MainContainer>
      <Titulo>Criar contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Etiquetas>Nome do contato</Etiquetas>
        <Campo
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          required
        />
        <Etiquetas>Telefone</Etiquetas>
        <Campo
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
          type="text"
          required
        />
        <Etiquetas>E-mail</Etiquetas>
        <Campo
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="text"
        />
        <Opcoes>
          <p>Prioridade</p>
          {Object.values(enums.Prioridade).map((prioridade) => (
            <Opcao key={prioridade}>
              <input
                value={prioridade}
                name="prioridade"
                type="radio"
                onChange={(evento) =>
                  setPrioridade(evento.target.value as enums.Prioridade)
                }
                id="urgente"
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
              />{' '}
              <label htmlFor={prioridade}>{prioridade}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoForm type="submit">Criar contato</BotaoForm>
      </Form>
    </MainContainer>
  )
}

export default Formulario
