import React from 'react';
import styles from './assets/ActivityDetail.module.scss';

export default function ActivityDetail() {
  return (
    <div className={styles.containers}>
      <div className={styles.container}>
        <h3>Child Information</h3>
        <hr />
        <form className={styles.form1}>
          <div>
            <div className={styles.childName}>
              <label>Children Name</label>
              <input type='text' id='child name' name='child name' />
            </div>
            <br></br>
            <div className={styles.gender}>
              <label>Gender</label>
              <input type='text' id='child name' name='child name' />
            </div>
            <br></br>
            <div className={styles.photo}>
              <label>Photo</label>
              <input type='text' id='child name' name='child name' />
            </div>
          </div>
          <div>
            <div className={styles.birthPlace}>
              <label>Birth Place</label>
              <input type='text' id='child name' name='child name' />
            </div>
            <br></br>
            <div className={styles.birthDate}>
              <label>Birth Date</label>
              <input type='text' id='child name' name='child name' />
            </div>
          </div>
        </form>
        <h3>Child Information</h3>
        <hr />
        <form className={styles.form2}>
          <div>
            <div className={styles.childName}>
              <label>Children Name</label>
              <input type='text' id='child name' name='child name' />
            </div>
            <br></br>
            <div className={styles.gender}>
              <label>Gender</label>
              <input type='text' id='child name' name='child name' />
            </div>
            <br></br>
            <div className={styles.photo}>
              <label>Photo</label>
              <input type='text' id='child name' name='child name' />
            </div>
          </div>
          <div>
            <div className={styles.birthPlace}>
              <label>Birth Place</label>
              <input type='text' id='child name' name='child name' />
            </div>
            <br></br>
            <div className={styles.birthDate}>
              <label>Birth Date</label>
              <input type='text' id='child name' name='child name' />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
