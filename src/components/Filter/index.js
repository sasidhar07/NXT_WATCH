import {
  AiFillHome,
  AiFillLinkedin,
  AiOutlineClose,
  AiFillTwitterCircle,
} from 'react-icons/ai'
import {FaFire, FaFacebook} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {SiYoutubegaming} from 'react-icons/si'
import {RiPlayListAddFill} from 'react-icons/ri'
import NxtContext from '../../NxtContext'
import {FliterCont, CrossButton, FilterButton} from '../CssInJS'
import './index.css'

const Filter = () => (
  <NxtContext.Consumer>
    {value => {
      const {Theme, AlterFilter} = value
      const noFilter = () => {
        AlterFilter()
      }
      return (
        <FliterCont color={Theme}>
          <CrossButton color={Theme} onClick={noFilter}>
            <AiOutlineClose />
          </CrossButton>
          <ul className="filterUl">
            <li className="filterLi">
              <Link className="filterLink" to="/">
                <FilterButton onClick={noFilter} type="button" color={Theme}>
                  <AiFillHome className="filterEachIcon" />
                  <h1 className="filterEachHeading">Home</h1>
                </FilterButton>
              </Link>
            </li>
            <li className="filterLi">
              <Link className="filterLink" to="/trending">
                <FilterButton type="button" onClick={noFilter} color={Theme}>
                  <FaFire className="filterEachIcon" />
                  <h1 className="filterEachHeading">Trending</h1>
                </FilterButton>
              </Link>
            </li>
            <li className="filterLi">
              <Link className="filterLink" to="/gaming">
                <FilterButton type="button" onClick={noFilter} color={Theme}>
                  <SiYoutubegaming className="filterEachIcon" />
                  <h1 className="filterEachHeading">Gaming</h1>
                </FilterButton>
              </Link>
            </li>
            <li className="filterLi">
              <Link className="filterLink" to="/saved-videos">
                <FilterButton type="button" onClick={noFilter} color={Theme}>
                  <RiPlayListAddFill className="filterEachIcon" />
                  <h1 className="filterEachHeading">Saved videos</h1>
                </FilterButton>
              </Link>
            </li>
          </ul>
          <div className="FilterContactUsCard">
            <p className="contactHead">CONTACT US</p>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                className="contactUsIconFace"
                alt="facebook logo"
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                className="contactUsIconTwitter"
                alt="twitter logo"
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                className="contactUsIconLink"
                alt="linked in logo"
              />
            </div>
            <p className="contactUsPara">
              Enjoy! Now to see your channels and recommendation
            </p>
          </div>
        </FliterCont>
      )
    }}
  </NxtContext.Consumer>
)

export default Filter
