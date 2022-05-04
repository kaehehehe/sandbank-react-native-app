import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: white;
  margin: 20px 20px 10px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

export const Header = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0 25px 30px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-right: 10px;
`;

export const ArticleTitleWrapper = styled.View`
  width: 100%;
  height: 50px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ArticleTitle = styled.Text`
  font-size: 18px;
  text-align: center;
  font-weight: bold;
`;

export const TypeWrapper = styled.View`
  background-color: #71e1ac;
  padding: 5px 8px;
  border-radius: 8px;
`;

export const Type = styled.Text`
  font-size: 14px;
  color: white;
`;

export const Pagination = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Icons = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 20px;
`;

export const LikeWrapper = styled.TouchableOpacity`
  display: flex;
  margin-right: 20px;
`;

export const ShareWrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
