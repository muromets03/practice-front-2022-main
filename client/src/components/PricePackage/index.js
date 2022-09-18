import React, { useState } from 'react';
import data from './PricePackage.json';
import PricePackageCategory from './PricePackageCategory';

import styles from './PricePackage.module.scss';

const PricePackage = () => {
  const { heading, categories } = data;

  const [isActive, setIsActive] = useState(null);

  const isActiveBox = (id) => {
    if (isActive === id) {
      return setIsActive(null);
    }
    setIsActive(id);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>{heading}</h1>
        <div className={styles.categories}>
          {categories.map((category) => (
            <PricePackageCategory
              category={category}
              key={category.id}
              isActiveBox={isActiveBox}
              isActive={isActive}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricePackage;
