import styled from 'styled-components/native';

export const Article = styled.View`
  margin-bottom: 20px;
`;

export const Metadata = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
`;

export const UploadDate = styled.Text`
  font-size: 15px;
  color: gray;
`;

export const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LikeWrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LikeCnt = styled.Text`
  margin: 0 5px;
`;

export const ShareWrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
`;