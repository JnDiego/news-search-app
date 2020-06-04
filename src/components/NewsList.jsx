import React from 'react';
import News from './News';
import PropTypes from 'prop-types';

const NewsList = ({ news }) => {
  return (
    <div className="row">
      {news.map((actualNews) => (
        <News key={actualNews.url} news={actualNews} />
      ))}
    </div>
  );
};

NewsList.propTypes = {
  news: PropTypes.array.isRequired,
};

export default NewsList;
