import React from "react";

import styles from "./App.module.scss";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Product from "./components/Product";
import Footer from "./components/Footer";

import {
  productList2,
  productList1,
  productList3,
} from "./mocks/home/products";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Banner />
      <Product products={productList1} title={"国内热门"} />
      <Product products={productList2} title={"国际热门"} />
      <Product products={productList3} title={"旅行套餐"} />
      <Footer />
    </div>
  );
}

export default App;
