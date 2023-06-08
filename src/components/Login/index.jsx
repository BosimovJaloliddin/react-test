import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const loginRef = useRef();
  const pwRef = useRef();
  const onLogin = () => {
    if (
      loginRef.current.value === "front" &&
      Number(pwRef.current.value) === 1234
    ) {
      localStorage.setItem("token", true);
      navigate("/info");
    } else {
      alert("Parol yoki login xato");
    }
  };
  return (
    <div>
      <input ref={loginRef} type="text" placeholder="Login" />
      <input ref={pwRef} type="number" placeholder="Password" />
      <button onClick={onLogin}>Login</button>
    </div>
  );
};

export default Login;
