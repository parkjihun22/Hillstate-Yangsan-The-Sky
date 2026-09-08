import bgImage from "../../assets/ComplexGuide/ComplexGuide1/bg-section.jpg";
import bannerImage from "../../assets/ComplexGuide/ComplexGuide1/complex-1024x573.jpg";
import layoutImage from "../../assets/ComplexGuide/ComplexGuide1/page1.webp";
import designImage from "../../assets/ComplexGuide/ComplexGuide2/page1.webp";
import communityImage from "../../assets/ComplexGuide/ComplexGuide3/page1.jpg";

export const communityData = {
  eyebrow: "COMMUNITY",

  title: "총 598세대의 일상을 완성하는 힐스테이트 커뮤니티",

  description:
    "힐스테이트 양산더스카이는 양산시 물금읍 가촌리와 범어리에 들어서는 1·2단지 총 598세대 규모의 주거단지입니다. 쾌적한 단지 배치와 특화 주거설계, 입주민의 운동과 휴식, 교류를 고려한 커뮤니티 공간으로 새로운 주거 가치를 제안합니다.",

  backgroundImage: bgImage,

  banner: {
    image: bannerImage,
    alt: "힐스테이트 양산더스카이 총 598세대 단지 전경",
  },

  items: [
    {
      id: "complex-layout",
      label: "단지 배치도",

      title: "1·2단지 총 8개동, 598세대 단지설계",

      description:
        "힐스테이트 양산더스카이는 1단지 지하 4층~지상 20층 4개동 299세대와 2단지 지하 3층~지상 20층 4개동 299세대로 구성됩니다. 총 8개동 규모의 단지계획을 통해 편리하고 쾌적한 주거환경을 선보입니다.",

      image: layoutImage,
      alt: "힐스테이트 양산더스카이 1단지 2단지 단지 배치도",
    },

    {
      id: "complex-design",
      label: "단지 특화설계",

      title: "주거 만족도를 높이는 힐스테이트 특화설계",

      description:
        "펜트하우스를 제외한 전 가구에 판상형 4Bay 구조를 적용하고 드레스룸과 팬트리 또는 알파룸을 마련했습니다. 2.4m 천장고와 거실 유리난간, 현대건설의 층간소음 저감 기술인 H 사일런트 홈을 통해 편안하고 여유로운 생활공간을 제공합니다.",

      image: designImage,
      alt: "힐스테이트 양산더스카이 판상형 4Bay 특화설계",
    },

    {
      id: "community-space",
      label: "커뮤니티",

      title: "운동과 휴식, 여가를 위한 커뮤니티 공간",

      description:
        "힐스테이트 양산더스카이는 피트니스와 실내 골프연습장, 스터디 라운지, 힐스 라운지 등 다양한 커뮤니티 공간을 마련합니다. 숲을 테마로 한 실내 놀이공간 H 아이숲과 키즈스테이션 등 가족 구성원의 생활을 고려한 시설도 계획되어 있습니다.",

      image: communityImage,
      alt: "힐스테이트 양산더스카이 피트니스 골프연습장 커뮤니티 시설",
    },
  ],
};