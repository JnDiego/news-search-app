import React from 'react';
import styles from './Form.module.css';
import useSelect from '../hooks/useSelect';

const Form = ({ setCategory }) => {
  const OPTIONS = [
    { value: 'general', label: 'General' },
    { value: 'business', label: 'Business' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'health', label: 'Health' },
    { value: 'science', label: 'Science' },
    { value: 'sports', label: 'Sports' },
    { value: 'technology', label: 'Technology' },
  ];

  // Utilizar custom hook
  const [category, NewsSelect] = useSelect('general', OPTIONS);

  // Submit al form, pasar categoria a componente principal
  const searchNews = (event) => {
    event.preventDefault();
    setCategory(category);
  };

  return (
    <div className={`${styles.searcher} row`}>
      <div className="col s12 m8 offset-m2">
        <form action="" onSubmit={searchNews}>
          <h2 className={styles.header__text}>Find news by category</h2>
          <NewsSelect />
          <div className="input-field col s12">
            <input type="submit" value="Search" className={`${styles['btn--block']} btn-large amber darken-2`} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
