import styles from "./login.module.scss";
import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "@/store/member";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const members = useSelector((state) => state.members.members);

    const [userInfo, setUserInfo] = useState({
        userEmail: "",
        userPw: "",
    });

    const handleChange = (e) => {
        const { value, name } = e.target;
        setUserInfo((userInfo) => ({ ...userInfo, [name]: value }));
    };

    const onLogin = (e) => {
        e.preventDefault();
        if (!userInfo.userEmail) {
            alert("이메일을 입력하세요.");
            return;
        }
        if (!userInfo.userPw) {
            alert("비밀번호를 입력하세요.");
            return;
        }
        const user = members.find(
            (item) =>
                item.userEmail == userInfo.userEmail &&
                item.userPw == userInfo.userPw
        );
        if (user) {
            dispatch(userLogin(userInfo));
            navigate("/");
        } else {
            alert("회원이 아닙니다.");
            return;
        }
    };
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [loginCheck, setLoginCheck] = useState(false);

    // const navigate = useNavigate();

    // const handleLogin = async (event) => {
    //     event.preventDefault();
    //     await new Promise((r) => setTimeout(r, 1000));

    //     const response = await fetch("로그인 서버 주소", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             email: email,
    //             password: password,
    //         }),
    //     });

    //     const result = await response.json();

    //     if (response.status === 200) {
    //         setLoginCheck(false);
    //         sessionStorage.setItem("token", result.token);
    //         sessionStorage.setItem("email", result.email);
    //         sessionStorage.setItem("role", result.role);
    //         sessionStorage.setItem("storeid", result.storeId);
    //         console.log("로그인성공, 이메일주소 : " + result.email);
    //         navigate("/");
    //     } else {
    //         setLoginCheck(true);
    //     }
    // };

    return (
        <div className={styles.container}>
            <form className={styles.container__loginForm} onSubmit={onLogin}>
                <h1>Apple ID로 로그인하세요.</h1>
                <div>
                    <label htmlFor="username"></label>
                    <input
                        type="text"
                        id="username"
                        name="userEmail"
                        value={userInfo.userEmail}
                        onChange={handleChange}
                        placeholder="이메일"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder='이메일.'"
                        autoFocus
                    />

                    <label htmlFor="password"></label>
                    <input
                        type="password"
                        id="password"
                        name="userPw"
                        value={userInfo.userPw}
                        onChange={handleChange}
                        placeholder="비밀번호"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder='비밀번호'"
                    />

                    <button type="submit">계속</button>
                </div>
                <p className="signup-link">
                    아직 회원이 아니신가요? <Link to="/Sign_up">회원가입</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
