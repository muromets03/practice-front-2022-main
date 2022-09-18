import React from 'react';

import styles from '../PricePackage.module.scss';

const PricePackageInformationItem = ({ item }) => {
  return <li className={styles.information_item}>{item}</li>;
};

export default PricePackageInformationItem;
