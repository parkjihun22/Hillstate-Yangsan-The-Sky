import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title = "힐스테이트 양산더스카이" }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="힐스테이트 양산더스카이 배너이미지"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <h1
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </h1>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
  const normalizedText = text.replace(/\s/g, "");

  const brandTitles = [
    "홍보영상",
    "브랜드소개",
    "힐스테이트양산더스카이",
  ];

  const businessTitles = [
    "사업개요",
    "사업안내",
    "분양일정",
    "분양안내",
    "입주자모집공고",
    "공급안내",
    "계약서류안내",
  ];

  const locationTitles = [
    "입지환경",
    "입지안내",
    "프리미엄",
  ];

  const complexTitles = [
    "단지안내",
    "단지설계",
    "단지배치도",
    "호수배치도",
    "동·호수배치도",
    "커뮤니티",
  ];

  const unitTitles = [
    "세대안내",
    "세대안내영상",
    "타입안내",
    "68A㎡평면도",
    "84A㎡평면도",
    "84B㎡평면도",
    "84C㎡평면도",
    "159P㎡평면도",
    "E-모델하우스",
    "인테리어",
  ];

  const promotionTitles = [
    "홍보센터",
    "언론보도",
    "관심고객등록",
    "방문예약등록",
  ];

  if (brandTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          힐스테이트 양산더스카이가 선보이는 새로운 브랜드 주거 가치를
          만나보세요.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          경상남도 양산시 물금읍에 조성되는 1·2단지 총 598세대 규모의
          힐스테이트 브랜드 단지입니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          현대건설 힐스테이트의 브랜드 가치와 차별화된 주거 설계를
          한곳에서 확인하실 수 있습니다.
        </div>
      </>
    );
  } else if (businessTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          힐스테이트 양산더스카이의 사업개요와 분양 정보를 안내합니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          1단지는 양산시 물금읍 가촌리 971번지, 2단지는 범어리
          940-2번지 일원에 조성됩니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          1·2단지 각각 299세대, 총 598세대 규모이며 전용
          68㎡·84㎡·159㎡ 타입으로 구성됩니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          분양일정, 공급안내, 입주자모집공고와 계약 관련 정보를
          한곳에서 확인하실 수 있습니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          힐스테이트 양산더스카이
        </div>
      </>
    );
  } else if (
    unitTitles.includes(normalizedText) ||
    normalizedText.includes("인테리어")
  ) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          힐스테이트 양산더스카이의 전용 68㎡·84㎡·159㎡ 타입별
          세대 정보를 안내합니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          68A·84A·84B·84C·159P 타입으로 구성된 다양한 평면과
          공간 설계를 확인해 보세요.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          펜트하우스를 제외한 전 가구에 판상형 4Bay 구조가 적용되며,
          드레스룸과 팬트리 또는 알파룸을 마련했습니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          타입안내, 평면도와 E-모델하우스를 통해 힐스테이트
          양산더스카이의 공간을 미리 만나보실 수 있습니다.
        </div>
      </>
    );
  } else if (locationTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          힐스테이트 양산더스카이의 입지환경과 양산 물금 생활권을
          확인해 보세요.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          양산시립중앙도서관과 양산중앙국민체육센터를 가까이에서
          이용할 수 있는 생활환경을 갖췄습니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          양산디자인공원과 양산부산대학교병원을 비롯한 자연·의료·생활
          인프라를 편리하게 누릴 수 있습니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          KTX 물금역과 물금IC, 부산도시철도 2호선 증산역 등을 이용할
          수 있는 광역교통망을 갖추고 있습니다.
        </div>
      </>
    );
  } else if (complexTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          총 8개동, 598세대 규모로 조성되는 힐스테이트
          양산더스카이의 단지설계를 확인해 보세요.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          1단지는 지하 4층~지상 20층 4개동, 2단지는 지하
          3층~지상 20층 4개동으로 구성됩니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          단지배치도와 동·호수배치도를 통해 단지별 동 배치와 타입
          구성을 자세히 확인하실 수 있습니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          피트니스, 실내 골프연습장, 스터디 라운지와 H 아이숲 등
          다양한 커뮤니티 공간이 마련될 예정입니다.
        </div>
      </>
    );
  } else if (promotionTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          힐스테이트 양산더스카이의 분양 소식과 모델하우스 방문예약을
          안내합니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          힐스테이트 양산더스카이 모델하우스 방문예약을 통해 분양가와
          공급조건, 잔여세대 정보를 상담받으실 수 있습니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          관심고객등록을 신청하시면 공급정보와 계약 관련 주요 소식을
          빠르게 확인하실 수 있습니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          양산시 물금읍 1·2단지 총 598세대 힐스테이트 브랜드 단지의
          자세한 분양 정보를 확인해 보세요.
        </div>
      </>
    );
  }

  return (
    <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
      힐스테이트 양산더스카이 홈페이지에서 양산시 물금읍 총
      598세대의 사업개요와 분양가, 평면도 및 모델하우스 방문예약
      정보를 확인하세요.
    </div>
  );
};