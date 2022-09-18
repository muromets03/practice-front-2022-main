import React, { useRef } from 'react';
import cx from 'classnames';

import PricePackageInformationItem from '../PricePackageInformationItem';
import useMediaQuery from '../../hooks/useMediaQuery';

import styles from '../PricePackage.module.scss';

const classNameById = { 1: styles.pink, 2: styles.gold };

const PricePackageCategory = ({
  category: {
    id,
    category_heading,
    category_text,
    category_price,
    informations,
    btn,
  },
  isActive,
  isActiveBox,
}) => {
  const smallScreen = useMediaQuery('(max-width: 700px)');

  const refHeight = useRef();
  const heightElem = `${refHeight.current?.scrollHeight}px`;

  return (
    <article className={cx(styles.categories_item, classNameById[id])}>
      <div
        className={styles.heading_box}
        onClick={smallScreen ? () => isActiveBox(id) : undefined}
      >
        <h2 className={styles.heading_title}>{category_heading}</h2>
        <p className={styles.heading_text}>{category_text}</p>
        <p className={styles.heading_price}>{category_price}</p>
        <span className={styles.heading_btn_activated}>
          {isActive === id ? (
            <i className={cx('fas fa-minus', styles.minus)} />
          ) : (
            <i className={cx('fas fa-plus', styles.plus)} />
          )}
        </span>
      </div>
      <div
        className={
          isActive === id
            ? cx(styles.information_box, styles.information_box_active)
            : styles.information_box
        }
        style={
          smallScreen
            ? { height: isActive === id ? heightElem : '0px' }
            : { height: '100%' }
        }
        ref={refHeight}
      >
        <ul className={styles.information_list}>
          {informations.map((item, i) => (
            <PricePackageInformationItem item={item} key={i} />
          ))}
        </ul>
        <button className={styles.btn_select}>{btn}</button>
      </div>
    </article>
  );
};

export default PricePackageCategory;
