
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from "../../../rtkq/services/userAuthApi";
//import "./Login.css";
import { storeToken } from '../../../rtkq/services/localStorageService';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const [loginUser, { isLoading }] = useLoginUserMutation();

  const toggle = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(false); // Clear previous error messages

    try {
      const res = await loginUser({ email, password });

      if (res.error) {
        console.log("Login error:", res.error);
        setError(true); // Show an error message
      }

      if (res.data) {
        console.log("Login successful:", res.data);
        storeToken(res.data.token);
        navigate('/profile');
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <>
      <section className="Login" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container mt-7">
          <div className="Login-content">
            <div className="Login-h" ></div>
            <h2 className="pb-7" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>Login</h2>
            <form className="Login-form" onSubmit={handleLogin}>
              <div className="login-form-group">
                <label htmlFor="email"></label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{ 
                    borderRadius: '50px',
                    padding: '7px 10px',
                    background: '#fff',
                    width: '45%',
                    margin: 'auto',
                    display: 'flex',
                    alignitems: 'center',
                    justifycontent: 'space-between'
                  }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password"></label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  autoComplete="off"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{ 
                    borderRadius: '50px',
                    padding: '7px 10px',
                    background: '#fff',
                    width: '45%',
                    margin: 'auto',
                    display: 'flex',
                    alignitems: 'center',
                    justifycontent: 'space-between'
                  }}
                />
              </div>

              {error && (
  <span
    style={{
      color: 'red',
      fontWeight: 'bold',
      textAlign: 'center',
      display: 'block', // Ensures the span takes full width
      margin: '10px 0', // Adds space above and below
    }}
  >
    Wrong Email or Password
  </span>
)}


<div className="checkbox" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '10px 0' }}>
  <input
    type="checkbox"
    id="showPassword"
    checked={showPassword}
    onChange={toggle}
  />
  <label htmlFor="showPassword" style={{ marginLeft: '5px' }}>Show Password</label>
</div>



              {/* <div>
                <a href="/signup" className="hover:text-blue-700 hover:text-sm">Don't have an account? Sign Up</a>
              </div> */}

<div className="form-group form-button" style={{ display: 'flex', justifyContent: 'center' }}>
                <button
                  type=""
                  className="btn"
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "Login"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
