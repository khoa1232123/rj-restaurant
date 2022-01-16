import Image from 'next/image';
import styles from '../styles/Footer.module.css';
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            Lorem ipsum dolor sit amet consectetur
          </h2>
        </div>
        <div className={styles.card}>
          <div className={styles.title}>Find Our Restaurant</div>
          <p className={styles.text}>
            Thôn 2, Canh Nậu, Thạch Thất
            <br /> Hà Nội, Việt Nam
            <br /> (+84)0364279330
          </p>
          <p className={styles.text}>
            Thôn 3, Canh Nậu, Thạch Thất
            <br /> Hà Nội, Việt Nam
            <br /> (+84)0364279330
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.title}>Working Hours</div>
          <p className={styles.text}>
            Monday until Friday
            <br />
            8:00 - 20:00
          </p>
          <p className={styles.text}>
            Saturday - Sunday
            <br />
            10:00 - 22:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
