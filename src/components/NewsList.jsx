import React from 'react';
import News from './News';

const NewsList = ({ news }) => {
  console.log(news);
  return (
    <div className="row">
      {news.map((actualNews) => (
        <News key={actualNews.url} news={actualNews} />
      ))}
    </div>
  );
};

export default NewsList;
