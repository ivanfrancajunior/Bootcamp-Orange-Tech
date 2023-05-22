import Logo from './assets/logotipo-do-github.png'
import { Container } from './Appstyles'
import Input from './components/Input/Input'
import Button from './components/Button/Button'
import InputRepo from './components/ItemRepo/IntemRepo'
import { useState } from 'react'
import { api } from './services/api'
function App() {
  const [ repos, setRepos ] = useState([])
  const [ currentRepo, setCurrentRepo ] = useState('')

  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`)

    
    if (data.id) {

      const isExist = repos.find(repo => repo.id === data.id)
      
      if (!isExist) {
        setRepos(prev => [ ...prev, data ])
        setCurrentRepo('')
        return
      }


    }
    alert('Repositório não encontrado')
    console.log('cheguei aqui')
  }
  const handleRemoveRepo = (id) => {
    
    const Removed = repos.filter(repo => repo.id !== id)
    setRepos(Removed) 

  }
  return (
    <Container>
      <h1>Repo<span className='color'>SEARCH</span></h1>
      <img src={Logo} alt='github-logo' width={72} height={72} />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />

      <Button onClick={handleSearchRepo} />
      {repos.map(repo => <InputRepo repo={repo} handleRemoveRepo={ handleRemoveRepo} key={repo}/>)}
    </Container>
  )
}

export default App
