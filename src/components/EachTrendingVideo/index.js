import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import './index.css'
import NxtContext from '../../NxtContext'
import {TrendingInnerItemCard} from '../CssInJS'

const EachTrendingVideo = props => {
  const {eachItem} = props

  return (
    <NxtContext.Consumer>
      {value => {
        const {Theme} = value
        return (
          <li className="trendingItemCard">
            <Link className="trendingItemCard" to={`/videos/${eachItem.id}`}>
              <img src={eachItem.thumbnail_url} className="EachTrendingImg" />
              <TrendingInnerItemCard color={Theme}>
                <h1 className="eachTrendingHead">{eachItem.title}</h1>
                <p className="eachTrendingPara">{eachItem.channel.name}</p>
                <div className="eachItemPublishCard">
                  <p className="eachTrendingPara">
                    {eachItem.view_count} views
                  </p>
                  <p className="TrendingDatePara">
                    {formatDistanceToNow(new Date(eachItem.published_at))}
                  </p>
                </div>
              </TrendingInnerItemCard>
            </Link>
          </li>
        )
      }}
    </NxtContext.Consumer>
  )
}

export default EachTrendingVideo
