import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if, e.g., server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  };

  return (
    <>
    <div className="form">

      <h1 className="form-title">Login</h1>
      <form onSubmit={handleSubmit}>
        <ul className="errorbox">
          {errors.map(error => <li className="errors" key={error}>{error}</li>)}
        </ul>

        <div className="email">
          <label>
            EMAIL
            <br/>
            <input
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
              />
          </label>
        </div>

        <div className="password">
          <label>
            PASSWORD
            <br/>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              />
          </label>
        </div>

          <button className="login" type="submit">Sign In</button>
          <button className="demo" type="submit" onClick={() => dispatch(sessionActions.login({credential:"demo-lition@gmail.com", password:"password"}))}>Demo</button>

      </form>

      <div className="signup">
        <Link to="/signup" style={{ textDecoration: 'none' }}><p>Create Account</p></Link>
      </div>
 
    </div>
    </>
  );
}

export default LoginFormPage;