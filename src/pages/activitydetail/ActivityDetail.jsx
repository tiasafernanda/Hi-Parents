import React from 'react';
import styles from './assets/ActivityDetail.module.scss';
import { useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';

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
  const [image1, setImage1] = useState();
  const [preview1, setPreview1] = useState();
  console.log('preview', preview1);
  const handleImage1 = (e) => {
    const file = e.target.files[0];
    setImage1(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreview1(reader.result);
    };
    reader.onerror = () => {
      console.log('error on loading image');
    };
  };
  console.log('image', image1);

  return (
    <div className={styles.containers}>
      <div className={styles.container}>
        <h3>Child Information</h3>
        <hr />
        <form className={styles.form1}>
          <div className={styles.form1}>
            <fieldset>
              <legend className={styles.legend}>Children Name</legend>
              <input type='text' />
            </fieldset>
            <br></br>
            <fieldset>
              <legend className={styles.legend}>Gender </legend>
              <select name='gender'>
                <option value=''>Select Gender</option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
              </select>
            </fieldset>
            <br></br>
            <div>
              <fieldset>
                <legend className={styles.legend}>Photo</legend>
                <input type='file' accept='image/*' onChange={(e) => handleImage(e)} />
                {preview ? <img src={preview} alt='preview' /> : null}
              </fieldset>
            </div>
          </div>
          <div className={styles.form2}>
            <fieldset>
              <legend className={styles.legend}>Birth Place</legend>
              <input type='text' />
            </fieldset>

            <fieldset>
              <legend className={styles.legend}>Birth Date</legend>
              <input type='text' />
            </fieldset>
          </div>
        </form>
        <h3>Child Activity</h3>
        <hr />
        <form className={styles.form2}>
          <div className={styles.form1}>
            <fieldset>
              <legend className={styles.legend}>Activity</legend>
              <input type='text' />
            </fieldset>
            <div>
              <fieldset>
                <legend className={styles.legend}>Photo</legend>
                <input type='file' accept='image/*' onChange={(e) => handleImage1(e)} />
                {preview1 ? <img src={preview1} alt='preview' /> : null}
              </fieldset>
            </div>
          </div>
          <div className={styles.form2}>
            <fieldset>
              <legend className={styles.legend}>Time</legend>
              <input type='text' />
            </fieldset>
          </div>
        </form>
        <button className={styles.add}>
          <AiOutlinePlusCircle style={{ position: 'relative', color: '#10B278', top: '2px' }} />
          {''} Add Activity
        </button>
      </div>
      <div className={styles.modify}>
        <button
          style={{
            padding: '0.5rem 4rem',
            backgroundColor: '#F67979',
            border: 'none',
            borderRadius: '40px',
            color: 'white',
            marginRight: '1rem',
          }}
        >
          Cancel
        </button>
        <button
          style={{
            padding: '0.5rem 4rem',
            backgroundColor: '#10B278',
            border: 'none',
            borderRadius: '40px',
            color: 'white',
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}
