import Image from 'next/image';
import { useState } from 'react';
import styles from '../../styles/Order.module.css';
const Order = () => {
  const status = 0;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tr className={styles.tr}>
              <th>Order Id</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr>
              <td>
                <span className={styles.id}>9283748923</span>
              </td>
              <td>
                <span className={styles.name}>John Doe</span>
              </td>
              <td>
                <span className={styles.address}>Canh nau City</span>
              </td>
              <td>
                <span className={styles.total}>$39.8</span>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src="/img/paid.png" alt="" width="30px" height="30px" />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <Image src="/img/checked.png" alt="" width="20px" height="20px" />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src="/img/bake.png" alt="" width="30px" height="30px" />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image src="/img/checked.png" alt="" width="20px" height="20px" />
            </div>
          </div>
          <div className={statusClass(0)}>
            <Image src="/img/bike.png" alt="" width="30px" height="30px" />
            <span>On the way</span>
            <div className={styles.checkedIcon}>
              <Image src="/img/checked.png" alt="" width="20px" height="20px" />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src="/img/delivered.png" alt="" width="30px" height="30px" />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              <Image src="/img/checked.png" alt="" width="20px" height="20px" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Cart Total</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$79.9
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$79.9
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$79.9
          </div>
          <button disabled className={styles.button}>
            Paid
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
