import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {BiSearch} from 'react-icons/bi'
import Cookies from 'js-cookie'
import './index.css'
import Header from '../Header'
import Filter from '../Filter'
import VideoItem from '../videoItem'
import NxtContext from '../../NxtContext'
import {
  HomeMainCont,
  SearchIconCardHome,
  LoaderCard,
  RightCard,
  HomeInputCard,
  HomeFailureCard,
  PremiumCard,
  NoSearchResultCont,
  HomeMainContForSmall,
} from '../CssInJS'

class Home extends Component {
  state = {
    videosList: [],
    search: '',
    load: false,
    requestStatus: true,
    premiumNeed: true,
  }

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const {search} = this.state

    this.setState({load: true})
    const url = `https://apis.ccbp.in/videos/all?search=${search}`
    const options = {
      headers: {
        Authorization: `Bearer ${Cookies.get('jwt_token')}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()

    this.setState({
      videosList: data.videos,
      load: false,
      requestStatus: response.ok,
    })
  }

  inputChange = event => {
    this.setState({search: event.target.value})
  }

  clearSearch = () => {
    this.setState({search: ''}, this.getDetails)
  }

  Search = () => {
    this.getDetails()
  }

  reload = () => {
    this.getDetails()
  }

  premium = () => {
    this.setState({premiumNeed: false})
  }

  render() {
    const {videosList, search, requestStatus, load, premiumNeed} = this.state
    return (
      <NxtContext.Consumer>
        {value => {
          const {Theme, filter} = value

          const failureUrl = Theme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          let contentToRender
          if (!load) {
            if (!requestStatus) {
              contentToRender = (
                <HomeFailureCard color={Theme}>
                  <img
                    src={failureUrl}
                    className="HomeFailureImg"
                    alt="error occured"
                  />
                  <h1>Oops! Something Went Wrong</h1>
                  <p className="failurePara">
                    We are having some trouble to complete your request
                  </p>
                  <p className="failurePara">Please try again</p>
                  <button
                    className="RetryButton"
                    type="button"
                    onClick={this.reload}
                  >
                    Retry
                  </button>
                </HomeFailureCard>
              )
            } else if (videosList.length === 0) {
              contentToRender = (
                <NoSearchResultCont color={Theme}>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                    className="noSearchImg"
                    alt="No search results"
                  />
                  <h1>No search results found</h1>
                  <p>Try different keywords or remove search filter</p>
                  <button
                    className="RetryButton"
                    type="button"
                    onClick={this.reload}
                  >
                    Retry
                  </button>
                </NoSearchResultCont>
              )
            } else {
              contentToRender = (
                <ul className="contentToRenderUlList">
                  {videosList.map(each => (
                    <VideoItem eachItem={each} key={each.id} />
                  ))}
                </ul>
              )
            }
          } else {
            contentToRender = (
              <LoaderCard>
                <Loader type="ThreeDots" color="#2563eb" />
              </LoaderCard>
            )
          }

          return (
            <>
              <Header />
              <HomeMainCont color={Theme}>
                <Filter />
                <div className="HomeInnerCard">
                  <PremiumCard display={premiumNeed}>
                    <div>
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        className="company-logo"
                      />
                      <p>
                        Buy Nxt Watch Premium Prepaid plans with <br />
                        UPI
                      </p>
                      <button className="PremiumButton">GET IT NOW</button>
                    </div>
                    <button onClick={this.premium} className="NoPremiumButton">
                      X
                    </button>
                  </PremiumCard>
                  <RightCard color={Theme}>
                    <HomeInputCard color={Theme}>
                      <input
                        placeholder="Search"
                        onChange={this.inputChange}
                        className="homeInput"
                        value={search}
                        type="search"
                      />
                      <SearchIconCardHome onClick={this.Search} color={Theme}>
                        <BiSearch className="searchIconHome" />
                      </SearchIconCardHome>
                    </HomeInputCard>
                    <div>{contentToRender}</div>
                  </RightCard>
                </div>
              </HomeMainCont>
              <>
                {filter ? (
                  <Filter />
                ) : (
                  <HomeMainContForSmall color={Theme}>
                    <div className="HomeInnerCard">
                      <PremiumCard display={premiumNeed}>
                        <div>
                          <img
                            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                            className="company-logo"
                          />
                          <p>
                            Buy Nxt Watch Premium Prepaid plans with <br />
                            UPI
                          </p>
                          <button className="PremiumButton">GET IT NOW</button>
                        </div>
                        <button
                          onClick={this.premium}
                          className="NoPremiumButton"
                        >
                          X
                        </button>
                      </PremiumCard>
                      <RightCard color={Theme}>
                        <HomeInputCard color={Theme}>
                          <input
                            placeholder="Search"
                            onChange={this.inputChange}
                            className="homeInput"
                            value={search}
                            type="search"
                          />
                          <SearchIconCardHome
                            onClick={this.Search}
                            color={Theme}
                          >
                            <BiSearch className="searchIconHome" />
                          </SearchIconCardHome>
                        </HomeInputCard>
                        <div>{contentToRender}</div>
                      </RightCard>
                    </div>
                  </HomeMainContForSmall>
                )}
              </>
            </>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default Home
