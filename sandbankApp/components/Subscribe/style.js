import styled from 'styled-components/native';

export const Subscribe = styled.View`
  background-color: white;
  margin: 10px 20px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px;
`;

export const SubText = styled.Text`
  color: gray;
  font-size: 15px;
  margin-bottom: 5px;
`;

export const MainText = styled.Text`
  font-size: 20px;
  color: #669cfe;
`;

export const Left = styled.View`
  margin-right: 10px;
`;

export const Right = styled.TouchableOpacity`
  background-color: #669cfe;
  border-radius: 15px;
  padding: 8px 15px;
`;

export const Button = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;
