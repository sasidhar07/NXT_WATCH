import React from 'react'
import Popup from 'reactjs-popup'
import './index.css'
import {withRouter} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import Cookies from 'js-cookie'
import {BiSun, BiExit} from 'react-icons/bi'
import {GiHamburgerMenu} from 'react-icons/gi'
import NxtContext from '../../NxtContext'
import {
  LogoutPopupContainer,
  LogoutConfirmationMsg,
  LogoutConfirmButton,
  LogoutButtonContainer,
  LogoutCloseButton,
  NavEle,
  ExitButton,
  HameBurgerButton,
  NavEleForSmall,
  LogoutButton,
} from '../CssInJS'

const Header = props => {
  const logout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <NxtContext.Consumer>
      {value => {
        const {Theme, changeFilter, changeTheme} = value
        const changeThe = () => {
          changeTheme()
        }

        const showFilter = () => {
          changeFilter()
        }

        const webLogoUrl =
          Theme === 'light'
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        return (
          <>
            <NavEle color={Theme}>
              <img
                src={webLogoUrl}
                alt="website logo"
                className="websiteLogo"
              />
              <div className="navCard">
                {Theme === 'light' ? (
                  <button
                    className="moonButton"
                    onClick={changeThe}
                    type="button"
                    data-testid="theme"
                  >
                    <FaMoon className="moonLogo" />
                  </button>
                ) : (
                  <button
                    className="moonButton"
                    onClick={changeThe}
                    type="button"
                    data-testid="theme"
                  >
                    <BiSun className="moonLogo1" />
                  </button>
                )}
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  className="profileLogo"
                  alt="profile"
                />
                <Popup
                  model
                  trigger={<LogoutButton color={Theme}>Logout</LogoutButton>}
                >
                  {close => (
                    <LogoutPopupContainer
                      darkTheme={Theme === 'light'}
                      style={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                      }}
                    >
                      <LogoutConfirmationMsg darkTheme={Theme === 'light'}>
                        Are you sure you want to logout?
                      </LogoutConfirmationMsg>
                      <LogoutButtonContainer>
                        <LogoutCloseButton
                          onClick={() => close()}
                          type="button"
                        >
                          Cancel
                        </LogoutCloseButton>
                        <LogoutConfirmButton onClick={logout} type="button">
                          Confirm
                        </LogoutConfirmButton>
                      </LogoutButtonContainer>
                    </LogoutPopupContainer>
                  )}
                </Popup>
              </div>
            </NavEle>
            <NavEleForSmall color={Theme}>
              <img
                src={webLogoUrl}
                alt="webSiteLogoHome"
                className="websiteLogo"
              />
              <div className="navCard">
                {Theme === 'light' ? (
                  <button
                    className="moonButton"
                    onClick={changeThe}
                    type="button"
                    data-testid="theme"
                  >
                    <FaMoon className="moonLogo" />
                  </button>
                ) : (
                  <button
                    className="moonButton"
                    onClick={changeThe}
                    data-testid="theme"
                    type="button"
                  >
                    <BiSun className="moonLogo1" />
                  </button>
                )}
                <HameBurgerButton
                  onClick={showFilter}
                  color={Theme}
                  type="button"
                >
                  <GiHamburgerMenu />
                </HameBurgerButton>
                <Popup
                  modal
                  trigger={
                    <ExitButton type="button" color={Theme}>
                      <BiExit />
                    </ExitButton>
                  }
                >
                  {close => (
                    <LogoutPopupContainer darkTheme={Theme === 'light'}>
                      <LogoutConfirmationMsg darkTheme={Theme === 'light'}>
                        Are you sure, you want to logout
                      </LogoutConfirmationMsg>
                      <LogoutButtonContainer>
                        <LogoutCloseButton
                          onClick={() => close()}
                          type="button"
                        >
                          Cancel
                        </LogoutCloseButton>
                        <LogoutConfirmButton onClick={logout} type="button">
                          Confirm
                        </LogoutConfirmButton>
                      </LogoutButtonContainer>
                    </LogoutPopupContainer>
                  )}
                </Popup>
              </div>
            </NavEleForSmall>
          </>
        )
      }}
    </NxtContext.Consumer>
  )
}

export default withRouter(Header)
