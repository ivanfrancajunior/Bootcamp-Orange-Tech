import { BuscarInputContainer, Row, Menu, MenuRigth, Wrapper, Input, Container, UserPicture, } from './styles'
import Button from '../Button/Button'
import Logo from '../../assets/logo-dio.png'
import { useNavigate } from 'react-router-dom'

const Header = ({ autenticado }) => {
  const navigate = useNavigate()
  const handleClickRegister = () => {
    navigate('/register')
    
  }
  const handleClickSignIn = () => {
    navigate('/login')
    
  }
  const handleClickHome = () => {
    navigate('/')
    
  }
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={Logo} alt="logo-dio" onClick={handleClickHome} style={{ cursor:'pointer'}}/>
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder='Buscar' />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <>
            <UserPicture src='https://avatars.githubusercontent.com/u/104383865?v=4'/>
            </>
          ) : (
            <>
              <MenuRigth onClick={handleClickHome} >Home</MenuRigth>
              <Button title='Entrar' onClick={handleClickSignIn}/>
              <Button title='Cadastrar' onClick={handleClickRegister}/>
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  )
}

export default Header