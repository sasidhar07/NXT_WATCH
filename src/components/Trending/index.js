import {Component} from 'react'
import Cookies from 'js-cookie'
import {FaFire} from 'react-icons/fa'
import Loader from 'react-loader-spinner'
import EachTrendingVideo from '../EachTrendingVideo'
import Filter from '../Filter'
import Header from '../Header'
import './index.css'
import NxtContext from '../../NxtContext'
import {
  TrendingHead,
  TrendingContainer,
  TrendingIconCard,
  TrendingEachItemCard,
  HomeFailureCard,
  LoaderCard,
  TrendingContainerSmall,
} from '../CssInJS'

class Trending extends Component {
  state = {
    trendingList: [],
    isLoading: true,
    requestStatus: true,
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({isLoading: true})
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${Cookies.get('jwt_token')}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    this.setState({
      isLoading: false,
      trendingList: data.videos,
      requestStatus: response.ok,
    })
  }

  reload = () => {
    this.getTrendingVideos()
  }

  render() {
    const {trendingList, isLoading, requestStatus} = this.state
    return (
      <NxtContext.Consumer>
        {value => {
          const {Theme, filter} = value
          const failureUrl = Theme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          let contentToRender

          if (!isLoading) {
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
            } else {
              contentToRender = (
                <ul className="trendingUlList">
                  {trendingList.map(each => (
                    <EachTrendingVideo eachItem={each} key={each.id} />
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
              <TrendingContainer color={Theme}>
                <Filter />
                <div className="trendingCard">
                  <TrendingHead color={Theme}>
                    <TrendingIconCard color={Theme}>
                      <FaFire className="trendingIcon" />
                    </TrendingIconCard>
                    <h1>Trending</h1>
                  </TrendingHead>
                  <TrendingEachItemCard color={Theme}>
                    {contentToRender}
                  </TrendingEachItemCard>
                </div>
              </TrendingContainer>
              {filter ? (
                <Filter />
              ) : (
                <TrendingContainerSmall color={Theme}>
                  <div className="trendingCard">
                    <TrendingHead color={Theme}>
                      <TrendingIconCard color={Theme}>
                        <FaFire className="trendingIcon" />
                      </TrendingIconCard>
                      <h1>Trending</h1>
                    </TrendingHead>
                    <TrendingEachItemCard color={Theme}>
                      {contentToRender}
                    </TrendingEachItemCard>
                  </div>
                </TrendingContainerSmall>
              )}
            </>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default Trending
