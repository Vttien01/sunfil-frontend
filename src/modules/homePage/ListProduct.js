import React, { useEffect, useRef, useState } from "react";

import styles from "./index.module.scss";
import bannerImg from "src/assets/images/banner.png";
import filterImg from "src/assets/images/filter.png";
import loadingGif from "src/assets/images/loading.gif";
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

const ListProduct = () => {
  const [visibleItems, setVisibleItems] = useState(15); // Ban đầu hiển thị 12 item
  const [isLoading, setIsLoading] = useState(false); // Trạng thái loading
  const observerRef = useRef(null); // Tham chiếu đến phần tử cuối cùng để observe

  // Hàm tải thêm item
  const loadMoreItems = () => {
    if (isLoading || visibleItems >= dataProduct.length) return;

    setIsLoading(true);
    setTimeout(() => {
      setVisibleItems((prev) => Math.min(prev + 5, dataProduct.length)); // Tải thêm 4 item
      setIsLoading(false);
    }, 1000); // Giả lập thời gian tải 1 giây
  };

  // Thiết lập Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          loadMoreItems();
        }
      },
      { threshold: 1 }, // Kích hoạt khi 50% phần tử cuối cùng xuất hiện trong viewport
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [isLoading, visibleItems]);
  return (
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
        {dataProduct.slice(0, visibleItems).map((item, index) => {
          return (
            <div className={styles.item}>
              <img src={item.image} alt="" />
              <span className={styles.shocking}>
                <img src={left} alt="" />
                Giá cực sốc
              </span>
              <span className={styles.name}>{item.name}</span>
              <span className={styles.price}>{formatCurrency(item.price)}</span>
              <Flex gap={"8px"}>
                <span className={styles.salePrice}>
                  {formatCurrency(
                    item.price - (item.price * item.saleOff) / 100,
                  )}
                </span>
                <span className={styles.percent}>-{item.saleOff}%</span>
              </Flex>
              <button>Mua ngay</button>
              {index === visibleItems - 1 && (
                <div ref={observerRef} style={{ height: 10 }} />
              )}
            </div>
          );
        })}
      </div>
      {isLoading && (
        <div className={styles.loading}>
          <img src={loadingGif} alt="" />
        </div>
      )}
    </div>
  );
};

export default ListProduct;
