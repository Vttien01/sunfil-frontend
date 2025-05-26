import React, { useEffect, useState } from "react";
import arrowRight from "src/assets/images/arowrightbtn1.png";
import cameraImg from "src/assets/images/camera.png";
import cartImg from "src/assets/images/Cart.png";
import countryImg from "src/assets/images/country.png";
import downloadImg from "src/assets/images/download.png";
import freeshipImg from "src/assets/images/freeship.png";
import groupImg from "src/assets/images/Group.png";
import left from "src/assets/images/Left.png";
import logoImg from "src/assets/images/logo.png";
import menuImg from "src/assets/images/menu.png";
import phoneImg from "src/assets/images/phone.png";
import saleImg from "src/assets/images/sale.png";
import searchImg from "src/assets/images/search.png";
import subtractImg from "src/assets/images/Subtract.png";
import supportImg from "src/assets/images/support.png";
import truckImg from "src/assets/images/truck.png";
import userImg from "src/assets/images/user.png";
import strokeImg from "src/assets/images/stroke.png";
import Flex from "src/components/elements/Flex";
import { dataProduct } from "src/modules/homePage/data";
import { formatCurrency } from "src/utils";
import "./AppHeader.css";
import styles from "./AppHeader.module.scss";
import { dataCategory, dataChild } from "./dataCategory";

const AppHeader = () => {
  const [hoverItem, setHoverItem] = useState(false);
  const [selectCategoryId, setSelectCategoryId] = useState(1);
  const [data, setData] = useState([]);
  const handleMouseEnter = () => {
    setHoverItem(true);
  };

  const handleMouseLeave = () => {
    setHoverItem(false);
  };
  const handleSelectCategory = (categoryId) => {
    const data = dataProduct.filter((item) => item.categoryId == categoryId);
    setData(data);
    setSelectCategoryId(categoryId);
  };
  useEffect(() => {
    handleSelectCategory(1);
  }, []);
  return (
    <header className="container">
      <div className="header-top">
        <Flex gap={"8px"} align={"center"} style={{ flex: 1 }}>
          <img src={saleImg} alt="default" />
          <span className="top-left">
            Nhập mã{" "}
            <span style={{ color: "yellow", fontWeight: 500 }}>NEWBIE</span>{" "}
            giảm ngay 10% cho lần đầu mua hàng.
          </span>
        </Flex>
        <Flex gap={"8px"} align={"center"}>
          <img src={phoneImg} alt="default" />
          <span className="top-left">Hotline:</span>
          <span style={{ color: "yellow", fontWeight: 500 }}>
            0283 760 7607{" "}
          </span>{" "}
        </Flex>
        <Flex gap={"8px"} align={"center"}>
          <img src={downloadImg} alt="default" />
          <span className="top-left">Tải ứng dụng</span>
        </Flex>
      </div>
      <div className="app-header">
        <div className="header-main">
          <div className="logo">
            <img src={logoImg} alt="Sunfil Logo" />
          </div>
          <div className="search-bar" style={{ flex: 1 }}>
            <input type="text" placeholder="Tìm sản phẩm" />
            <img src={cameraImg} alt="Sunfil Logo" />
            <button className="search-button">
              <img src={searchImg} alt="Sunfil Logo" />
            </button>
          </div>
          <div className="nav-icons">
            <button className="nav-icon">
              <img src={countryImg} alt="Sunfil Logo" />
              <span>VI</span>
            </button>
            <button className="nav-icon">
              <img src={cartImg} alt="Sunfil Logo" />
              <span>Giỏ hàng</span>
            </button>
            <button className="nav-icon">
              <img src={userImg} alt="Sunfil Logo" />
              <span>Tài khoản</span>
            </button>
          </div>
        </div>
        <nav className="header-nav">
          <button
            className="nav-button-product"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={menuImg} alt="Sunfil Logo" />
            Danh mục sản phẩm
            <img src={groupImg} alt="Sunfil Logo" style={{ marginLeft: 4 }} />
            {hoverItem && (
              <div className={styles.categoryHover}>
                <div className={styles.filter}>
                  {dataCategory.map((item) => (
                    <div
                      className={styles.category}
                      key={item.id}
                      onMouseEnter={() => handleSelectCategory(item.id)}
                      onMouseLeave={() => handleSelectCategory(1)}
                      data-active={selectCategoryId == item.id}
                    >
                      <div className={styles.title}>
                        <img src={item.image} alt="" />
                        <span style={{ width: 150, textAlign: "start" }}>
                          {item.name}
                        </span>
                        <img src={arrowRight} alt="" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className={styles.listProduct}>
                  <div className={styles.headerProduct}>
                    {dataChild.map((item) => (
                      <div className={styles.box} key={item.id}>
                        <img src={item.image} alt="" />
                        {item.name}
                      </div>
                    ))}
                  </div>
                  <div className={styles.headerItem}>
                    <span>Sản phẩm bán chạy</span>
                    <div>
                      Sản phẩm bán chạy
                      <img src={strokeImg} alt="" />
                    </div>
                  </div>
                  <div className={styles.listItem}>
                    {data.map((item) => (
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
                          <span className={styles.percent}>
                            -{item.saleOff}%
                          </span>
                        </Flex>
                        <button>Mua ngay</button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </button>
          <Flex gap={"8px"} style={{ flex: 1 }}>
            <button className="nav-button">Về Chúng tôi</button>
            <button className="nav-button">Bài viết</button>
            <button className="nav-button">Catalog</button>
            <button className="nav-button">Liên hệ</button>
          </Flex>
          <Flex gap={"8px"}>
            <button className="nav-button">
              <img src={supportImg} alt="Sunfil Logo" />
              Hỗ trợ 24/7
            </button>
            <button className="nav-button">
              <img src={freeshipImg} alt="Sunfil Logo" />
              Miễn phí vận chuyển
            </button>
            <button className="nav-button">
              <img src={truckImg} alt="Sunfil Logo" />
              Giao hàng trong 2h
            </button>
            <button className="nav-button">
              <img src={subtractImg} alt="Sunfil Logo" />
              30 Ngày Đổi trả
            </button>
          </Flex>
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;
