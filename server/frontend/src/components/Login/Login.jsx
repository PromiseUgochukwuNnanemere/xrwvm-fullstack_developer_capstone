import React, { useState } from 'react';
import "./Login.css";
import Header from '../Header/Header';

const Login = ({ onClose }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(true);

  const login_url = window.location.origin + "/djangoapp/login";

  const login = async (e) => {
    e.preventDefault();

    // Function to retrieve CSRF token from cookies
    function getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    }

    // Get CSRF token from cookie
    const csrftoken = getCookie('csrftoken');

    const res = await fetch(login_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrftoken // Include CSRF token in headers
      },
      body: JSON.stringify({
        "userName": userName,
        "password": password
      }),
    });

    const json = await res.json();
    if (json.status != null && json.status === "Authenticated") {
      sessionStorage.setItem('username', json.userName);
      setOpen(false);
    } else {
      alert("The user could not be authenticated.")
    }
  };

  if (!open) {
    window.location.href = "/";
  };

  return (
    <div>
      <Header />
      <div onClick={onClose}>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className='modalContainer'
        >
          <form className="login_panel" style={{}} onSubmit={login}>
            <div>
              <span className="input_field">Username </span>
              <input type="text" name="username" placeholder="Username" className="input_field" onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div>
              <span className="input_field">Password </span>
              <input name="psw" type="password" placeholder="Password" className="input_field" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
              <input className="action_button" type="submit" value="Login" />
              <input className="action_button" type="button" value="Cancel" onClick={() => setOpen(false)} />
            </div>
            <a className="loginlink" href="/register">Register Now</a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
