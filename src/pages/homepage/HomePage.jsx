import React from 'react';
import styles from './assets/HomePage.module.scss';
import intro1 from './assets/img/intro1.jpg';
import intro2 from './assets/img/intro2.jpg';
import playstore from './assets/img/playstore.png';
import appstore from './assets/img/appstore.png';
import higreen from './assets/img/higreen.png';
import hiwhite from './assets/img/hiwhite.png';
import facebook from './assets/img/facebook.png';
import twitter from './assets/img/twitter.png';
import instagram from './assets/img/instagram.png';
import youtube from './assets/img/youtube.png';
// import left from './assets/img/left.png';
// import right from './assets/img/right.png';

export default function HomePage() {
  return (
    <div>
      <div className={styles.navbar}>
        <p>Contact us on 083849420146 or iraziqony@gmail.com</p>
        <div className={styles.auth}>
          <a href='x'>Register</a>
          <a href='x'>Login</a>
        </div>
      </div>
      <div className={styles.header}>
        <img src={higreen} alt='' />
        <div className={styles.headerLinks}>
          <a href='x'>Home</a>
          <a href='x'>About Us</a>
          <a href='x'>Facilities</a>
        </div>
      </div>
      <div className={styles.hero}>
        {/* <img src={hero} alt='' /> */}
        <div className={styles.heroText}>
          <p>We Bring Happiness!</p>
          <h3>Give Your Kid The Best</h3>
          <h3>Care and Happiness!</h3>
        </div>
      </div>
      <div className={styles.about}>
        <div className={styles.location}>
          <h4>Location</h4>
          <p>Indonesia</p>
          <p>Jl. Planet Namek No. 123</p>
          <p>Jawa Timur, Surabaya</p>
        </div>
        <div className={styles.operation}>
          <h4>Hours of Operation</h4>
          <p>Open from 8AM to 7PM,</p>
          <p>Monday through Friday. 6 different programs are</p>
          <p>available for all age groups</p>
        </div>
      </div>
      <div className={styles.intro}>
        <div className={styles.intro1}>
          <img src={intro1} alt='' />
          <div className={styles.introText1}>
            <h1>Welcome to Hi-Parents!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est in neque aliquet vitae
              turpis amet, urna netus sed. Eu semper eu neque, massa pharetra orci fusce ac..{' '}
            </p>
            <a href='x'>Register</a>
          </div>
        </div>
        <div className={styles.intro2}>
          <div className={styles.introText2}>
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est in neque aliquet vitae
              turpis amet, urna netus sed. Eu semper eu neque, massa pharetra orci fusce ac..{' '}
            </p>
            <a href='x'>Login</a>
          </div>
          <img src={intro2} alt='' />
        </div>
      </div>
      <div className={styles.downloadMe}>
        <h3>Download Hi-Parents Now</h3>
        <p>Hi-Parents now available on every platform, lets love our children with care!</p>
        <div className={styles.download}>
          <a href='#x'>
            <img src={playstore} alt='' />
          </a>
          <a href='#x'>
            <img src={appstore} alt='' />
          </a>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.grid}>
          <div className={styles.logosocials}>
            <div className={styles.logo}>
              <img src={hiwhite} alt='' />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est in neque aliquet vitae
                turpis amet, urna netus sed. Eu semper eu neque, massa pharetra orci fusce ac.
              </p>
              <div className={styles.socials}>
                <img src={facebook} alt='' />
                <img src={instagram} alt='' />
                <img src={twitter} alt='' />
                <img src={youtube} alt='' />
              </div>
            </div>
          </div>
          <div className={styles.footerLinks}>
            <h5>Links</h5>
            <a href='x'>Home</a>
            <a href='x'>About</a>
          </div>
          <div className={styles.footerContact}>
            <h5>Contact Us</h5>
            <p>Indonesia</p>
            <p>Jl. Planet Namek No. 123, Surabaya</p>
            <p>Telp : 083849420146</p>
            <p>Email : vegeta@dragonball.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
