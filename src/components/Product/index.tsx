import { FC, ReactNode } from "react";
import styles from "./index.module.scss";

export type ProductCardProps = {
  title: string | ReactNode;
  products: any[];
};

const Product: FC = (props) => {
  return (
    <div className={styles.product}>
      <div className={styles.container}>
        <div className={styles.title}>title</div>
        <div className={styles.content}>content</div>
      </div>
    </div>
  );
};

export default Product;
