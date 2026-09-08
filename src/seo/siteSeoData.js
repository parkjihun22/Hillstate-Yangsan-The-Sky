const SITE_URL = "https://www.hillstate-godeok-elist.co.kr";

export const siteSeo = {
  siteName: "힐스테이트 양산더스카이",
  siteUrl: SITE_URL,
  phone: "1533-8848",
  ogImage: "/img/og/main.jpg",
  locale: "ko_KR",
  organizationId: `${SITE_URL}/#organization`,
  websiteId: `${SITE_URL}/#website`,

  defaultDescription:
    "힐스테이트 양산더스카이 분양 안내 홈페이지입니다. 경상남도 양산시 물금읍에 조성되는 총 598세대 힐스테이트 브랜드 단지로, 68㎡·84㎡·159㎡ 타입과 사업안내, 입지환경, 공급정보, 모델하우스 방문예약 정보를 확인하세요.",

  project: {
    addressCountry: "KR",
    addressRegion: "경상남도",
    addressLocality: "양산시",
    streetAddress:
      "1단지 물금읍 가촌리 971번지 일원 · 2단지 물금읍 범어리 940-2번지 일원",
    block: "1단지 · 2단지",
    households: "598세대",
    scale: "총 598세대 · 8개동",
    unitTypes: ["68A㎡", "84A㎡", "84B㎡", "84C㎡", "159P㎡"],
    brands: [
      "힐스테이트 양산더스카이",
      "힐스테이트",
      "현대건설",
    ],
    navigationSchemaName: "힐스테이트 양산더스카이 주요 메뉴",
  },

  keywords: [
    "힐스테이트 양산더스카이",
    "힐스테이트 양산더스카이 모델하우스",
    "힐스테이트 양산더스카이 견본주택",
    "힐스테이트 양산더스카이 방문예약",
    "힐스테이트 양산더스카이 관심고객등록",
    "힐스테이트 양산더스카이 분양",
    "힐스테이트 양산더스카이 분양가",
    "힐스테이트 양산더스카이 청약",
    "힐스테이트 양산더스카이 공급정보",
    "힐스테이트 양산더스카이 입주자모집공고",
    "힐스테이트 양산더스카이 계약조건",
    "힐스테이트 양산더스카이 평면도",
    "힐스테이트 양산더스카이 68A",
    "힐스테이트 양산더스카이 84A",
    "힐스테이트 양산더스카이 84B",
    "힐스테이트 양산더스카이 84C",
    "힐스테이트 양산더스카이 159P",
    "양산 힐스테이트",
    "양산 아파트 분양",
    "물금 아파트 분양",
    "양산 물금 힐스테이트",
    "양산 물금 모델하우스",
    "물금읍 가촌리 아파트",
    "물금읍 범어리 아파트",
    "양산신도시 아파트",
    "KTX 물금역 아파트",
    "증산역 아파트",
    "양산부산대학교병원 아파트",
    "힐스테이트 양산더스카이 598세대",
    "현대건설 힐스테이트",
  ],
};

