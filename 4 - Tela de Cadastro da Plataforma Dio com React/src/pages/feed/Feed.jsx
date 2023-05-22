import React from 'react'
import  Card  from '../../components/Card/Card'
import  UserInfo  from '../../components/UserInfo/UserInfo';
import  Header  from '../../components/Header/Header';
import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
  return (
    <>
      <Header  autenticado={true}/>
      <Container>
        <Column flex='3'>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex='1'>
          <TitleHighlight>#TOP 5 RANKING SEMANAL</TitleHighlight>
        <UserInfo name='Ivan Jr.' image='https://avatars.githubusercontent.com/u/104383865?v=4' percentual={73}/>
        <UserInfo name='Ivan Jr.' image='https://avatars.githubusercontent.com/u/104383865?v=4' percentual={15}/>
        <UserInfo name='Ivan Jr.' image='https://avatars.githubusercontent.com/u/104383865?v=4' percentual={89}/>
        <UserInfo name='Ivan Jr.' image='https://avatars.githubusercontent.com/u/104383865?v=4' percentual={31}/>
        <UserInfo name='Ivan Jr.' image='https://avatars.githubusercontent.com/u/104383865?v=4' percentual={7}/>
        </Column>

      </Container>

      
    </>
  )
}


export default Feed