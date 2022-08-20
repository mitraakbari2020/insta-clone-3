import { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ isLoggedIn, setIsLoggedIn, setUser }) => {
  const [showError, setShowError] = useState(false);
  const userLogin = [
    {
      'email': 'akbari@gmail.com',
      'password': '1234567akbari',
      'name': 'Mitra Akbari'
    },
    {
      'email': 'amirvafa@gmail.com',
      'password': '1234567amirvafa',
      'name': 'Milad Amirvafa'
    },
    {
      'email': 'akbari2@gmail.com',
      'password': '1234567akbari2',
      'name': 'Mitra2 Akbari'
    },
    {
      'email': 'akbari3@gmail.com',
      'password': '123',
      'name': 'Mitra3 Akbari'
    },
    {
      'email': 'akbari4@gmail.com',
      'password': '1234567akbari4',
      'name': 'Mitra4 Akbari'
    },
  ]
  const loginSubmit = (e) => {
    e.preventDefault();
    var emailValue = e.target['email'].value
    var passwordValue = e.target['password'].value
    userLogin.forEach((userData) => {
      if (emailValue === userData.email && passwordValue === userData.password) {
        setUser(userData.name);
        setIsLoggedIn(true);
        console.log("here");
        // <Navigate to="https://google.com" replace={true} state={{ isLoggedIn: true }} />
        // window.location.href = window.location.origin + "/"
      }
    })

  }

  return (
    <>
      {


        isLoggedIn && <div className="login-redirect">
          <style>
            {`
            .login-redirect{
              height: 100vh;
              width: 100%;
              text-align: center;
              display: flex;
              justify-content: center;
              align-items: stretch;
              align-content: center;
              flex-direction: row;
              flex-wrap: wrap;
            }
          `}
          </style>
          You logged in successfuly, Click <Link to="/">Here</Link> to continue!
        </div>

      }
      {
        !isLoggedIn &&
        <>
          <style>
            {`
          @import url("https://fonts.googleapis.com/css?family=Pacifico&display=swap");
          *,
          *::before,
          *::after {
            margin: 0;
            padding: 0;
            box-sizing: inherit;
          }
          
          html {
            font-size: 10px;
            box-sizing: border-box;
          }
          
          /*Smartphone image*/
          img {
            width: 100%;
            height: 100%;
            max-width: 100%;
          }
          
          /*link styling*/
          a {
            text-decoration: none;
          }
          
          /*Logo styling*/
          h1 {
            font-family: "Pacifico", cursive;
            font-size: 40px;
          }
          
          /*body background color*/
          body {
            background-color: #fafafa;
          }
          
          /*Wrapper is like a container of body*/
          #wrapper {
            width: 100%;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-top: 1rem;
          }
          
          .container {
            width: 100%;
            max-width: 93.5rem;
            margin: 3rem auto 0;
          }
          
          #wrapper > .container {
            display: flex;
            padding: 0 8rem;
          }
          
          /*smartphone image*/
          .phone-app-demo {
            height: 61.8rem;
            background: url("https://uditsolutions.in/babamachine/wp-content/uploads/2019/08/phone.png")
              center no-repeat;
            flex: 1;
          }
          
          /*form styling*/
          .form-data {
            width: 100%;
            max-width: 35rem;
            margin-top: 3rem;
          }
          
          .form-data form {
            background-color: #fff;
            border: 2px solid #eee;
            display: flex;
            flex-direction: column;
            padding: 2rem 4rem;
            text-align: center;
          }
          
          /*logo again styling*/
          .logo h1 {
            /*width: 17.5rem;*/
            margin-bottom: 2.5rem;
          }
          
          /*form input styling*/
          .form-data form input {
            padding: 0.8rem;
            margin-bottom: 0.5rem;
            border: 2px solid #eee;
            border-radius: 0.4rem;
          }
          
          .form-btn {
            margin: 1rem 0 1.5rem;
            height: 3rem;
            background-color: #3897f0;
            font-size: 1.4rem;
            color: #fff;
            font-weight: bold;
            border: none;
            border-radius: 0.4rem;
            cursor: pointer;
          }
          
          /*OR font styling*/
          .has-separator {
            font-size: 1.3rem;
            color: #999999;
            text-transform: uppercase;
            position: relative;
            margin-bottom: 2.5rem;
          }
          
          .has-separator::before,
          .has-separator::after {
            content: "";
            position: absolute;
            background-color: #eee;
            width: 40%;
            height: 1.5px;
            top: 50%;
            transform: translateY(-50%);
          }
          
          .has-separator::before {
            left: 0;
          }
          
          .has-separator::after {
            right: 0;
          }
          
          /*FACEBOOK ligin text styling*/
          .facebook-login {
            font-size: 1.4rem;
            font-weight: bold;
            color: #385185;
            margin-bottom: 2.5rem;
          }
          
          .facebook-login {
            font-size: 1.4rem;
            font-weight: bold;
            color: #385185;
            margin-bottom: 2.5rem;
          }
          
          .facebook-login i {
            font-size: 2rem;
            margin-right: 0.7rem;
          }
          
          /*password reset styling*/
          .password-reset {
            font-size: 1.2rem;
            color: #003569;
          }
          
          /*signup text styling*/
          .sign-up {
            text-align: center;
            font-size: 1.4rem;
            color: #262626;
            padding: 2rem 0;
            background-color: #fff;
            border: 2px solid #eee;
            margin: 1rem 0;
          }
          
          .sign-up {
            text-align: center;
            font-size: 1.4rem;
            color: #262626;
            padding: 2rem 0;
            background-color: #fff;
            border: 2px solid #eee;
            margin: 1rem 0;
          }
          
          .sign-up a {
            color: #3897f0;
            font-weight: bold;
          }
          
          /*Play stor and App store image styling*/
          .get-the-app {
            font-size: 1.4rem;
            text-align: center;
          }
          
          .get-the-app span {
            display: block;
            margin: 2rem 0;
            color: #262626;
          }
          
          .badge {
            width: 100%;
            display: flex;
            justify-content: center;
          }
          
          .badge img {
            max-width: 14rem;
            cursor: pointer;
          }
          
          .badge img:first-child {
            margin-right: 1rem;
          }
          
          /*Footer link styling*/
          footer {
            padding: 5rem 0;
          }
          
          footer .container {
            display: flex;
            justify-content: space-between;
            font-weight: bold;
            text-transform: uppercase;
            font-size: 1.3rem;
            flex-wrap: wrap;
            margin-top: 0;
          }
          
          .footer-nav ul {
            display: flex;
            flex-wrap: wrap;
            list-style: none;
          }
          
          .footer-nav ul li {
            margin-right: 1.6rem;
          }
          
          .footer-nav ul li a {
            color: #003569;
          }
          
          .copyright-notice {
            color: #999999;
          }
          .alert {
              margin: 10px 0;
              background: red;
              padding: 5px;
              border-radius: 4px;
              color: white;
          }
          
          /*responsive styling*/
          @media (max-width: 900px) {
            .phone-app-demo {
              display: none;
            }
          
            .form-data {
              margin: 0 auto;
            }
          
            #wrapper > .container {
              padding: 0;
            }
          
            footer .container {
              padding: 0 2rem;
              justify-content: center;
            }
          
            .footer-nav ul {
              justify-content: center;
            }
          
            .footer-nav ul li {
              margin-bottom: 1rem;
            }
          }
          
          @media (max-width: 450px) {
            #wrapper {
              padding-top: 0;
            }
            .form-data form {
              background-color: transparent;
              border: none;
              padding: 0 2rem;
            }
            .sign-up {
              background-color: transparent;
              border: none;
              margin: 4rem 0;
            }
            footer {
              padding-bottom: 2rem;
            }
          }
          `}
          </style>

          <div id="wrapper">
            <div className="container">
              <div className="phone-app-demo" />
              <div className="form-data">
                <form action="" onSubmit={loginSubmit}>
                  <div className="logo">
                    <h1>Instagram</h1>
                  </div>
                  {
                    showError &&
                    <div id="error" className="alert">
                      Invalid Email or password
                    </div>
                  }
                  <input
                    name="email"
                    type="text"
                    placeholder="Phone number, username, or email"
                  />
                  <input name="password" type="password" placeholder="Password" />
                  <button className="form-btn" type="submit">
                    Log in
                  </button>
                  <span className="has-separator">Or</span>
                  <a href="#" className="facebook-login">
                    <i className="fab fa-facebook" /> Log in with Facebook
                  </a>
                  <a className="password-reset" href="#">
                    Forgot password?
                  </a>
                </form>
                <div className="sign-up">
                  Don't have an account? <a href="#">Sign up</a>
                </div>
                <div className="get-the-app">
                  <span>Get the app</span>
                  <div className="badge">
                    <img
                      src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                      alt="android App"
                    />
                    <img
                      src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                      alt="ios app"
                    />
                  </div>
                </div>
              </div>
            </div>

            <footer>
              <div className="container">
                <nav className="footer-nav">
                  <ul>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Support</a>
                    </li>
                    <li>
                      <a href="#">Jobs</a>
                    </li>
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                    <li>
                      <a href="#">Terms</a>
                    </li>
                    <li>
                      <a href="#">Profiles</a>
                    </li>
                    <li>
                      <a href="#">Languages</a>
                    </li>
                  </ul>
                </nav>
                <div className="copyright-notice">&copy; 2019 Complaints</div>
              </div>
            </footer>
          </div>
        </>
      }
    </>
  )
}

export default Login