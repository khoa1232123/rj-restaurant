import styles from '../styles/PizzaList.module.css';
import PizzaCard from './PizzaCard';
const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The Best pizza shop</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui incidunt
        vero iure! Obcaecati ut esse incidunt quae magni a consequatur
        necessitatibus blanditiis nisi, error illum maxime quaerat itaque
        doloribus cum!
      </p>
      <div className={styles.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
};

export default PizzaList;
