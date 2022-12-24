import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/authSlice";

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
        <div>
          <div className="container">
            <div className="forms">
              <div className="form login">
                <span className="title">Login</span>
  
                <form action="" method="">
                  <div className="input-field">
                    <input
                      name="email"
                      type="email"
                      placeholder="Enter email.."
                      required
                    />
                    <i className="uil uil-envelope icon" />
                  </div>
                  <div className="input-field">
                    <input
                      name="pass"
                      type="password"
                      placeholder="Enter password.."
                      required
                    />
                    <i className="uil uil-lock icon" />
                  </div>
  
                  <div className="input-field button">
                    <button type="button">LOGIN</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Login;