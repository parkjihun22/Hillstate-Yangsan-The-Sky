// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect, useRef } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>사업명</strong>
          <span>힐스테이트 양산더스카이</span>
        </li>

        <li>
          <strong>대지위치</strong>
          <span>
            1단지 경상남도 양산시 물금읍 가촌리 971번지 일원
            <br />
            2단지 경상남도 양산시 물금읍 범어리 940-2번지 일원
          </span>
        </li>

        <li>
          <strong>단지규모</strong>
          <span>
            1단지 지하 4층~지상 20층, 4개동, 299세대
            <br />
            2단지 지하 3층~지상 20층, 4개동, 299세대
          </span>
        </li>

        <li>
          <strong>총 세대수</strong>
          <span>총 8개동, 598세대</span>
        </li>

        <li>
          <strong>주택형</strong>
          <span>전용 68㎡ · 84㎡ · 159㎡</span>
        </li>

        <li>
          <strong>입주예정</strong>
          <span>2029년 4월 예정</span>
        </li>

        <li>
          <strong>시행수탁</strong>
          <span>㈜무궁화신탁</span>
        </li>

        <li>
          <strong>시행위탁</strong>
          <span>㈜코윈</span>
        </li>

        <li>
          <strong>시공</strong>
          <span>현대건설㈜</span>
        </li>
      </ul>
    ),
  },
{
  key: "location",
  label: "입지환경",
  content: (
    <div className={styles.mapGrid}>
      <img
        src={mobileMap}
        className={styles.mapImage}
        alt="힐스테이트 양산더스카이 입지환경"
      />
      <img
        src={mobileMap2}
        className={styles.mapImage}
        alt="힐스테이트 양산더스카이 생활권"
      />
    </div>
  ),
},
{
  key: "premium",
  label: "프리미엄",
  content: (
    <>
      {/* 프리미엄 섹션 상단 문단 */}
      <div className={styles.premiumIntro}>
        <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>

        <p className={styles.premiumSubtitle}>
          양산 주거의 새로운 기준을 선보이는
          <br />
          힐스테이트 양산더스카이 프리미엄 라이프
        </p>
      </div>

      {/* 슬라이더 */}
      <PremiumSlider />
    </>
  ),
},
];

function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "도서관과 체육센터를 가까이 누리는 생활",
      desc:
        "양산시립중앙도서관을 가까이에서 이용하는 문화생활<br/>수영장·볼링장·골프연습장·헬스장을 갖춘 양산중앙국민체육센터<br/>일상 가까이에서 누리는 풍부한 문화·체육 인프라",
    },
    {
      img: slide2,
      title: "대형공원과 대학병원을 품은 생활환경",
      desc:
        "산책과 여가를 즐길 수 있는 양산디자인공원<br/>전문적인 의료서비스를 제공하는 양산부산대학교병원<br/>자연과 건강을 함께 누릴 수 있는 쾌적한 생활환경",
    },
    {
      img: slide3,
      title: "부산과 김해를 연결하는 광역교통망",
      desc:
        "KTX 물금역을 이용할 수 있는 광역 철도교통<br/>물금IC와 남양산IC를 통한 편리한 차량 이동<br/>부산도시철도 2호선 증산역을 이용하는 부산 생활권",
    },
    {
      img: slide4,
      title: "생활의 품격을 높이는 특화 평면설계",
      desc:
        "펜트하우스를 제외한 전 가구 판상형 4Bay 구조<br/>드레스룸과 팬트리 또는 알파룸을 활용한 수납공간<br/>2.4m 천장고와 거실 유리난간이 선사하는 개방감",
    },
    {
      img: slide5,
      title: "더 편리한 일상을 위한 스마트 라이프",
      desc:
        "마이 힐스 앱을 통한 세대 내 IoT 기기 제어<br/>출입문 진입과 주차 위치 확인, 커뮤니티 예약 지원<br/>현대건설의 H 사일런트 홈 층간소음 저감 기술 적용",
    },
    {
      img: slide6,
      title: "현대건설 힐스테이트 브랜드 프리미엄",
      desc:
        "1·2단지 총 8개동, 598세대 규모의 브랜드 단지<br/>전용 68㎡·84㎡·159㎡로 구성된 다양한 주거공간<br/>양산 물금에서 만나는 힐스테이트 양산더스카이",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const itemRefs = useRef({});

  const toggle = (key) => {
    setOpenKey((prevKey) => (prevKey === key ? null : key));

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const targetItem = itemRefs.current[key];
        if (!targetItem) return;

        const fixedHeaderOffset = 96;
        const targetTop =
          window.scrollY + targetItem.getBoundingClientRect().top - fixedHeaderOffset;

        window.scrollTo({
          top: Math.max(targetTop, 0),
          behavior: "auto",
        });
      });
    });
  };

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
      <div className={styles.preTitle}>힐스테이트 양산더스카이</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      <img src={heroImage} className={styles.heroImage} alt="힐스테이트 양산더스카이 히어로 메인사진" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div
          key={key}
          className={styles.accordionItem}
          ref={(node) => {
            itemRefs.current[key] = node;
          }}
        >
          <button
            type="button"
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
            aria-expanded={openKey === key}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
