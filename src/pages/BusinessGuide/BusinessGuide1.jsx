import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/BusinessGuide/BusinessGuide1/page1.jpg";
import tableImage from "../../assets/BusinessGuide/BusinessGuide1/tableImage.jpg";



const projectData = [
  {
    label: "현장명",
    value: "힐스테이트 양산더스카이",
  },

  {
    label: "사업명",
    value: "힐스테이트 양산더스카이",
  },

  {
    label: "1단지 위치",
    value: "경상남도 양산시 물금읍 가촌리 971번지 일원",
  },

  {
    label: "2단지 위치",
    value: "경상남도 양산시 물금읍 범어리 940-2번지 일원",
  },

  {
    label: "단지규모",
    value: "총 8개동, 598세대",
  },

  {
    label: "1단지 규모",
    value: "지하 4층~지상 20층, 4개동, 299세대",
  },

  {
    label: "2단지 규모",
    value: "지하 3층~지상 20층, 4개동, 299세대",
  },

  {
    label: "주택형",
    value: "전용 68㎡ · 84㎡ · 159㎡",
  },

  {
    label: "입주예정",
    value: "2029년 4월 예정",
  },

  {
    label: "시행수탁",
    value: "㈜무궁화신탁",
  },

  {
    label: "시행위탁",
    value: "㈜코윈",
  },

  {
    label: "시공",
    value: "현대건설㈜",
  },
];


const BusinessGuide1 = () => {
  const menuContents = [
    { title: "사업안내", url: "/BusinessGuide/intro" },
    { title: "분양일정", url: "/BusinessGuide/plan" },
  ];

  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation();
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
<Header isChanged={isScroll} />
<FixIcon />

<Bener title="사업개요" />

<MenuBar contents={menuContents} />
<div className={styles.textBox}>
  <div>양산 물금의 풍부한 생활 인프라와 함께하는 프리미엄</div>
  <div>힐스테이트 양산더스카이에서 누리는 새로운 라이프스타일</div>
</div>

<img className={styles.img3} src={page1} alt="힐스테이트 양산더스카이 사업개요 이미지"/>

			<div className={styles.tableContainer}>
				{!isMobile && (
					<img
						className={styles.tableImg}
						src={tableImage}
						alt="힐스테이트 양산더스카이 사업개요 표 이미지"
					/>
				)}
				<table className={styles.projectTable}>
					<tbody>
						{projectData.map((item, index) => (
							<tr key={index}>
								<td className={styles.label}>{item.label}</td>
								<td className={styles.contents}>{item.value}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			 <div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 본 홈페이지에 표기된 내용은 하기의 내용을 근거로 한 내용이며, 추후 계획의 변동 등은 당사와 무관합니다.
				</div>
				
			</div> 


			<Footer />
		</div>
	)
}

export default BusinessGuide1;
