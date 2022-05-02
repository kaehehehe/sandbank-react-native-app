import React from 'react';
import { ScrollView } from 'react-native';

import Articles from '../../../../components/Articles';
import TopArticles from '../../../../components/TopArticles';

const Youtube = ({ data }) => {
  return (
    <ScrollView>
      <TopArticles content={data.content} />
      <Articles data={data} />
    </ScrollView>
  );
};

export default Youtube;
