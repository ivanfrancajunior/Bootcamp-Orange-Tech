import { FiThumbsUp } from 'react-icons/fi'
import React from 'react'

import { 
  CardContainer,
  ImageBackground,
  Content,
  UserInfo,
  UserPicture,
  PostInfo,
  HasInfo,
} from './styles'

const Card = () => {
  return (
      <CardContainer>
        <ImageBackground src='https://i.pinimg.com/564x/9d/89/8a/9d898a6f4acf8ea21b10965594203db4.jpg'/>

        <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/104383865?v=4"/>
         <div>
          <h4>Nome do Usuário</h4>
          <p>Tempo do ultimo post</p>
        </div> 
        </UserInfo>
        <PostInfo>
          <h4>Nome do projeto</h4>
          <p>Descrição do projeto<strong>Saiba Mais</strong></p>
        </PostInfo>
        <HasInfo>
          <h4>#TAGS</h4>
          <p>
            <FiThumbsUp />qtd de curtidas
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}

export default Card