import { Container, TextContent, Title, TitleHighligth } from './styles'
import Header from '../../components/Header/Header'
import Banner from '../../assets/banner.png'
import Button from '../../components/Button/Button'
import { Navigate, useNavigate } from 'react-router-dom'
const Home = () => {

  const navigate = useNavigate()
  const handleClickSignIn = () => {
    navigate('/login')
    
  }
  return (
    <>
      <Header />

      <Container>
        <div>
        <Title>
          <TitleHighligth>Implemente</TitleHighligth> <br />o seu Futuro global agora!
        </Title>
          <TextContent> Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
            
          </TextContent>
          <Button title = 'Comece agora' variant='secundary' onClick={handleClickSignIn} />

        </div>
        
        <div>
          <img src={Banner} alt="dio-banner" />
        </div>
      </Container>

      
    </>
  )
}

export default Home