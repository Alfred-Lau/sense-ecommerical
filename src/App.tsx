import React from "react";

import styles from "./App.module.scss";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Product from "./components/Product";
import Footer from "./components/Footer";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Banner />
      <Product />
      <Product />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
