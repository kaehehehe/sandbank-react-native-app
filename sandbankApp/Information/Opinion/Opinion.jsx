import React from 'react';
import styled from 'styled-components/native';
import { Text, FlatList } from 'react-native';

import Article from '../../components/Article';

const Container = styled.View`
  background-color: white;
  margin: 20px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const Header = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0 25px 30px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-right: 10px;
`;

const TypeWrapper = styled.View`
  background-color: #669CFC;
  padding: 5px 8px;
  border-radius: 8px;
`;

const Type = styled.Text`
  font-size: 14px;
  color: white;
`;

const Opinion = ({ data }) => {
  const { title, type } = data.sector;

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <TypeWrapper>
          <Type>{type}</Type>
        </TypeWrapper>
      </Header>
      <FlatList data={data.content} renderItem={Article}></FlatList>
    </Container>
  );
};

export default Opinion;
