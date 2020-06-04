import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';

function App() {
  // Definir la categoria y noticias
  const [category, setCategory] = useState('');
  const [news, setNews] = useState('');
  return (
    <Fragment>
      <Header title="News Search" />
      <div className="container white">
        <Form setCategory={setCategory} />
      </div>
    </Fragment>
  );
}

export default App;
