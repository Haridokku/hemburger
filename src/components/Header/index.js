import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const Header = () => (
  <>
    <nav className="headerContainer">
      <div className="iconsContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="logo"
        />
        <Popup
          modal
          trigger={
            <button
              type="button"
              className="button1"
              data-testid="hamburgerIconButton"
            >
              <GiHamburgerMenu className="logo" />
            </button>
          }
        >
          {close => (
            <>
              <div className="viewContainer">
                <div className="buttonContainer">
                  <button
                    type="button"
                    className="trigger-button"
                    data-testid="closeButton"
                    onClick={() => close()}
                  >
                    <IoMdClose className="logo" />{' '}
                  </button>
                </div>
                <div className="menuDetails">
                  <Link to="/">
                    <AiFillHome className="logo" />
                    <span className="text">Home</span>
                  </Link>
                  <Link to="/about">
                    <BsInfoCircleFill className="logo" />
                    <span className="text">About</span>
                  </Link>
                </div>
              </div>
            </>
          )}
        </Popup>
      </div>
    </nav>
    <hr className="horizontal-line" />
  </>
)

export default Header
