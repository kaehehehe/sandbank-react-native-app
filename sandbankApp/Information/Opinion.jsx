import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const Opinion = ({ data }) => {
  useEffect(() => {
    console.log(data);
  });

  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default Opinion;
