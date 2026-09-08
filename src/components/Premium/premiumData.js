import premiumIcon1 from "../../assets/Main/section3-img1.png";
import premiumIcon2 from "../../assets/Main/section3-img2.png";
import premiumIcon3 from "../../assets/Main/section3-img3.png";
import premiumIcon4 from "../../assets/Main/section3-img4.png";

export const premiumData = {
  eyebrow: "GREAT PREMIUM",

  title: ["힐스테이트 양산더스카이", "프리미엄"],

  description:
    "힐스테이트 양산더스카이는 경상남도 양산시 물금읍에 조성되는 1·2단지 총 598세대 규모의 주거단지입니다. 풍부한 생활 인프라와 광역교통망, 전용 68㎡·84㎡·159㎡의 특화 평면, 현대건설 힐스테이트의 차별화된 주거설계를 만나보세요.",

  items: [
    {
      id: "premium-living",
      number: "01",
      icon: premiumIcon1,
      title: "문화·체육·의료시설을 가까이 누리는 생활",
      subtitle: "양산 물금의 풍부한 생활 인프라",

      description:
        "양산시립중앙도서관과 양산중앙국민체육센터를 가까이에서 이용할 수 있으며, 양산디자인공원과 양산부산대학교병원 등 문화·체육·자연·의료 인프라를 편리하게 누릴 수 있습니다.",

      link: "/LocationEnvironment/intro",
      linkText: "입지환경 보기",
    },

    {
      id: "premium-transportation",
      number: "02",
      icon: premiumIcon2,
      title: "부산과 김해를 연결하는 광역교통망",
      subtitle: "양산과 부산을 잇는 편리한 교통환경",

      description:
        "KTX 물금역과 물금IC, 남양산IC를 이용할 수 있으며 부산도시철도 2호선 증산역 등을 통해 양산 주요 지역은 물론 부산과 김해 방면으로 편리하게 이동할 수 있습니다.",

      link: "/BusinessGuide/intro",
      linkText: "사업안내 보기",
    },

    {
      id: "premium-unit",
      number: "03",
      icon: premiumIcon3,
      title: "전용 68㎡ · 84㎡ · 159㎡ 타입",
      subtitle: "공간 활용도를 높인 특화 평면설계",

      description:
        "68A·84A·84B·84C·159P 타입으로 구성되며 펜트하우스를 제외한 전 가구에 판상형 4Bay 구조가 적용됩니다. 드레스룸과 팬트리 또는 알파룸을 마련해 수납공간과 생활 편의성을 높였습니다.",

      link: "/FloorPlan/68A",
      linkText: "타입안내 보기",
    },

    {
      id: "premium-brand",
      number: "04",
      icon: premiumIcon4,
      title: "현대건설 힐스테이트 브랜드 프리미엄",
      subtitle: "생활의 완성도를 높이는 차별화된 설계",

      description:
        "2.4m 천장고와 거실 유리난간, H 사일런트 홈 층간소음 저감 기술을 적용하고 마이 힐스 앱을 통한 IoT 제어와 주차 위치 확인, 커뮤니티 예약 등 편리한 스마트 라이프를 제공합니다.",

      link: "/LocationEnvironment/primium",
      linkText: "프리미엄 보기",
    },
  ],
};