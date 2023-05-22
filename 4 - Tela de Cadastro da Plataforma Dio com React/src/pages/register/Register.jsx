import Header from '../../components/Header/Header'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'

import { MdEmail, MdLock, MdPerson2 } from 'react-icons/md'

import { useNavigate } from 'react-router-dom'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  usuario: yup.string('O nome é um campo obrigatório').min(5, 'A senha precisa ter pelo menos 3 caracteres').required('Campo obrigatório'),
  email: yup.string().email('O email é um campo necessário').required('Campo obrigatório'),
  password: yup.string().min(3, 'A senha precisa ter pelo menos 3 caracteres').required('Campo obrigatório')
}).required();

import { Container, Title, Column, TitleLogin, SubtitleLogin, Row, Wrapper, Create } from './styles'
import { api } from '../../services/api'


const Register = () => {

  const navigate = useNavigate()
  const { control, handleSubmit, formState: { isValid,errors } } = useForm({
    resolver: yupResolver(schema),
    mode:'onChange'
  });

  
  const onSubmit = async formData => {
    try {
      const { data } = await api.get(`/users?email=${formData.email}&senha=${formData.password}`)
      console.log('retorno da api', data)
       if(data.length && data[0].id){
        navigate('/feed') 
        return
       } else {
         alert('Email ou senha inválidos')
      }
    } catch (error) {
      alert('Ocorreu um erro, tente novamente.')
    }
  } 

  const handleClickLogin = () => {
    navigate('/login')
    
  }
  return (
    <>
      <Header />

      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>

        <Column>
          <Wrapper>
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input placeholder='Nome Completo' name='usuario' control={ control } leftIcon={<MdPerson2 />} errorMessage={errors?.usuario?.message} />
              <Input placeholder='E-mail' name='email' control={ control } type='password' leftIcon={ <MdEmail/> }  errorMessage={errors?.password?.message} />
              <Input placeholder='Senha' name='senha' control={ control } type='password' leftIcon={ <MdLock/> }  errorMessage={errors?.password?.message} />
              <Button title='Criar minha conta' variant='secondary' type='submit' /> 
              <SubtitleLogin>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</SubtitleLogin>
            </form>
            <Row>

              <Create>Já tenho conta? <span onClick={handleClickLogin}>Fazer login</span> </Create>
            </Row>
          </Wrapper>
        </Column>
      </Container>


    </>
  )
}

export default Register