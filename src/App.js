import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import NewsList from './components/NewsList';

function App() {
  // Definir la categoria y noticias
  const [category, setCategory] = useState('');
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const API_KEY = '';
      const URL = `https://newsapi.org/v2/top-headlines?country=co&category=${category}&apiKey=${API_KEY}`;

      const response = await fetch(URL);
      const news = await response.json();

      setNews(news.articles);
    };
    fetchAPI();
  }, [category]);

  return (
    <Fragment>
      <Header title="News Search" />
      <div className="container white">
        <Form setCategory={setCategory} />
        <NewsList news={news} />
      </div>
    </Fragment>
  );
}

export default App;
