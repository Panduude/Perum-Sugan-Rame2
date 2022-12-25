import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/authSlice";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

  return (
    <div className="loginpage">
      <div className="pembungkus">
        <div className="pembungkus-form">
          <div className="title">
            <span>Login</span>
            <div className="garis"></div>
          </div>

          <form action="" method="">
            <div className="input-field">
              <input
                className="input-form"
                name="email"
                type="email"
                placeholder="Enter email.."
                required
              />
            </div>
            <div className="input-field">
              <input
                name="pass"
                className="input-form"
                type="password"
                placeholder="Enter password.."
                required
              />
            </div>
            <div className="input-field button">
              <button
                type="button"
                className="button-form"
                style={{
                  backgroundColor: "#00966c",
                  padding: "15px",
                  color: "white",
                  borderRadius: "15px",
                  marginTop: "8px"
                }}
              >
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
