import Image from 'next/image';
import styles from '../styles/Featured.module.css';

const Featured = () => {
  const images = ['img/featured.png', 'img/featured2.png', 'img/featured3.png'];
  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer}>
        <Image src="/img/arrowl.png" alt="" width={'32'} height={'32'} />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          <Image src="/img/featured.png" alt="" width={'32'} height={'32'} />
        </div>
      </div>
      <div className={styles.arrowContainer}>
        <Image src="/img/arrowr.png" alt="" width={'32'} height={'32'} />
      </div>
    </div>
  );
};

export default Featured;