export const seoNavigation = [
  {
    name: "브랜드소개",
    path: "/Brand/intro",
    children: [
      { name: "브랜드소개", path: "/Brand/intro" },
      // { name: "홍보영상", path: "/Brand/video" },
    ],
  },
  {
    name: "사업안내",
    path: "/BusinessGuide/intro",
    children: [
      { name: "사업안내", path: "/BusinessGuide/intro" },
      { name: "분양일정", path: "/BusinessGuide/plan" },
    ],
  },
  {
    name: "입지환경",
    path: "/LocationEnvironment/intro",
    children: [
      { name: "입지안내", path: "/LocationEnvironment/intro" },
      { name: "프리미엄", path: "/LocationEnvironment/primium" },
    ],
  },
  {
    name: "단지안내",
    path: "/ComplexGuide/intro",
    children: [
      { name: "단지배치도", path: "/ComplexGuide/intro" },
      {
        name: "호수배치도",
        path: "/ComplexGuide/detailintro",
      },
      { name: "커뮤니티", path: "/ComplexGuide/community" },
    ],
  },
  {
    name: "분양안내",
    path: "/BusinessGuide/documents",
    children: [
      {
        name: "공급안내",
        path: "/BusinessGuide/documents",
      },
      {
        name: "입주자 모집공고",
        path: "/SalesInfo/announcement",
      },
      {
        name: "계약서류안내",
        path: "/SalesInfo/guide",
      },
    ],
  },
  {
    name: "타입안내",
    path: "/FloorPlan/59A",
    children: [
      { name: "68A㎡", path: "/FloorPlan/59A" },
      { name: "84A㎡", path: "/FloorPlan/59B" },
      { name: "84B㎡", path: "/FloorPlan/84A" },
      { name: "84C㎡", path: "/FloorPlan/84B" },
      { name: "159P㎡", path: "/FloorPlan/114A" },
      {
        name: "E-모델하우스",
        path: "/FloorPlan/Emodel",
      },
    ],
  },
  {
    name: "홍보센터",
    path: "/Promotion/Press",
    children: [
      { name: "언론보도", path: "/Promotion/Press" },
      {
        name: "관심고객등록",
        path: "/Promotion/Customer",
      },
    ],
  },
];

const page = ({
  path,
  title,
  description,
  menu,
  image = siteSeo.ogImage,
  priority = 0.8,
  changefreq = "weekly",
  robots = "index, follow, max-snippet:-1, max-image-preview:large",
}) => ({
  path,
  title,
  description,
  menu,
  image,
  priority,
  changefreq,
  robots,
});

