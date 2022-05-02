export const filterTopArticles = (data) => {
  const result = data.filter((item) => item.like_top === 1);
  return result;
};
