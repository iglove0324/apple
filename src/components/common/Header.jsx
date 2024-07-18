// import styled from "styled-components";
// import React, { useEffect, useState } from "react";
// import { NavLink, Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import appleIcon from "../../assets/images/appleIcon.png";
// import { FaApple } from "react-icons/fa";
// import { FaCartShopping } from "react-icons/fa6";
// import { userLogout } from "@/store/member";

// const HeaderBlock = styled.div`
//     background: white;
//     color: #fff;
//     .row {
//         position: relative;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//     }
//     h1 {
//         padding-right: 20px;
//         a {
//             color: #000;
//             font-size: 25px;
//         }
//     }
// `;

// const Nav = styled.nav`
//     .depth1 {
//         display: flex;
//         @media screen and (max-width: 800px) {
//             display: none;
//             position: absolute;
//             top: 0;
//             right: 0;
//             width: 200px;
//             height: 100%;
//             background: #fff;

//             padding-top: 100px;
//         }
//         li {
//             position: relative;
//             a {
//                 padding: 20px 30px 20px 0;
//                 color: black;
//                 font-size: 13px;
//             }

//             img {
//                 width: 20px;
//                 height: 20px;
//             }
//         }
//     }
// `;

// const Header = () => {
//     const user = useSelector((state) => state.members.user);
//     const [isUser, setIsUser] = useState(user);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     useEffect(() => {
//         setIsUser(user);
//     }, [user]);

//     const onLogout = () => {
//         dispatch(userLogout());
//         navigate("/");
//     };
//     return (
//         <HeaderBlock>
//             <div className="row">
//                 <h1 id="appleIcon">
//                     <NavLink to="/">
//                         <FaApple />
//                     </NavLink>
//                 </h1>
//                 <Nav className={open ? "on" : ""}>
//                     <ul className="depth1">
//                         <li>
//                             <NavLink>Mac</NavLink>
//                         </li>
//                         <li>
//                             <NavLink>iPad</NavLink>
//                         </li>
//                         <li>
//                             <NavLink>iPhone</NavLink>
//                         </li>
//                         <li>
//                             <NavLink>Watch</NavLink>
//                         </li>
//                         <li>
//                             <NavLink>AirPods</NavLink>
//                         </li>
//                         <li>
//                             <NavLink>TV 및 홈</NavLink>
//                         </li>
//                         <li>
//                             <NavLink>엔터테인먼트</NavLink>
//                         </li>
//                         <li>
//                             <NavLink>액세서리</NavLink>
//                         </li>
//                         <li>
//                             <NavLink>고객지원</NavLink>
//                         </li>
//                         <li>
//                             {!isUser ? (
//                                 <>
//                                     <NavLink to="/Login">로그인</NavLink>
//                                 </>
//                             ) : (
//                                 <>
//                                     <a href="#none" onClick={onLogout}>
//                                         로그아웃
//                                     </a>
//                                 </>
//                             )}
//                         </li>
//                     </ul>
//                 </Nav>
//                 <h1 id="appleIcon">
//                     <NavLink to="/Cart">
//                         <FaCartShopping />
//                     </NavLink>
//                 </h1>
//             </div>
//         </HeaderBlock>
//     );
// };

