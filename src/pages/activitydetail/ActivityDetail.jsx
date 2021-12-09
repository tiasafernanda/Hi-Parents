import React from 'react';
import styles from './assets/ActivityDetail.module.scss';
import { useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import folder from './assets/img/folder_5.svg';
import { Link } from 'react-router-dom';
import { BiLeftArrowAlt } from 'react-icons/bi';

export default function ActivityDetail() {
  const [image, setImage] = useState();
  const [isUpload, setIsUpload] = useState(false);
  function handleImageChange(e) {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();

      reader.onload = function (e) {
        setImage(e.target.result);
        setIsUpload(true);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  }
  const [image1, setImage1] = useState();
  const [isUpload1, setIsUpload1] = useState(false);
  function handleImageChange1(e) {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();

      reader.onload = function (e) {
        setImage1(e.target.result);
        setIsUpload1(true);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  return (
    <div className={styles.containers}>
      <Link to='/dashboard/childactivity'>
        <BiLeftArrowAlt style={{ position: 'relative', top: '4px' }} />
        Child Activity Detail
      </Link>
      <div className={styles.container}>
        <h3>Child Information</h3>
        <hr />
        <form className={styles.form1}>
          <div className={styles.form1}>
            <fieldset>
              <legend className={styles.legend}>Children Name</legend>
              <input type='text' id='child' name='child' value='Vegeta Super' readonly='readonly' />
            </fieldset>

            <fieldset>
              <legend className={styles.legend}>Gender </legend>
              <input type='text' id='gender' name='gender' value='Male' readonly='readonly' />
            </fieldset>

            <div>
              <fieldset>
                <legend className={styles.legend}>Photo</legend>
                {/* <input type='file' accept='image/*' onChange={(e) => handleImage(e)} />
                {preview ? <img src={preview} alt='preview' /> : null} */}
                <div className={styles.image}>
                  <div className={styles.imageUpload}>
                    {!isUpload ? (
                      <>
                        <label htmlFor='upload-input'>
                          <img
                            src={folder}
                            draggable={'false'}
                            alt='placeholder'
                            style={{ width: '2rem' }}
                          />
                        </label>
                        <input
                          id='upload-input'
                          type='file'
                          accept='image/*'
                          onChange={handleImageChange}
                        />
                      </>
                    ) : (
                      <div className={styles.ImagePreview}>
                        <img
                          id={styles.uploadedImage}
                          src={image}
                          alt='uploaded-img'
                          onClick={() => {
                            setIsUpload(false);
                            setImage(null);
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
          <div className={styles.form2}>
            <fieldset>
              <legend className={styles.legend}>Birth Place</legend>
              <input type='text' id='birth' name='birth' value='Surabaya' readonly='readonly' />
            </fieldset>

            <fieldset>
              <legend className={styles.legend}>Birth Date</legend>
              <input
                type='text'
                id='birthdate'
                name='birthdate'
                value='16 November 1992'
                readonly='readonly'
              />
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
                {/* <input type='file' accept='image/*' onChange={(e) => handleImage1(e)} />
                {preview1 ? <img src={preview1} alt='preview' /> : null} */}
                <div className={styles.image}>
                  <div className={styles.imageUpload}>
                    {!isUpload1 ? (
                      <>
                        <label htmlFor='upload-input'>
                          <img
                            src={folder}
                            draggable={'false'}
                            alt='placeholder'
                            style={{ width: '2rem' }}
                          />
                        </label>
                        <input
                          id='upload-input'
                          type='file'
                          accept='image/*'
                          onChange={handleImageChange1}
                        />
                      </>
                    ) : (
                      <div className={styles.ImagePreview}>
                        <img
                          id={styles.uploadedImage}
                          src={image1}
                          alt='uploaded-img'
                          onClick={() => {
                            setIsUpload1(false);
                            setImage1(null);
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
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
