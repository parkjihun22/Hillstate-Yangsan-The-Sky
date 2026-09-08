import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FiSearch, FiX } from "react-icons/fi";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const locationMenu = [
  { title: "입지안내", url: "/LocationEnvironment/intro" },
  { title: "프리미엄", url: "/LocationEnvironment/primium" },
];

const locationSections = [
  {
    img: section2Image1,
    titleText: "도서관과 체육센터를 가까이 누리는<br />문화·체육 생활권",
    contentText:
      "양산시립중앙도서관과 양산중앙국민체육센터 인접<br />힐스테이트 양산더스카이에서 누리는 풍부한 문화·체육 인프라",
  },
  {
    img: section2Image2,
    titleText: "대형공원과 대학병원을 품은<br />쾌적한 생활환경",
    contentText:
      "산책과 여가를 즐길 수 있는 양산디자인공원<br />양산부산대학교병원을 가까이에서 이용하는 편리한 의료환경",
  },
  {
    img: section2Image3,
    titleText: "부산과 김해로 연결되는<br />광역교통망",
    contentText:
      "KTX 물금역과 물금IC, 남양산IC를 이용하는 광역교통<br />부산도시철도 2호선 증산역을 통한 편리한 부산 생활권",
  },
  {
    img: section2Image4,
    titleText: "공간의 가치를 높이는<br />특화 평면설계",
    contentText:
      "펜트하우스를 제외한 전 가구 판상형 4Bay 구조<br />2.4m 천장고와 거실 유리난간으로 완성되는 쾌적한 공간",
  },
  {
    img: section2Image5,
    titleText: "더 편리한 일상을 위한<br />스마트 라이프",
    contentText:
      "마이 힐스 앱을 통한 세대 내 IoT 제어와 주차 위치 확인<br />커뮤니티 예약과 출입문 진입을 지원하는 스마트 주거환경",
  },
  {
    img: section2Image6,
    titleText: "양산 물금에서 만나는<br />힐스테이트 브랜드 프리미엄",
    contentText:
      "1·2단지 총 8개동, 598세대 규모의 브랜드 주거단지<br />힐스테이트 양산더스카이가 새로운 주거 기준을 제시합니다.",
  },
];
const LocationEnvironment1 = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [zoomImage, setZoomImage] = useState(null);
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

  useEffect(() => {
    if (!zoomImage) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setZoomImage(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [zoomImage]);

  const openZoom = (src, alt) => {
    setZoomImage({ src, alt });
  };

  return (
    <div className={styles.container}>
      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="입지환경" />
      <MenuBar contents={locationMenu} />

      <div className={styles.textBox}>
  <div>삼성 평택캠퍼스와 함께 성장하는</div>
  <div>고덕국제신도시 프리미엄 라이프</div>
  <div>힐스테이트 양산더스카이가 새로운 주거 가치를 완성합니다.</div>
</div>
      <figure className={styles.locationMapFrame}>
        <img
          src={page1}
          className={styles.image2}
          alt="힐스테이트 양산더스카이 입지환경과 생활권 안내 이미지"
        />
        <button
          type="button"
          className={styles.zoomButton}
          onClick={() =>
            openZoom(
              page1,
              "힐스테이트 양산더스카이 입지환경과 생활권 안내 이미지"
            )
          }
          aria-label="입지환경 이미지 크게 보기"
        >
          <FiSearch />
          <span>크게 보기</span>
        </button>
      </figure>

      <div className={styles.section2}>
        {locationSections.map((value) => (
          <LocationSectionBox
            key={value.titleText}
            image={value.img}
            title={value.titleText}
            text={value.contentText}
            onZoom={() =>
              openZoom(
                value.img,
                `힐스테이트 양산더스카이 ${value.titleText.replace(/<[^>]*>/g, " ")} 이미지`
              )
            }
          />
        ))}
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          본 홍보물의 내용과 이미지는 소비자의 이해를 돕기 위한 것으로, 개발 예정 및 교통,
          학교 계획 등에 관한 사항은 해당 기관의 자료를 토대로 제작되었습니다. 사업계획 및
          일정은 관계 기관과 사업 주체의 사정에 따라 변경될 수 있으며, 자세한 내용은
          입주자모집공고와 관계 기관의 최종 고시를 확인하시기 바랍니다.
        </div>
      </div>

      {zoomImage && (
        <div
          className={styles.zoomModal}
          role="dialog"
          aria-modal="true"
          aria-label="이미지 확대 보기"
          onClick={() => setZoomImage(null)}
        >
          <div className={styles.zoomModalInner} onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className={styles.zoomClose}
              onClick={() => setZoomImage(null)}
              aria-label="확대 이미지 닫기"
            >
              <FiX />
            </button>
            <img src={zoomImage.src} alt={zoomImage.alt} />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
