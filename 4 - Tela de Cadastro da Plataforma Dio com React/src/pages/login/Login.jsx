import Header from '../../components/Header/Header'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'

import { MdEmail, MdLock } from 'react-icons/md'

import { useNavigate } from 'react-router-dom'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email('O email é um campo necessário').required('Campo obrigatório'),
  password: yup.string().min(3, 'A senha precisa ter pelo menos 3 caracteres').required('Campo obrigatório')
}).required();

import { Container, Title, Column, TitleLogin, SubtitleLogin, Forgot, New, Row, Wrapper } from './styles'
import { api } from '../../services/api'


const Login = () => {

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

  const handleClickSignIn = () => {
    navigate('/feed')
    
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
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu Login e make the chage._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input placeholder='E-mail' name='email' control={ control } leftIcon={<MdEmail />} errorMessage={errors?.email?.message} />
              <Input placeholder='Senha' name='password' control={ control } type='password' leftIcon={ <MdLock/> }  errorMessage={errors?.password?.message} />
              <Button title='Entrar' variant='secondary' type='submit' /> 
              {/*  onClick={handleClickSignIn}, errorMessage={errors.password.message} */}
            </form>
            <Row>

              <Forgot>Esqueci minha senha</Forgot>
              <New>Criar conta</New>
            </Row>
          </Wrapper>
        </Column>
      </Container>


    </>
  )
}

export default Login