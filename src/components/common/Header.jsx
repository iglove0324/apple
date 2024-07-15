import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import appleIcon from "../../assets/images/appleIcon.png";
import { FaApple } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { userLogout } from "@/store/member";

const HeaderBlock = styled.div`
    background: white;
    color: #fff;
    .row {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    h1 {
        padding-right: 20px;
        a {
            color: #000;
            font-size: 25px;
        }
    }
`;

const Nav = styled.nav`
    .depth1 {
        display: flex;
        @media screen and (max-width: 800px) {
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            width: 200px;
            height: 100%;
            background: #fff;

            padding-top: 100px;
        }
        li {
            position: relative;
            a {
                padding: 20px 30px 20px 0;
                color: black;
                font-size: 13px;
            }

            img {
                width: 20px;
                height: 20px;
            }
        }
    }
`;

const Header = () => {
    const user = useSelector((state) => state.members.user);
    const [isUser, setIsUser] = useState(user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        setIsUser(user);
    }, [user]);

    const onLogout = () => {
        dispatch(userLogout());
        navigate("/");
    };
    return (
        <HeaderBlock>
            <div className="row">
                <h1 id="appleIcon">
                    <NavLink to="/">
                        <FaApple />
                    </NavLink>
                </h1>
                <Nav className={open ? "on" : ""}>
                    <ul className="depth1">
                        <li>
                            <NavLink>Mac</NavLink>
                        </li>
                        <li>
                            <NavLink>iPad</NavLink>
                        </li>
                        <li>
                            <NavLink>iPhone</NavLink>
                        </li>
                        <li>
                            <NavLink>Watch</NavLink>
                        </li>
                        <li>
                            <NavLink>AirPods</NavLink>
                        </li>
                        <li>
                            <NavLink>TV 및 홈</NavLink>
                        </li>
                        <li>
                            <NavLink>엔터테인먼트</NavLink>
                        </li>
                        <li>
                            <NavLink>액세서리</NavLink>
                        </li>
                        <li>
                            <NavLink>고객지원</NavLink>
                        </li>
                        <li>
                            {!isUser ? (
                                <>
                                    <NavLink to="/Login">로그인</NavLink>
                                </>
                            ) : (
                                <>
                                    <a href="#none" onClick={onLogout}>
                                        로그아웃
                                    </a>
                                </>
                            )}
                        </li>
                    </ul>
                </Nav>
                <h1 id="appleIcon">
                    <NavLink to="/">
                        <FaCartShopping />
                    </NavLink>
                </h1>
            </div>
        </HeaderBlock>
    );
};

export default Header;