export const seoPages = {
  home: page({
    path: "/",
    title:
      "힐스테이트 양산더스카이",
    description: siteSeo.defaultDescription,
    menu: "홈",
    priority: 1,
    changefreq: "daily",
  }),

  brandIntro: page({
    path: "/Brand/intro",
    title:
      "브랜드소개 | 힐스테이트 양산더스카이",
    description:
      "힐스테이트 양산더스카이 브랜드소개 페이지입니다. 현대건설 힐스테이트의 차별화된 설계와 브랜드 가치, 양산 물금에서 누리는 새로운 주거 프리미엄을 확인하세요.",
    menu: "브랜드소개",
  }),

  businessIntro: page({
    path: "/BusinessGuide/intro",
    title:
      "사업안내 | 힐스테이트 양산더스카이",
    description:
      "힐스테이트 양산더스카이 사업안내입니다. 경상남도 양산시 물금읍 가촌리와 범어리에 조성되는 2개 단지, 총 598세대 규모와 68㎡·84㎡·159㎡ 타입 정보를 확인하세요.",
    menu: "사업안내",
    image: "/img/og/business.jpg",
    priority: 0.9,
  }),

  businessPlan: page({
    path: "/BusinessGuide/plan",
    title:
      "분양일정 | 힐스테이트 양산더스카이",
    description:
      "힐스테이트 양산더스카이 분양일정 안내입니다. 청약접수, 당첨자 발표, 서류접수와 계약 일정 등 분양 관련 주요 일정을 확인하세요.",
    menu: "사업안내",
  }),

  salesGuide: page({
    path: "/BusinessGuide/documents",
    title:
      "공급안내 | 힐스테이트 양산더스카이",
    description:
      "힐스테이트 양산더스카이 공급안내입니다. 총 598세대 공급 규모와 68A㎡·84A㎡·84B㎡·84C㎡·159P㎡ 타입별 공급 정보를 확인하세요.",
    menu: "분양안내",
    image: "/img/og/business.jpg",
  }),

  announcement: page({
    path: "/SalesInfo/announcement",
    title:
      "입주자 모집공고 | 힐스테이트 양산더스카이",
    description:
      "힐스테이트 양산더스카이 입주자 모집공고 안내입니다. 공급 대상, 타입별 세대수, 분양가, 청약 자격, 계약 조건과 유의사항을 확인하세요.",
    menu: "분양안내",
    image: "/img/og/business.jpg",
  }),

  salesInfoGuide: page({
    path: "/SalesInfo/guide",
    title:
      "계약서류안내 | 힐스테이트 양산더스카이",
    description:
      "힐스테이트 양산더스카이 계약서류안내입니다. 자격 확인과 계약 진행에 필요한 구비서류, 제출 방법 및 계약 전 확인사항을 안내합니다.",
    menu: "분양안내",
    image: "/img/og/business.jpg",
  }),

  locationIntro: page({
    path: "/LocationEnvironment/intro",
    title:
      "입지환경 | 힐스테이트 양산더스카이",
    description:
      "힐스테이트 양산더스카이 입지환경 안내입니다. KTX 물금역, 증산역, 물금IC와 남양산IC를 비롯한 교통환경과 교육·생활·자연 인프라를 확인하세요.",
    menu: "입지환경",
    image: "/img/og/location.jpg",
    priority: 0.9,
  }),

  locationPremium: page({
    path: "/LocationEnvironment/primium",
    title:
      "프리미엄 | 힐스테이트 양산더스카이",
    description:
      "힐스테이트 양산더스카이 프리미엄 안내입니다. 양산부산대학교병원, 양산디자인공원, 양산시립중앙도서관과 편리한 광역교통망을 누리는 입지 가치를 확인하세요.",
    menu: "입지환경",
    image: "/img/og/location.jpg",
  }),

  complexIntro: page({
    path: "/ComplexGuide/intro",
    title:
      "단지배치도 | 힐스테이트 양산더스카이",
    description:
      "힐스테이트 양산더스카이 단지배치도 안내입니다. 1단지와 2단지, 총 8개동 598세대의 동 배치와 조경, 보행 동선 및 단지 구성을 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
    priority: 0.9,
  }),

  complexDetail: page({
    path: "/ComplexGuide/detailintro",
    title:
      "호수배치도 | 힐스테이트 양산더스카이",
    description:
      "힐스테이트 양산더스카이 호수배치도 안내입니다. 1단지와 2단지의 동·호수 구성, 타입별 세대 위치와 단지 내 배치 정보를 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
  }),

  complexCommunity: page({
    path: "/ComplexGuide/community",
    title:
      "커뮤니티 | 힐스테이트 양산더스카이",
    description:
      "힐스테이트 양산더스카이 커뮤니티 안내입니다. 피트니스, 실내골프연습장, 스터디라운지, 힐스라운지 등 입주민을 위한 커뮤니티 공간을 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
  }),

  floorPlan68A: page({
    path: "/FloorPlan/59A",
    title:
      "68A㎡ 평면도 | 힐스테이트 양산더스카이",
    description:
      "힐스테이트 양산더스카이 68A㎡ 타입 평면도 안내입니다. 실용적인 공간 구성과 수납 설계, 가족의 생활을 고려한 주거 동선을 확인하세요.",
    menu: "타입안내",
  }),

  floorPlan84A: page({
    path: "/FloorPlan/59B",
    title:
      "84A㎡ 평면도 | 힐스테이트 양산더스카이",
    description:
      "힐스테이트 양산더스카이 84A㎡ 타입 평면도 안내입니다. 선호도 높은 판상형 4Bay 구조와 효율적인 공간 구성, 수납 및 생활 동선을 확인하세요.",
    menu: "타입안내",
  }),

  floorPlan84B: page({
    path: "/FloorPlan/84A",
    title:
      "84B㎡ 평면도 | 힐스테이트 양산더스카이",
    description:
      "힐스테이트 양산더스카이 84B㎡ 타입 평면도 안내입니다. 가족 구성과 라이프스타일을 고려한 공간 설계와 수납, 생활 동선을 확인하세요.",
    menu: "타입안내",
  }),

  floorPlan84C: page({
    path: "/FloorPlan/84B",
    title:
      "84C㎡ 평면도 | 힐스테이트 양산더스카이",
    description:
      "힐스테이트 양산더스카이 84C㎡ 타입 평면도 안내입니다. 공간 활용도를 높인 평면 설계와 수납공간, 세대 내부 생활 동선을 확인하세요.",
    menu: "타입안내",
  }),

  floorPlan159P: page({
    path: "/FloorPlan/114A",
    title:
      "159P㎡ 펜트하우스 평면도 | 힐스테이트 양산더스카이",
    description:
      "힐스테이트 양산더스카이 159P㎡ 펜트하우스 평면도 안내입니다. 희소성 높은 대형 타입의 여유로운 공간 구성과 특화된 주거 설계를 확인하세요.",
    menu: "타입안내",
  }),

  emodel: page({
    path: "/FloorPlan/Emodel",
    title:
      "E-모델하우스 | 힐스테이트 양산더스카이",
    description:
      "힐스테이트 양산더스카이 E-모델하우스입니다. 68㎡·84㎡·159㎡ 타입별 실내 구조와 인테리어, 공간 구성 및 생활 동선을 온라인으로 확인하세요.",
    menu: "타입안내",
    image: "/img/og/emodel.jpg",
    priority: 0.9,
  }),

  customer: page({
    path: "/Promotion/Customer",
    title:
      "모델하우스 방문예약 | 힐스테이트 양산더스카이",
    description:
      "힐스테이트 양산더스카이 모델하우스 방문예약 및 관심고객등록 페이지입니다. 공급정보, 분양가, 타입별 평면과 계약 조건에 관한 상담을 신청하세요.",
    menu: "홍보센터",
    image: "/img/og/customer.jpg",
    priority: 0.9,
    changefreq: "daily",
  }),

  press: page({
    path: "/Promotion/Press",
    title:
      "언론보도 | 힐스테이트 양산더스카이",
    description:
      "힐스테이트 양산더스카이 언론보도 페이지입니다. 양산 물금의 입지환경, 총 598세대 공급정보, 모델하우스 방문예약과 관련된 분양 소식을 확인하세요.",
    menu: "홍보센터",
    image: "/img/og/main.jpg",
    priority: 0.9,
    changefreq: "daily",
  }),

  notFound: page({
    path: "/404",
    title:
      "페이지를 찾을 수 없습니다 | 힐스테이트 양산더스카이",
    description:
      "요청하신 페이지를 찾을 수 없습니다. 힐스테이트 양산더스카이 홈페이지의 사업안내, 입지환경, 타입안내, E-모델하우스와 관심고객등록 메뉴를 이용해 주세요.",
    menu: "오류",
    priority: 0,
    changefreq: "yearly",
    robots: "noindex, follow",
  }),
};

