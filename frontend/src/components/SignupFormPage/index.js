import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';
import { Link } from "react-router-dom";

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ firstName, lastName, email, password }))
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
    // }
    // return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <>
    <div className="form">

      <h1 className="form-title">Create Account</h1>
      <form onSubmit={handleSubmit}>
        <ul className="errorbox">
          {errors.map((error) => <li className="errors" key={error}>{error}</li>)}
        </ul>
        <div className="first-name">
          <label>
            FIRST NAME
            <br/>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              />
          </label>
        </div>

        <div className="last-name">

          <label>
            LAST NAME
            <br/>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              />
          </label>
          </div>

        <div className="email">

          <label>
            EMAIL
            <br/>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
        <button className="login" type="submit">Sign Up</button>
      </form>
    </div>
    </>
  );
}

export default SignupFormPage;