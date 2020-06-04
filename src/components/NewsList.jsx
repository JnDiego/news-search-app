import React from 'react';
import News from './News';

const NewsList = ({ news }) => {
  return (
    <div className="row">
      {news.map((actualNews) => (
        <News />
      ))}
    </div>
  );
};

export default NewsList;
