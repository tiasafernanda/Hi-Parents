import React from 'react';
import styles from './assets/ActivityDetail.module.scss';
import { useState } from 'react';

export default function ActivityDetail() {
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  console.log('preview', preview);
  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreview(reader.result);
    };
    reader.onerror = () => {
      console.log('error on loading image');
    };
  };
  console.log('image', image);

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
              <input type='file' accept='image/*' onChange={(e) => handleImage(e)} />
              {preview ? <img src={preview} alt='preview' /> : null}
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
              <label>Activity</label>
              <input type='text' id='child name' name='child name' />
            </div>
            <br></br>
            <div className={styles.gender}>
              <label>Photo Activity</label>
              <input type='text' id='child name' name='child name' />
            </div>
          </div>
          <div>
            <div className={styles.birthPlace}>
              <label>Time</label>
              <input type='text' id='Time' name='Time' />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
