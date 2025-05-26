import React, { useEffect, useRef, useState } from "react";

import styles from "./index.module.scss";
import bannerImg from "src/assets/images/banner.png";
import filterImg from "src/assets/images/filter.png";
import ArrowUp from "src/assets/images/ArrowUp.png";
import groupImg from "src/assets/images/group1.png";
import { dataProduct } from "./data";
import Flex from "src/components/elements/Flex";
import Checkbox from "src/components/elements/Checkbox";
import { formatCurrency } from "src/utils";
import classNames from "classnames";
import Scroll from "src/components/elements/Scroll";
import arrowRight from "src/assets/images/arowrightbtn1.png";
import left from "src/assets/images/Left.png";
import Filter from "./Filter";

const HomePage = () => {
  const [visibleItems, setVisibleItems] = useState(12);
  const [isLoading, setIsLoading] = useState(false); // Trạng thái loading
  const listRef = useRef(null); // Tham chiếu đến container

  // Hàm tải thêm item
  const loadMoreItems = () => {
    if (isLoading || visibleItems >= dataProduct.length) return;

    setIsLoading(true);
    setTimeout(() => {
      setVisibleItems((prev) => Math.min(prev + 4, dataProduct.length)); // Tải thêm 4 item
      setIsLoading(false);
    }, 1000); // Giả lập thời gian tải 1 giây
  };

  // Phát hiện khi cuộn đến cuối trang
  useEffect(() => {
    const handleScroll = () => {
      if (listRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = listRef.current;
        if (scrollHeight - scrollTop - clientHeight < 100 && !isLoading) {
          loadMoreItems();
        }
      }
    };

    const currentRef = listRef.current;
    currentRef.addEventListener("scroll", handleScroll);

    return () => currentRef.removeEventListener("scroll", handleScroll);
  }, [isLoading]);
  return (
    <div className={styles.container} ref={listRef}>
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
        <div className={styles.listProduct}>
          <div className={styles.headerProduct}>
            <span className={styles.title}>Danh sách sản phẩm</span>
            <span className={styles.filterText}>Sắp xếp theo</span>
            <div className={classNames(styles.box, styles.hightlight)}>
              Liên quan
            </div>
            <div className={styles.box}>Bán chạy</div>
            <div className={styles.box}>Mới nhất</div>
            <div className={styles.box}>Nổi bật</div>
            <div className={styles.select}>
              Giá thấp - cao
              <img src={groupImg} alt="" style={{ width: 16, marginLeft: 4 }} />
            </div>
          </div>
          <div className={styles.listItem}>
            {dataProduct.slice(0, visibleItems).map((item) => {
              return (
                <div className={styles.item}>
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
            {isLoading && <p className={styles.loading}>Đang tải...</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
