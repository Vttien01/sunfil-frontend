import React from "react";

import arrowRight from "src/assets/images/arowrightbtn1.png";
import bannerImg from "src/assets/images/banner.png";
import left from "src/assets/images/Left.png";
import Flex from "src/components/elements/Flex";
import Scroll from "src/components/elements/Scroll";
import { formatCurrency } from "src/utils";
import { dataProduct } from "./data";
import Filter from "./Filter";
import styles from "./index.module.scss";
import ListProduct from "./ListProduct";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.breadcrums}>
        <span>Trang chủ</span>
        <img src={arrowRight} alt="" />
        <span className={styles.name}>Sản phẩm</span>
      </div>
      <img src={bannerImg} alt="" />
      <div className={styles.carousel}>
        <Scroll height="270px" shadow={true}>
          {dataProduct?.map((item) => {
            return (
              <div className={styles.item} key={item.id}>
                <img src={item.image} alt="" />
                <span className={styles.shocking}>
                  <img src={left} alt="" />
                  Giá cực sốc
                </span>
                <span className={styles.name}>{item.name}</span>
                <span className={styles.price}>
                  {formatCurrency(item.price)}
                </span>
                <Flex gap={"8px"}>
                  <span className={styles.salePrice}>
                    {formatCurrency(
                      item.price - (item.price * item.saleOff) / 100,
                    )}
                  </span>
                  <span className={styles.percent}>-{item.saleOff}%</span>
                </Flex>
                <button>Mua ngay</button>
              </div>
            );
          })}
        </Scroll>
      </div>
      <div className={styles.content}>
        <Filter />
        <ListProduct />
      </div>
    </div>
  );
};

export default HomePage;
