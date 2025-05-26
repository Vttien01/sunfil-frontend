import React from "react";

import ArrowUp from "src/assets/images/ArrowUp.png";
import filterImg from "src/assets/images/filter.png";
import Checkbox from "src/components/elements/Checkbox";
import { formatCurrency } from "src/utils";
import styles from "./Filter.module.scss";

const Filter = () => {
  return (
    <div className={styles.filter}>
      <div className={styles.element}>
        <img src={filterImg} alt="" />
        Bộ lọc
      </div>
      <div className={styles.category}>
        <div className={styles.title}>
          <span>Danh mục sản phẩm</span>
          <img src={ArrowUp} alt="" />
        </div>
        <Checkbox
          label={
            <span style={{ fontSize: 14 }}>
              Lọc gió Động cơ - Air Filter(24)
            </span>
          }
        />
        <Checkbox
          label={
            <span style={{ fontSize: 14 }}>
              Lọc nhiêu liệu - Fuel Filter(24)
            </span>
          }
        />
        <Checkbox label={<span style={{ fontSize: 14 }}>Bộ lọc dầu</span>} />
        <Checkbox
          label={<span style={{ fontSize: 14 }}>Chưa phân loại</span>}
        />
      </div>
      <div className={styles.category}>
        <div className={styles.title}>
          <span>Khoảng giá</span>
          <img src={ArrowUp} alt="" />
        </div>
        <div className={styles.price}>{formatCurrency(100000)}</div>
        <div className={styles.price}>
          {formatCurrency(100000)} - {formatCurrency(300000)}
        </div>
        <div className={styles.price}>
          {formatCurrency(300000)} - {formatCurrency(500000)}
        </div>
        <div className={styles.price}>Trên {formatCurrency(500000)}</div>
      </div>
      <div className={styles.category}>
        <div className={styles.title}>
          <span>Thương hiệu</span>
          <img src={ArrowUp} alt="" />
        </div>
        <Checkbox label={<span style={{ fontSize: 14 }}>Asakashi(24)</span>} />
        <Checkbox label={<span style={{ fontSize: 14 }}>Bosch(24)</span>} />
        <Checkbox label={<span style={{ fontSize: 14 }}>Huyndai</span>} />
      </div>
      <div className={styles.category}>
        <div className={styles.title}>
          <span>Nơi sản xuất</span>
          <img src={ArrowUp} alt="" />
        </div>
        <Checkbox label={<span style={{ fontSize: 14 }}>2021</span>} />
        <Checkbox label={<span style={{ fontSize: 14 }}>2020</span>} />
        <Checkbox label={<span style={{ fontSize: 14 }}>2019</span>} />
        <Checkbox label={<span style={{ fontSize: 14 }}>2018</span>} />
      </div>
      <div className={styles.category}>
        <div className={styles.title}>
          <span>Xuất xứ</span>
          <img src={ArrowUp} alt="" />
        </div>
        <Checkbox label={<span style={{ fontSize: 14 }}>Đức(24)</span>} />
        <Checkbox label={<span style={{ fontSize: 14 }}>Nhật Bản(24)</span>} />
        <Checkbox label={<span style={{ fontSize: 14 }}>Trung Quốc</span>} />
      </div>
    </div>
  );
};

export default Filter;
