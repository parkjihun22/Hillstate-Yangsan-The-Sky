import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./SalesInfo.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/SalesInfo/SubscriptionGuide/page1.jpg";

const ComplexGuide1 = () => {
  const menuContents = [
    { title: "공급안내", url: "/BusinessGuide/documents" },
    { title: "모집공고안내", url: "/SalesInfo/announcement" },
    { title: "계약서류안내", url: "/SalesInfo/guide" },
    // { title: "인지세납부안내", url: "/SalesInfo/stampTax" },
    // { title: "청약방법안내", url: "/SalesInfo/SubscriptionGuide" },

  ];

  const [isScroll, setIsScroll] = useState(false);
  const [isImage2Loaded, setIsImage2Loaded] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleImageLoad = () => {
    setIsImage2Loaded(true);
  };

  return (
    <div className={styles.container}>
      <Header isChanged={isScroll} />

      <FixIcon />

      <Bener title="서류안내" />

      <MenuBar contents={menuContents} />

      <div className={styles.textBox}>
        <div>모델하우스 방문 전 반드시 확인하세요</div>
        <div>힐스테이트 양산더스카이 체크포인트 안내</div>
      </div>

      {/* 이미지 로드 후 애니메이션 실행 */}
      <img
        className={`${styles.image2} ${
          isImage2Loaded ? styles.showImage2 : ""
        }`}
        src={page1}
        alt="힐스테이트 양산더스카이 청약제도 변경 안내"
        onLoad={handleImageLoad}
      />

      <div className={styles.commonBox2}>
        <div className={styles.notice}>
          ※ 상기 내용은 편집 과정에서 오류가 발생할 수 있으므로 반드시
          입주자모집공고 원문을 확인하시기 바랍니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ComplexGuide1;