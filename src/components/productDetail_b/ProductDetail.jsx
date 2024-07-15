import styled from "styled-components";
import styles from "./detail.module.scss";
import { SiAppletv } from "react-icons/si";
import { SiApplearcade } from "react-icons/si";
import { SiApplemusic } from "react-icons/si";
import iPhone14 from "@/assets/images/iPhone14.jpg";
import iPhone15 from "@/assets/images/iPhone15.jpg";
import iPhone15Pro from "@/assets/images/iPhone15Pro.jpg";
import iPhoneSe from "@/assets/images/iPhoneSe.jpg";
import iPhone15Img from "@/assets/images/iPhone15Img.jpg";
import iPhoneCable from "@/assets/images/iPhoneCable.jpg";
import pro_a from "@/assets/images/pro_a.jpg";
import pro_b from "@/assets/images/pro_b.jpg";
import pro_c from "@/assets/images/pro_c.jpg";
import pro_d from "@/assets/images/pro_d.jpg";
import pro_e from "@/assets/images/pro_e.jpg";

// const ProductDetailBlock = styled.div`
//     color: gray;
//     text-align: center;
//     margin: 50px 0;
//     position: absolute;
//     display: flex;
//     flex-direction: column;
//     font-size: 13px;
//     justify-content: center;
// `;

// const ProductText = styled.div`
//     margin-left: 5%;
//     margin-right: 5%;

// 	.text{
//         width: 800px;

// 	.firstText{
//         text-decoration-line: underline;
//         text-decoration-color: #495057
//         color: #495057;
//     &:hover {
//         color: #343a40;
//         text-decoration-color: #343a40;
//     }
//   }
// }
// `;

// const ProductIcon = styled.div``;

// const ProductMain = styled.div``;

