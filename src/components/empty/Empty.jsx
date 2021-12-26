// import { style } from '@mui/system';
import React from 'react';
import styles from './assets/Empty.module.scss';
import family from './assets/img/family.png';

export default function Empty(props) {
  const { dashboard } = props;
  return (
    <div className={styles.container}>
      <tr>
        <td colspan='5'>
          <div className={styles.noClient}>
            <img src={family} alt='' />
            <h5>{dashboard}</h5>
          </div>
        </td>
      </tr>
    </div>
  );
}
