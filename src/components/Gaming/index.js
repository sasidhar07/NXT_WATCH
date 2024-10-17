import {Component} from 'react'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import Loader from 'react-loader-spinner'
import Filter from '../Filter'
import EachGamingItem from '../EachGamingItem'
import Header from '../Header'
import './index.css'
import NxtContext from '../../NxtContext'
import {
  GamingHead,
  GamingContainer,
  GamingIconCard,
  GamingContainerSmall,
  GamingEachItemCard,
  LoaderCard,
  HomeFailureCard,
} from '../CssInJS'

class Gaming extends Component {
  state = {
    GamingList: [],
    requestStatus: true,
    isLoading: true,
  }

  componentDidMount() {
    this.getGames()
  }

  getGames = async () => {
    this.setState({isLoading: true})
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${Cookies.get('jwt_token')}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    this.setState({
      isLoading: false,
      GamingList: data.videos,
      requestStatus: response.ok,
    })
  }

  reload = () => {
    this.getGames()
  }

  render() {
    const {GamingList, isLoading, requestStatus} = this.state
    return (
      <NxtContext.Consumer>
        {values => {
          const {Theme, filter} = values
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
                <ul className="gamingUlList">
                  {GamingList.map(each => (
                    <EachGamingItem eachGame={each} key={each.id} />
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
              <GamingContainer color={Theme}>
                <Filter />
                <div className="gamingCard">
                  <GamingHead color={Theme}>
                    <GamingIconCard color={Theme}>
                      <SiYoutubegaming className="gamingIcon" />
                    </GamingIconCard>
                    <h1>Gaming</h1>
                  </GamingHead>
                  <GamingEachItemCard color={Theme}>
                    {contentToRender}
                  </GamingEachItemCard>
                </div>
              </GamingContainer>
              {filter ? (
                <Filter />
              ) : (
                <GamingContainerSmall color={Theme}>
                  <div className="gamingCard">
                    <GamingHead color={Theme}>
                      <GamingIconCard color={Theme}>
                        <SiYoutubegaming className="gamingIcon" />
                      </GamingIconCard>
                      <h1>Gaming</h1>
                    </GamingHead>
                    <GamingEachItemCard color={Theme}>
                      {contentToRender}
                    </GamingEachItemCard>
                  </div>
                </GamingContainerSmall>
              )}
            </>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default Gaming
