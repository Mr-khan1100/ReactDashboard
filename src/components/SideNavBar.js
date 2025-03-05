import React, { useState } from "react";
import "../componentStyling/SideNavBar.css";
import { useNavigate } from "react-router-dom";
function SideNavBar({showSideNav}) {

    const navigate = useNavigate();
    const [showSignContainer, setShowSignContainer] = useState(false);

    const toggleSignContainer = () => {
        setShowSignContainer(!showSignContainer);
    };
  return (
    <div className={`sideNavSection ${showSideNav ? 'open' : ''}`}>
      <div className="sideNavContainer">
        <ul className="UlList">
          <li className="ElementList active">
            <a tabIndex="0" href="/">
              <div className="MultiListIconRoot css-primary">
                <svg
                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-8cqusc"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 2em 2em"
                  width="2em"
                  height="2em"
                  fill="none"
                >
                  <mask
                    id="mask0_8121_67"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="2em"
                    height="2em"
                  >
                    <rect width="2em" height="2em" fill="white"></rect>
                  </mask>
                  <g mask="url(#mask0_8121_67)">
                    <path
                      d="M13.6704 7.84579L14.0416 13.3657L14.2258 16.1401C14.2278 16.4255 14.2725 16.7089 14.3588 16.9813C14.5813 17.5101 15.1168 17.8461 15.6993 17.8227L24.5756 17.242C24.96 17.2357 25.3312 17.3795 25.6074 17.6417C25.8377 17.8603 25.9864 18.1461 26.0333 18.4536L26.049 18.6403C25.6817 23.7265 21.9461 27.9689 16.8704 29.064C11.7946 30.1591 6.58965 27.8457 4.08145 23.3799C3.35836 22.0824 2.90671 20.6564 2.75301 19.1853C2.68881 18.7499 2.66055 18.31 2.66848 17.87C2.66055 12.417 6.5438 7.70262 11.9796 6.5661C12.6339 6.46422 13.2752 6.81057 13.5376 7.40738C13.6054 7.54559 13.6502 7.69362 13.6704 7.84579Z"
                      fill="currentColor"
                    ></path>
                    <path
                      opacity="0.4"
                      d="M29.3335 13.083L29.3242 13.1264L29.2973 13.1896L29.301 13.3631C29.2871 13.5929 29.1983 13.8139 29.0455 13.9926C28.8862 14.1786 28.6686 14.3053 28.429 14.3545L28.2829 14.3745L18.0418 15.0381C17.7011 15.0717 17.3619 14.9618 17.1087 14.7359C16.8975 14.5475 16.7626 14.2934 16.7245 14.0195L16.0371 3.79334C16.0251 3.75877 16.0251 3.72129 16.0371 3.6867C16.0465 3.40482 16.1706 3.13838 16.3817 2.9469C16.5926 2.75542 16.8731 2.65486 17.1602 2.66769C23.2401 2.82237 28.3499 7.19431 29.3335 13.083Z"
                      fill="currentColor"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="MultiListTextRoot primary">Dashboard</div>
            </a>
          </li>
          <li className="ElementList secondary" onClick={toggleSignContainer}>
            <div className="AuthNav">
              <div className="MultiListIconRoot css-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  class="iconify iconify--material-symbols MuiBox-root css-idm3bz"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 19.9q2.425-.75 4.05-2.962T17.95 12H12V4.125l-6 2.25v5.175q0 .175.05.45H12zm0 2q-.175 0-.325-.025t-.3-.075Q8 20.675 6 17.638T4 11.1V6.375q0-.625.363-1.125t.937-.725l6-2.25q.35-.125.7-.125t.7.125l6 2.25q.575.225.938.725T20 6.375V11.1q0 3.5-2 6.538T12.625 21.8q-.15.05-.3.075T12 21.9"
                  ></path>
                </svg>
              </div>
              <div className="MultiListTextRoot secondary">Authentication</div>
              <div className="dropDownIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  class="iconify iconify--ph MuiBox-root css-0"
                  width="1em"
                  height="1em"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d={showSignContainer === false ?("m216.49 104.49l-80 80a12 12 0 0 1-17 0l-80-80a12 12 0 0 1 17-17L128 159l71.51-71.52a12 12 0 0 1 17 17Z"):("m216.49 151.51l-80-80a12 12 0 0 0-17 0l-80 80a12 12 0 0 0 17 17L128 97l71.51 71.52a12 12 0 0 0 17-17Z")}
                  ></path>
                </svg>
              </div>
            </div>
          </li>
          {showSignContainer && (<div className='signContainer'>
                <ul className="signUL">
                <li className="signList" onClick={() => navigate("/signin")}>
                    <a
                    className="signLink"
                    tabindex="0"
                    href="/signin"
                    >
                    <div class="signText">
                        Sign In
                    </div>
                    </a>
                </li>
                <li className="signList" onClick={() => navigate("/signup")}>
                    <a
                    className="signLink"
                    tabindex="0"
                    href="/signup"
                    >
                    <div class="signText">
                        Sign Up
                    </div>
                    </a>
                </li>
                </ul>
            </div>)}
          <li className="ElementList">
            <a tabIndex="0" href="/">
              <div className="MultiListIconRoot css-tertiary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  class="iconify iconify--ri MuiBox-root css-idm3bz"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M3 12h2v9H3zm16-4h2v13h-2zm-8-6h2v19h-2z"
                  ></path>
                </svg>
              </div>
              <div className="MultiListTextRoot">Leaderboard</div>
            </a>
          </li>
          <li className="ElementList">
            <a tabIndex="0" href="/">
              <div className="MultiListIconRoot css-tertiary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  class="iconify iconify--ph MuiBox-root css-idm3bz"
                  width="2em"
                  height="2em"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M228.61 60.16A6 6 0 0 0 224 58H61l-6.37-35.07a6 6 0 0 0-5.9-4.93H24a6 6 0 0 0 0 12h19.72l25.81 141.94a21.93 21.93 0 0 0 6.24 11.77a26 26 0 1 0 38.12 6.29h52.22A26 26 0 1 0 188 178H91.17a10 10 0 0 1-9.84-8.21L77.73 150H196.1a22 22 0 0 0 21.65-18.06l12.15-66.87a6 6 0 0 0-1.29-4.91M106 204a14 14 0 1 1-14-14a14 14 0 0 1 14 14m96 0a14 14 0 1 1-14-14a14 14 0 0 1 14 14m3.94-74.21a10 10 0 0 1-9.84 8.21H75.55L63.19 70h153.62Z"
                  ></path>
                </svg>
              </div>
              <div className="MultiListTextRoot">Orders</div>
            </a>
          </li>
          <li className="ElementList">
            <a tabIndex="0" href="/">
              <div className="MultiListIconRoot css-tertiary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  class="iconify iconify--mdi MuiBox-root css-idm3bz"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19 6h-2c0-2.8-2.2-5-5-5S7 3.2 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-7-3c1.7 0 3 1.3 3 3H9c0-1.7 1.3-3 3-3m7 17H5V8h14zm-7-8c-1.7 0-3-1.3-3-3H7c0 2.8 2.2 5 5 5s5-2.2 5-5h-2c0 1.7-1.3 3-3 3"
                  ></path>
                </svg>
              </div>
              <div className="MultiListTextRoot">Products</div>
            </a>
          </li>
          <li className="ElementList">
            <a tabIndex="0" href="/">
              <div className="MultiListIconRoot css-tertiary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  class="iconify iconify--ph MuiBox-root css-idm3bz"
                  width="2em"
                  height="2em"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M232 208a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V48a8 8 0 0 1 16 0v94.37L90.73 98a8 8 0 0 1 10.07-.38l58.81 44.11L218.73 90a8 8 0 1 1 10.54 12l-64 56a8 8 0 0 1-10.07.38l-58.81-44.09L40 163.63V200h184a8 8 0 0 1 8 8"
                  ></path>
                </svg>
              </div>
              <div className="MultiListTextRoot">Sales Report</div>
            </a>
          </li>
          <li className="ElementList">
            <a tabIndex="0" href="/">
              <div className="MultiListIconRoot css-tertiary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  class="iconify iconify--mdi MuiBox-root css-idm3bz"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.2L4 17.2V4h16zm-3-5h-2V9h2m-4 2h-2V9h2m-4 2H7V9h2"
                  ></path>
                </svg>
              </div>
              <div className="MultiListTextRoot">Messages</div>
            </a>
          </li>
          <li className="ElementList secondary">
            <a tabIndex="0" href="/">
              <div className="MultiListIconRoot css-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  class="iconify iconify--fluent MuiBox-root css-idm3bz"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12.012 2.25c.734.008 1.465.093 2.182.253a.75.75 0 0 1 .582.649l.17 1.527a1.384 1.384 0 0 0 1.927 1.116l1.4-.615a.75.75 0 0 1 .85.174a9.8 9.8 0 0 1 2.205 3.792a.75.75 0 0 1-.272.825l-1.241.916a1.38 1.38 0 0 0 0 2.226l1.243.915a.75.75 0 0 1 .272.826a9.8 9.8 0 0 1-2.204 3.792a.75.75 0 0 1-.849.175l-1.406-.617a1.38 1.38 0 0 0-1.926 1.114l-.17 1.526a.75.75 0 0 1-.571.647a9.5 9.5 0 0 1-4.406 0a.75.75 0 0 1-.572-.647l-.169-1.524a1.382 1.382 0 0 0-1.925-1.11l-1.406.616a.75.75 0 0 1-.85-.175a9.8 9.8 0 0 1-2.203-3.796a.75.75 0 0 1 .272-.826l1.243-.916a1.38 1.38 0 0 0 0-2.226l-1.243-.914a.75.75 0 0 1-.272-.826a9.8 9.8 0 0 1 2.205-3.792a.75.75 0 0 1 .85-.174l1.4.615a1.387 1.387 0 0 0 1.93-1.118l.17-1.526a.75.75 0 0 1 .583-.65q1.074-.238 2.201-.252m0 1.5a9 9 0 0 0-1.354.117l-.11.977A2.886 2.886 0 0 1 6.526 7.17l-.899-.394A8.3 8.3 0 0 0 4.28 9.092l.797.587a2.88 2.88 0 0 1 .001 4.643l-.799.588c.32.842.776 1.626 1.348 2.322l.905-.397a2.882 2.882 0 0 1 4.017 2.318l.109.984c.89.15 1.799.15 2.688 0l.11-.984a2.88 2.88 0 0 1 4.018-2.322l.904.396a8.3 8.3 0 0 0 1.348-2.318l-.798-.588a2.88 2.88 0 0 1-.001-4.643l.797-.587a8.3 8.3 0 0 0-1.348-2.317l-.897.393a2.884 2.884 0 0 1-4.023-2.324l-.109-.976a9 9 0 0 0-1.334-.117M12 8.25a3.75 3.75 0 1 1 0 7.5a3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5"
                  ></path>
                </svg>
              </div>
              <div className="MultiListTextRoot secondary">Settings</div>
            </a>
          </li>
          <li className="ElementList secondary">
            <a tabIndex="0" href="/">
              <div className="MultiListIconRoot css-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  class="iconify iconify--humbleicons MuiBox-root css-idm3bz"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 12h-9.5m7.5 3l3-3l-3-3m-5-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-1"
                  ></path>
                </svg>
              </div>
              <div className="MultiListTextRoot secondary">Sign Out</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideNavBar;
