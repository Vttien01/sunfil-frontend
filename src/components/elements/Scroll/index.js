import arrowRight from "src/assets/images/arowrightbtn1.png";
import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Scroll.module.scss";

const Scroll = ({ children, shadow }) => {
  const scrollBar = useRef(null);
  const buttonPre = useRef(null);
  const buttonNext = useRef(null);
  const handleLeftButton = () => {
    scrollBar.current.scrollLeft += -150;
    setWidth(scrollBar.current.scrollLeft);
  };
  const [width, setWidth] = useState(0);

  const handleRightButton = () => {
    scrollBar.current.scrollLeft += 150;
    setWidth(scrollBar.current.scrollLeft);
  };
  //   const handleScroll = useCallback(() => {
  //     setWidth(scrollBar.current.scrollLeft);

  //     if (scrollBar.current.scrollLeft > 0) {
  //       buttonPre.current.style.display = "flex";
  //     } else {
  //       buttonPre.current.style.display = "none";
  //     }

  //     if (
  //       scrollBar.current.scrollLeft <
  //       Math.floor(
  //         scrollBar.current.scrollWidth - 1 - scrollBar.current.clientWidth,
  //       )
  //     ) {
  //       buttonNext.current.style.display = "flex";
  //     } else {
  //       buttonNext.current.style.display = "none";
  //     }
  //   }, []);

  //   useEffect(() => {
  //     const div = scrollBar.current;
  //     if (scrollBar.current) {
  //       if (scrollBar.current.scrollLeft > 0) {
  //         buttonPre.current.style.display = "flex";
  //       } else {
  //         buttonPre.current.style.display = "none";
  //       }

  //       if (scrollBar.current.scrollWidth - scrollBar.current.clientWidth == 0) {
  //         buttonNext.current.style.display = "none";
  //       } else {
  //         buttonNext.current.style.display = "flex";
  //       }
  //     }

  //     div.addEventListener("scroll", handleScroll);
  //   }, [handleScroll, scrollBar.current?.scrollWidth]);

  return (
    <div className={styles.wrapper}>
      <button
        onClick={handleLeftButton}
        className={`${styles.button} ${styles.pre}`}
        refControl={buttonPre}
      >
        <img src={arrowRight} style={{ transform: "rotate(180deg)" }} />
      </button>

      <button
        onClick={handleRightButton}
        className={`${styles.button} ${styles.next}`}
        refControl={buttonNext}
      >
        <img src={arrowRight} />
      </button>
      <div
        className={styles.scrollMobile}
        style={shadow ? { padding: "10px 5px" } : { padding: "10px 0px" }}
        ref={scrollBar}
      >
        {children}
      </div>
    </div>
  );
};

export default Scroll;
