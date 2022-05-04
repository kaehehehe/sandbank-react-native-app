import React from 'react';
import { ScrollView } from 'react-native';

import Articles from '../../../../components/Articles';
import Subscribe from '../../../../components/Subscribe';
import TopArticles from '../../../../components/TopArticles';
import { filterTopArticles } from '../../../../utils/filterTopArticles';

const Youtube = ({ data }) => {
  return (
    <ScrollView>
      <TopArticles content={filterTopArticles(data.content)} />
      <Subscribe />
      <Articles data={data} />
    </ScrollView>
  );
};

export default Youtube;