const normalizeSeoPath = (pathname = "/") => {
  let cleanPath = pathname || "/";

  try {
    if (/^https?:\/\//.test(cleanPath)) {
      cleanPath = new URL(cleanPath).pathname;
    }
  } catch {
    cleanPath = "/";
  }

  cleanPath = decodeURI(cleanPath)
    .split("?")[0]
    .split("#")[0]
    .replace(/\/$/, "");

  return cleanPath.toLowerCase() || "/";
};

export const seoPathMap = Object.fromEntries(
  Object.entries(seoPages).map(([key, value]) => [
    normalizeSeoPath(value.path),
    key,
  ])
);

export const seoPageList = Object.values(seoPages).filter(
  (item) => item.robots !== "noindex, follow"
);

export const getAbsoluteUrl = (path = "/") => {
  if (/^https?:\/\//.test(path)) return path;

  const normalizedPath = path.startsWith("/")
    ? path
    : `/${path}`;

  return `${siteSeo.siteUrl}${normalizedPath}`;
};

export const getSeoPageByPath = (pathname = "/") => {
  const normalizedPath = normalizeSeoPath(pathname);
  const exactKey = seoPathMap[normalizedPath];

  if (exactKey) return seoPages[exactKey];

  if (normalizedPath.endsWith("/press")) {
    return seoPages.press;
  }

  if (normalizedPath.includes("/promotion/press")) {
    return seoPages.press;
  }

  if (normalizedPath.endsWith("/customer")) {
    return seoPages.customer;
  }

  if (normalizedPath.includes("/promotion/customer")) {
    return seoPages.customer;
  }

  return seoPages.notFound;
};