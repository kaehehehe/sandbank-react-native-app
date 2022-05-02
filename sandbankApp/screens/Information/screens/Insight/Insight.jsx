import React from 'react';
import { ScrollView } from 'react-native';

import Articles from '../../../../components/Articles';

const Insight = ({ data }) => {
  return (
    <ScrollView>
      <Articles data={data} />
    </ScrollView>
  );
};

export default Insight;
