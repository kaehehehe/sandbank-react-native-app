import React from 'react';
import { ScrollView } from 'react-native';

import Articles from '../../../../components/Articles';
import TopArticles from '../../../../components/TopArticles';
import { filterTopArticles } from '../../../../utils/filterTopArticles';

const Insight = ({ data }) => {
  return (
    <ScrollView>
      <TopArticles content={filterTopArticles(data.content)} />
      <Articles data={data} />
    </ScrollView>
  );
};

export default Insight;