const ProductDetail = () => {
    const iPhone = [
        {
            pic: iPhone15Pro,
            name: "iPhone 15 Pro",
            detail: "궁극의 iPhone",
            price: "₩1,550,000 부터",
        },
        {
            pic: iPhone15,
            name: "iPhone 15",
            detail: "막강한 성능.",
            price: "₩1,250,000 부터",
        },
        {
            pic: iPhone14,
            name: "iPhone 14",
            detail: "여전한 놀라움.",
            price: "₩1,090,000 부터",
        },
        {
            pic: iPhoneSe,
            name: "iPhone SE",
            detail: "파워도 제대로. 실속도 제대로.",
            price: "₩650,000 부터",
        },
    ];

    const test = [
        {
            id: 1,
            title: "Apple TV+",
            text_1: "정주행하고 싶은 오리지널 영화 및 ",
            text_2: "시리즈가 3개월 무료.°°",
            image: <SiAppletv size="60" color="black" />,
        },
        {
            id: 2,
            title: "Apple Music",
            text_1: "당신의 모든 최애곡이 광고 없이",
            text_2: "3개월 무료°°",
            image: <SiApplearcade size="60" color="#F05650" />,
        },
        {
            id: 3,
            title: "Apple Arcade",
            text_1: "손에서 놓고 싶지 않은 꿀잼 가득 게임이",
            text_2: "3개월 무료.°°",
            image: <SiApplemusic size="60" color="#F05650" />,
        },
    ];

    const iPhoneDetail = [
        {
            icon: pro_a,
            detail_1: "티타늄 및 표면 질감을 살린 무광 글래스",
            detail_2: "소재 후면",
            detail_3: "동작 버튼",
        },
        {
            icon: pro_b,
            detail_1: "알루미늄 및 컬러 인퓨즈 글래스 소재",
            detail_2: "Dynamic Island",
            detail_3: "iPhone을 다루는 신박한 방법",
        },
        {
            icon: pro_c,
            detail_1: "A17 Pro 칩",
            detail_2: "6코어 GPU 탑재",
            detail_3: "",
        },
        {
            icon: pro_d,
            detail_1: "프로급 카메라 시스템",
            detail_2: "48MP 메인 | 울트라 와이드 | 망원",
            detail_3: "초고해상도 사진",
        },
        {
            icon: pro_e,
            detail_1: "최대 29시간",
            detail_2: "동영상 재생 각주 ⁴",
            detail_3: "",
        },
    ];
    return (
        <div className={styles.container}>
            <section></section>
            <section className={styles.container__a}>
                <span>제품 구성</span>
                <div>
                    <img src={iPhone15Img} width="200px" alt=""></img>
                    <div></div>
                    <img src={iPhoneCable} width="106px" alt=""></img>
                </div>
                <p>
                    <span>iPhone 15</span>
                    <span>USB-C 충전 케이블</span>
                </p>
            </section>
            <section className={styles.container__section}>
                <span>
                    <strong>환경 보호를 위한 Apple의 목표.</strong>
                </span>
                <p className={styles.container__section__desc}>
                    <a href="#">2030년까지 탄소 중립을 달성</a>하기 위한 Apple
                    지속적인 노력의 일환으로 iPhone 15 Pro 및 iPhone 15 Pro Max
                    제품 구성에는 전원 어댑터 및 EarPods이 포함되지 않습니다.{" "}
                    <br />
                    대신 급속 충전을 지원하고 USB‑C 전원 어댑터 및 컴퓨터 포트와
                    호환되는 USB-C 충전 케이블은 포함되어 있습니다.
                </p>
                <p>
                    호환되는 USB‑C 전원 어댑터를 가지고 계신 경우 계속
                    사용하시길 권장합니다. 하지만 새로운 Apple 전원 어댑터 또는
                    헤드폰이 필요하다면 원하시는 제품을 구입할 수 있습니다.
                </p>
            </section>
            <section className={styles.container__section__b}>
                <span>새로 산 iPhone과 함께 누릴 수 있는</span>{" "}
                <span>놀라움의 세계.</span>
                <div>
                    {test.map((item) => {
                        return (
                            <div>
                                <div>
                                    <span>{item.image}</span>
                                    <span>{item.title}</span>
                                    <span>{item.text_1}</span>

                                    <span>{item.text_2}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
            <section className={styles.container__section__c}>
                <span>어떤 iPhone이 당신에게 맞을까요?</span>
                <div>
                    <div>
                        {iPhone.map((item) => {
                            return (
                                <div>
                                    <img
                                        src={item.pic}
                                        alt=""
                                        width="140px;"
                                        height="200px;"
                                    />
                                    <p>
                                        <span>{item.name}</span>
                                        <span>{item.detail}</span>
                                        <span>{item.price}</span>
                                    </p>
                                    <div>
                                        <div>
                                            <span>17.0cm 또는 15.5cm</span>
                                            <br></br>
                                            <span>
                                                Super Retina XDR 디스플레이
                                            </span>
                                            <br></br>
                                            <span>ProMotion 기술</span>
                                            <br></br>
                                            <span>상시표시형 디스플레이</span>
                                        </div>
                                        {iPhoneDetail.map((item) => {
                                            return (
                                                <div
                                                    className={
                                                        styles.container__section__c__detail
                                                    }
                                                >
                                                    <img
                                                        src={item.icon}
                                                        width="40px"
                                                        alt=""
                                                    ></img>
                                                    <span>{item.detail_1}</span>
                                                    <span>{item.detail_2}</span>
                                                    <span>{item.detail_3}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
        // <ProductDetailBlock>
        //     <ProductText>
        //         <p className="text">
        //             <strong> 환경 보호를 위한 Apple의 목표.</strong>
        //             <br />
        //             <br />
        //             <a href="d" className="firstText">
        //                 2030년까지 탄소 중립을 달성
        //             </a>
        //             하기 위한 Apple의 지속적인 노력의 일환으로 iPhone 15 Pro 및
        //             iPhone 15 Pro Max 제품 구성에는 전원 어댑터 및 EarPods이
        //             포함되지 않습니다. 대신 급속{" "}
        //             <a>
        //                 충전을 지원하고 USB‑C 전원 어댑터 및 컴퓨터 포트와
        //                 호환되는 USB-C 충전 케이블은 포함되어 있습니다.
        //             </a>
        //             <a>
        //                 호환되는 USB‑C 전원 어댑터를 가지고 계신 경우 계속
        //                 사용하시길 권장합니다. 하지만 새로운 Apple 전원 어댑터
        //                 또는 헤드폰이 필요하다면 원하시는 제품을 구입할 수
        //                 있습니다.
        //             </a>
        //         </p>
        //     </ProductText>
        //     <ProductIcon>
        //         <h2>appleicon</h2>
        //     </ProductIcon>
        //     <ProductMain>
        //         <h2>applemain</h2>
        //     </ProductMain>
        // </ProductDetailBlock>
    );
};

export default ProductDetail;
