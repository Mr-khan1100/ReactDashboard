import React, { useState }  from "react";
import AppLogo from "../assets/MyLogo.png";
import { Link, useNavigate } from "react-router-dom";
import '../componentStyling/SignIn.css'

function SignUp() {
    const [hide, setHide] = useState(true)
    const navigate = useNavigate();
    const handlePasswordHide = (event) =>{
        event.preventDefault(); // Prevent page reload
        setHide(!hide)
    }
    const handSubmit = (event) => {
        event.preventDefault();
        navigate('/');
    }
  return (
    <div className="SignInContainer">
      <div className="header">
        <Link to={"/"} className="headerContainer">
          <img src={AppLogo} alt="AppLogo" className="headerLogo" />
          <h2 className="headerLabel">Nova</h2>
        </Link>
      </div>
      <div className="formContainer">
        <div className="formHeader">
          <h3 className="SignInText">Sign up</h3>
          <h6 className="SingUpLink">
            Have an account?
            {/* <Link to={"/singup"}>Create an account</Link> */}
            <a href="/signin" className="createAccountAnchor">Sign in</a>
          </h6>
        </div>
        <form className="formContentContainer" onSubmit={handSubmit}>
          <div className="inputContainer">
          <div className="emailContainer">
              <input type="text" name="text" required className="emailInput" placeholder="Enter your name" />
            </div>
            <div className="emailContainer">
              <input type="email" name="email" required className="emailInput" placeholder="Enter your email" />
            </div>
            <div className="passwordContainer">
              <input
                type={`${hide === true ? "password" : "text"}`}
                name="password"
                required
                className="passwordInput"
                placeholder="Enter your password"
              />
              <div className="hideIconContainer">
                <button onClick={handlePasswordHide}>
                  {hide === true ? (<svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    class="iconify iconify--material-symbols-light MuiBox-root css-0"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M14.579 8.921q.494.495.822 1.314t.266 1.602q0 .202-.14.339q-.14.138-.342.138t-.34-.138t-.137-.34q.067-.669-.142-1.25q-.21-.58-.635-1.005t-1.025-.64t-1.256-.13q-.202.02-.359-.111t-.176-.333t.109-.358t.33-.176q.796-.1 1.634.218t1.39.87M12 6q-.59 0-1.165.066q-.576.067-1.14.205q-.214.056-.388-.057t-.241-.303q-.068-.207.039-.38t.314-.229q.633-.163 1.278-.233Q11.342 5 12 5q3.021 0 5.58 1.55t3.962 4.216q.1.18.14.354t.041.38t-.037.38t-.138.354q-.47.924-1.122 1.712t-1.434 1.456q-.165.14-.363.12q-.198-.022-.333-.199q-.134-.177-.106-.368q.027-.192.193-.332q.754-.652 1.369-1.433q.615-.78 1.048-1.69q-1.25-2.525-3.613-4.012T12 6m0 12q-2.966 0-5.452-1.562t-3.99-4.128q-.125-.181-.178-.39t-.053-.42t.05-.417t.175-.392q.615-1.039 1.364-1.97q.75-.933 1.734-1.644L3.21 4.631q-.14-.147-.147-.347q-.007-.201.153-.361q.159-.16.353-.16t.354.16l16.154 16.154q.14.14.153.341t-.153.366q-.16.16-.354.16t-.354-.16l-3.538-3.526q-.894.41-1.862.576Q13.002 18 12 18M6.358 7.785q-1.033.707-1.835 1.646q-.802.938-1.323 2.069q1.25 2.525 3.613 4.013T12 17q.789 0 1.562-.11q.773-.111 1.504-.398l-1.632-1.642q-.332.19-.688.247t-.746.057q-1.529 0-2.591-1.063T8.346 11.5q0-.39.067-.746t.237-.688zm4.354 4.354"
                    ></path>
                  </svg>) :
                  (<svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    class="iconify iconify--material-symbols-light MuiBox-root css-0"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12.005 15.154q1.524 0 2.586-1.067t1.063-2.591t-1.067-2.587t-2.591-1.063t-2.587 1.067t-1.063 2.592t1.067 2.586t2.592 1.063M12 14.2q-1.125 0-1.912-.787T9.3 11.5t.788-1.912T12 8.8t1.913.788t.787 1.912t-.787 1.913T12 14.2m0 3.8q-2.966 0-5.44-1.57t-3.996-4.114q-.125-.207-.178-.407t-.053-.41t.053-.41t.178-.405Q4.087 8.14 6.56 6.57T12 5t5.44 1.57t3.997 4.115q.125.205.178.405t.052.411t-.052.41t-.178.405q-1.523 2.545-3.997 4.115T12 18m0-1q2.825 0 5.188-1.487T20.8 11.5q-1.25-2.525-3.613-4.012T12 6T6.813 7.488T3.2 11.5q1.25 2.525 3.613 4.013T12 17"
                    ></path>
                  </svg>)}
                </button>
              </div>
            </div>
          </div>
          <div className="belowInputContainer">
            <label>
              <span>
                <input type="checkbox" />
              </span>
              <h6>Accept <a href=" ">terms</a> & <a href=" ">privacy policy</a></h6>
            </label>
          </div>
          <button className="SignInButton" type="submit">Sign up</button>
          <div className="signInOption">
            <span>
              <h6>or sign up with</h6>
            </span>
          </div>
          <div className="socialMediaSignInContainer">
            <div className="googleSignIn">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  class="iconify iconify--devicon MuiBox-root css-0"
                  width="1em"
                  height="1em"
                  viewBox="0 0 128 128"
                >
                  <path
                    fill="#fff"
                    d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.3 74.3 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.2 36.2 0 0 1-13.93 5.5a41.3 41.3 0 0 1-15.1 0A37.2 37.2 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.3 38.3 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.3 34.3 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.2 61.2 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38"
                  ></path>
                  <path
                    fill="#e33629"
                    d="M44.59 4.21a64 64 0 0 1 42.61.37a61.2 61.2 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.3 34.3 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21"
                  ></path>
                  <path
                    fill="#f8bd00"
                    d="M3.26 51.5a63 63 0 0 1 5.5-15.9l20.73 16.09a38.3 38.3 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9"
                  ></path>
                  <path
                    fill="#587dbd"
                    d="M65.27 52.15h59.52a74.3 74.3 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68"
                  ></path>
                  <path
                    fill="#319f43"
                    d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.2 37.2 0 0 0 14.08 6.08a41.3 41.3 0 0 0 15.1 0a36.2 36.2 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.7 63.7 0 0 1 8.75 92.4"
                  ></path>
                </svg>
              </span>
              <p>Google</p>
            </div>
            <div className="facebookSignIn">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  class="iconify iconify--logos MuiBox-root css-0"
                  width="1em"
                  height="1em"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="#1877F2"
                    d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
                  ></path>
                  <path
                    fill="#FFF"
                    d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"
                  ></path>
                </svg>
              </span>
              <p>Facebook</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
