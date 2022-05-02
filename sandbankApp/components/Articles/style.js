import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: white;
  margin: 20px;
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

export const TypeWrapper = styled.View`
  background-color: ${({ color }) => color};
  padding: 5px 8px;
  border-radius: 8px;
`;

export const Type = styled.Text`
  font-size: 14px;
  color: white;
`;

export const ButtonWrapper = styled.View`
  background-color: #f1f6ff;
  width: 90%;
  border-radius: 30px;
  margin-bottom: 20px;
  padding: 3px 0;
`;
