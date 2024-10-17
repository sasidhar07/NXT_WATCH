import {FaFire} from 'react-icons/fa'

import EachTrendingVideo from '../EachTrendingVideo'
import Filter from '../Filter'
import Header from '../Header'
import './index.css'
import NxtContext from '../../NxtContext'
import {
  SavedContainer,
  TrendingIconCard,
  SavedInnerCard,
  SavedMiniCont,
  SavedContainerSmall,
  SavedEachItemCard,
  SavedHead,
} from '../CssInJS'

const SavedVideos = () => (
  <NxtContext.Consumer>
    {value => {
      const {Theme, SavedList, filter} = value
      const isEmptySavedList = SavedList.length === 0

      let contentToRender = null

      if (isEmptySavedList) {
        contentToRender = (
          <>
            <SavedContainer color={Theme}>
              <Filter />
              <SavedInnerCard color={Theme}>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                  className="noSavedVideosImg"
                />
                <h2>No saved videos found</h2>
                <p>You can save your videos while watching them</p>
              </SavedInnerCard>
            </SavedContainer>
            {filter ? (
              <Filter />
            ) : (
              <SavedContainerSmall color={Theme}>
                <SavedInnerCard color={Theme}>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                    className="noSavedVideosImg"
                  />
                  <h2>No saved videos found</h2>
                  <p>You can save your videos while watching them</p>
                </SavedInnerCard>
              </SavedContainerSmall>
            )}
          </>
        )
      } else {
        contentToRender = (
          <>
            <SavedContainer color={Theme}>
              <Filter />
              <SavedMiniCont color={Theme}>
                <SavedHead color={Theme}>
                  <TrendingIconCard color={Theme}>
                    <FaFire className="trendingIcon" />
                  </TrendingIconCard>
                  <h1>Saved Videos</h1>
                </SavedHead>
                <SavedEachItemCard color={Theme}>
                  {SavedList.map(each => (
                    <EachTrendingVideo eachItem={each} key={each.id} />
                  ))}
                </SavedEachItemCard>
              </SavedMiniCont>
            </SavedContainer>
            {filter ? (
              <Filter />
            ) : (
              <SavedContainerSmall color={Theme}>
                <SavedMiniCont color={Theme}>
                  <SavedHead color={Theme}>
                    <TrendingIconCard color={Theme}>
                      <FaFire className="trendingIcon" />
                    </TrendingIconCard>
                    <h1>Saved Videos</h1>
                  </SavedHead>
                  <SavedEachItemCard color={Theme}>
                    {SavedList.map(each => (
                      <EachTrendingVideo eachItem={each} key={each.id} />
                    ))}
                  </SavedEachItemCard>
                </SavedMiniCont>
              </SavedContainerSmall>
            )}
          </>
        )
      }

      return (
        <>
          <Header />
          {contentToRender}
        </>
      )
    }}
  </NxtContext.Consumer>
)

export default SavedVideos
