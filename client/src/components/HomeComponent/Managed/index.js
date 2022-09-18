import React from 'react';
import CONSTANTS from '../../../constants';
//import styles from '../../../pages/Home/Home.module.sass';
import styles from './Managed.module.sass';
import data from './managed.json';

const Managed = () => {
  return (
    <div className={styles.container__description}>
      <h2 className={styles.header}>Managed Contests</h2>
      <h3 className={styles.heading}>A Naming Agency Experience (minus the Agency-level price tag)</h3>
      <p className={styles.paragraph}>
        Our hybrid-solution partners you with a trained Squadhelp branding
        consultant who will guide your crowdsourcing process step-by-step to get
        the best results possible.
      </p>

      <div className={styles.cardContainer}>
        {data.map(({ id, img, alt, heading, content }) => (
          <div className={styles.card} key={id}>
            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}${img}`} alt={alt} />

            <h3>{heading}</h3>
            <p>{content}</p>
          </div>
        ))}
      </div>
      <button className={styles.btn_managed}> Learn More About Managed Contests</button>
    </div>
  );
};

export default Managed;
