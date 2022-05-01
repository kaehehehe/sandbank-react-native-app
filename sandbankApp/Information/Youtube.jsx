import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const Youtube = ({ data }) => {
  useEffect(() => {
    console.log(data);
  });
  
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default Youtube;
