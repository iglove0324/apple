import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styles from "./signUp.module.scss";
import { addMember } from "@/store/member.js";

const Signup = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userEmailRef = useRef("");
    const userPwRef = useRef("");
    const userPwOkRef = useRef("");
    const userNameRef = useRef("");
    const addr2Ref = useRef("");

    const [userInfo, setUserInfo] = useState({
        userEmail: "",
        userPw: "",
        userPwOk: "",
        userName: "",
        userPhone: "",
    });

    const handleChange = (e) => {
        console.log(e.target);
        const { value, name } = e.target;
        setUserInfo((userInfo) => ({ ...userInfo, [name]: value }));
    };

    const onReset = () => {
        setUserInfo({
            userEmail: "",
            userPw: "",
            userPwOk: "",
            userName: "",
            userPhone: "",
        });
    };

    const onRegister = (e) => {
        e.preventDefault();
        if (!userInfo.userEmail) {
            alert("이메일을 입력하세요.");
            userEmailRef.current.focus();
            return;
        }
        if (!userInfo.userPw) {
            alert("비밀번호를 입력하세요.");
            userPwRef.current.focus();
            return;
        }
        if (!userInfo.userPwOk) {
            alert("비밀번호를 입력하세요.");
            userPwOkRef.current.focus();
            return;
        }
        if (userInfo.userPw != userInfo.userPwOk) {
            alert("비밀번호가 일치하지 않습니다.");
            userPwOkRef.current.focus();
            return;
        }
        if (!userInfo.userName) {
            alert("이름을 입력하세요.");
            userNameRef.current.focus();
            return;
        }
        dispatch(addMember(userInfo));
        navigate("/login");
    };

    // function checkNumber(event) {
    //     if (
    //         event.key === "." ||
    //         event.key === "-" ||
    //         (event.key >= 0 && event.key <= 9)
    //     ) {
    //         return true;
    //     }

    //     return false;
    // }
    // const [email, setEmail] = useState("");
    // const [username, setUsername] = useState("");
    // const [userNickname, setUserNickname] = useState("");
    // const [phoneNumber, setPhoneNumber] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");
    // const [role, setRole] = useState("");

    // const navigate = useNavigate();

    // const handleSignup = async (event) => {
    //     event.preventDefault();

    //     // 회원가입 처리 로직을 구현합니다.

    //     // Check if passwords match
    //     if (password !== confirmPassword) {
    //         alert("비밀번호가 일치하지 않습니다.");
    //         return;
    //     }

    //     // Create payload
    //     const payload = {
    //         email: email,
    //         password: password,
    //         nickname: userNickname,
    //         name: username,
    //         phone: phoneNumber,
    //     };

    //     try {
    //         const response = await fetch("요청지 주소", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(payload),
    //         });

    //         const data = await response.json();

    //         if (response.status === 201) {
    //             // Redirect to login.html
    //             console.log("성공! 이메일주소: " + data.email);
    //             navigate("/login"); // 로그인 성공시 홈으로 이동합니다.
    //         } else if (response.status === 400) {
    //             // Handle error
    //             alert(`회원가입 실패: ${data.email}`);
    //         }
    //     } catch (error) {
    //         console.error("오류 발생:", error);
    //     }
    // };

    return (
        <div className={styles.container}>
            <form
                className={styles.container__signupForm}
                onSubmit={onRegister}
            >
                <h1>Apple 회원가입</h1>
                <div>
                    <label htmlFor="email"></label>
                    <input
                        ref={userEmailRef}
                        type="email"
                        id="email"
                        name="userEmail"
                        value={userInfo.userEmail}
                        onChange={handleChange}
                        placeholder="이메일"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder='이메일.'"
                        autoFocus
                    />

                    <label htmlFor="username"></label>
                    <input
                        type="text"
                        id="username"
                        name="userName"
                        value={userInfo.userName}
                        onChange={handleChange}
                        placeholder="사용자명"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder='사용자명.'"
                        autoFocus
                    />
                    <label htmlFor="phone-number"></label>
                    <input
                        type="text"
                        id="phone-number"
                        name="userPhone"
                        value={userInfo.userPhone}
                        onChange={handleChange}
                        placeholder="전화번호"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder='전화번호.'"
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
                        onblur="this.placeholder='비밀번호.'"
                        autoFocus
                    />

                    <label htmlFor="confirm-password"> </label>
                    <input
                        type="password"
                        id="confirm-password"
                        name="userPwOk"
                        value={userInfo.userPwOk}
                        onChange={handleChange}
                        placeholder="비밀번호 확인"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder='비밀번호 확인.'"
                        autoFocus
                    />

                    <button type="submit">회원가입</button>

                    <p className="login-link">
                        이미 회원이신가요? <Link to="/login">로그인</Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Signup;
