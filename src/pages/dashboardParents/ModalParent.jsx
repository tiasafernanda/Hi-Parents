import styles from "./assets/ModalParent.module.scss";
import image from "./assets/img/modalParent.png";

export default function ModalParent() {
  return (
    <div className={styles.modal}>
      <div className={styles.header}>
        <img src={image} alt="" />
        <h4>Complete your registration now</h4>
        <p>Once you have completed the form, you can start our service</p>

        <div>
          <button className={styles.yes}>OK</button>
        </div>
      </div>
    </div>
  );
}
