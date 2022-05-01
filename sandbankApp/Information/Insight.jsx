import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const Insight = ({data}) => {
  useEffect(() => {
    console.log(data);
  });
  
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default Insight;
