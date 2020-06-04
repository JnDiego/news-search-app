import React from 'react';
import styles from './Form.module.css';

const Form = () => {
  return (
    <div className={`${styles.searcher} row`}>
      <div className="col s12 m8 offset-m2">
        <form action="">
          <h2 className={styles.header__text}>Find news by category</h2>
          <div className="input-field col s12">
            <input type="submit" value="Search" className={`${styles['btn--block']} btn-large amber darken-2`} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