// export default Header;
import React, { useState } from "react";
import styled from "styled-components";
import navigation from "./dropdown-content.json";
/* json 파일 만들 때 각 객체를 일일이 하나씩 만들기 보다는
객체 안에 배열,객체를 다층적으로 만드는 것이 더 효율적 */
import MenuItem from "./Menuitem.jsx";
import { IoBagOutline } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const HeaderBlock = styled.header`
    position: relative;
    color: rgba(0, 0, 0, 0.8);
    font-weight: 600;
    padding: 0 15px;
    a {
        color: rgba(0, 0, 0, 0.8);
    }
    li:hover {
        text-decoration: none;
    }
    .header-menu {
        display: flex;
        max-width: 1024px;
        align-items: center;
        margin: 0 auto;
        height: 44px;
        font-size: 12px;
    }

    .navBar {
        display: flex;
    }

    .apple-icon {
        margin-right: 20px;
    }

    .IoIosSearch,
    .IoBagOutline {
        margin: 0 20px;
    }

    @media screen and (max-width: 1010px) {
        .navBar {
            display: none;
        }

        .IoMenu {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 30px;
            margin: 0;
            font-size: 30px;
            cursor: pointer;
        }

        .IoClose {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 30px;
            margin: 0;
            font-size: 30px;
            cursor: pointer;
            z-index: 12;
        }
        .IoBagOutline {
            position: absolute;
            top: 40%;
            transform: translateY(-50%);
            right: 80px;
            margin: 0;
            font-size: 30px;
            cursor: pointer;
        }

        .IoIosSearch {
            position: absolute;
            top: 45%;
            transform: translateY(-50%);
            margin: 0;
            right: 125px;
            font-size: 30px;
            cursor: pointer;
        }

        .apple-icon {
            position: absolute;
            top: 39%;
            transform: translateY(-50%);
            font-size: 30px;
            cursor: pointer;
        }
    }

    .mobile-menu2 {
        position: absolute;
        padding-top: 30px;
        top: 0px;
        left: 0;
        font-size: 18px;
        height: 450px;
        width: 100%;
        background-color: white;
        z-index: 10;
        animation: fadeInDown 0.5s ease-in-out;
        li {
            padding: 5px 20px;
        }
    }

    .menu-item-span {
        padding: 10px;
        cursor: pointer;
        display: flex;
    }

    @media screen and (max-width: 1010px) {
        .menu-item-span {
            padding: 0;
        }
    }

    .menu-item {
        padding: 0 10px;
    }

    /* .menu-item:hover .dropdown {
    height: 400px;
    opacity: 1;
    overflow: hidden;
    transition-duration: 0.5s;
}  */

    .dropdown {
        width: 100vw;
        /* css 작성 순서 - 1. 영역  2. 포지션 */
        /* viewport width: viewport는 현재 창에서 문서를 볼 수 있는 부분 */
        position: absolute;
        top: 100%;
        left: 0%;
        background-color: #f5f5f7;
        height: 400px;
        border: 1px solid red;
        /* 위에서 아래로 내려오는 효과를 위해 처음 높이 0*/
        opacity: 1;
        overflow: hidden;
        /* transition-duration: 0.3s; */
        z-index: 10;
        animation: fadeInDown 0.5s ease-in-out;
    }

    .dropdown__container {
        width: 1024px;
        margin: 0 auto;
        display: flex;
    }

    .sub-menu {
        padding: 50px 0;
        padding-right: 50px;
        border: 1px solid black;
        h3 {
            color: #6e6e73;
            padding-bottom: 20px;
            font-size: 12px;
        }
    }

    .special-content {
        font-size: 20px;
    }

    .blur {
        border: 1px solid blue;
        filter: blur(5px);
    }

    @keyframes fadeInDown {
        /* 드롭다운 메뉴효과- 위에서 아래로 내려옴  */
        0% {
            transform: translateY(-200px);
            opacity: 0;
        }

        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }
`;

const Header = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    //useState 함수의 argument에는 상태의 초깃값을 넣어준다.
    /*배열의 첫 번째 원소는 현재 상태, 두 번째 원소는 상태를 바꾸어 주는 함수. Setter함수라고 부른다.*/
    const [isOpen, setIsOpen] = useState(false);
    // 모바일 메뉴 열림 상태 추가

    const handleMenuHover = (menuName) => {
        setActiveMenu(menuName);
    };
    const handleMenuLeave = () => {
        setActiveMenu(null);
    };

    const mobile = useMediaQuery({ maxWidth: 1010 });
    const mobileMenu = () => {
        setIsOpen(!isOpen); // 모바일 메뉴 토글 함수
    };

    return (
        <HeaderBlock>
            <div className="header-menu">
                <div className="apple-icon">
                    <Link to="/apple">
                        <FaApple style={{ fontSize: 20 }} />
                    </Link>
                </div>
                <ul className="navBar">
                    {navigation.map((item, index) => (
                        //arr.map(콜백함수(인수 3개),thisArg)
                        // navigation 배열을 매핑하여 각각의 메뉴 항목에 대해 <MenuItem /> 컴포넌트를 렌더링
                        <MenuItem
                            key={index}
                            item={item}
                            isActive={activeMenu === item.category}
                            onMouseEnter={() => handleMenuHover(item.category)}
                            //onmouseenter = (event) => {};
                            onMouseLeave={handleMenuLeave}
                        />
                    ))}
                </ul>
                <div className="IoIosSearch">
                    <IoIosSearch style={{ fontSize: 20 }} />
                </div>
                <div className="IoBagOutline">
                    <IoBagOutline style={{ fontSize: 20 }} />
                </div>
                {mobile && (
                    <nav className="mobile-menu" onClick={mobileMenu}>
                        {isOpen ? (
                            <IoClose className="IoClose" />
                        ) : (
                            <IoMenu className="IoMenu" />
                        )}
                    </nav>
                )}
            </div>
            {mobile && isOpen && (
                /* mobile && isOpen: useMediaQuery 훅을 통해 화면 너비가 991px 이하인지 확인하고, 
                isOpen 상태가 true인지를 조건으로 한다. 즉, 모바일 화면이고 메뉴가 열려있는 경우에만 
                아래의 JSX가 렌더링 */
                <div className="mobile-menu2">
                    <ul>
                        {navigation.map((item, index) => (
                            <MenuItem
                                key={index}
                                item={item}
                                isActive={activeMenu === item.category}
                                onMouseEnter={() =>
                                    handleMenuHover(item.category)
                                }
                                onMouseLeave={handleMenuLeave}
                            />
                        ))}
                    </ul>
                </div>
            )}
        </HeaderBlock>
    );
};

export default Header;
