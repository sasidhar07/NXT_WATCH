import './index.css'
import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import NxtContext from '../../NxtContext'
import {EachHomeItemText} from '../CssInJS'

const VideoItem = props => {
  const {eachItem} = props
  return (
    <NxtContext.Consumer>
      {value => {
        const {Theme} = value
        return (
          <li className="eachItemCard">
            <Link className="eachItemCardLink" to={`/videos/${eachItem.id}`}>
              <img
                src={eachItem.thumbnail_url}
                className="thumbnail_img_home"
              />
              <div className="innerEachItemCard">
                <img
                  src={eachItem.channel.profile_image_url}
                  className="channel_img"
                />
                <EachHomeItemText color={Theme}>
                  <p className="eachItemTitlePara">{eachItem.title}</p>
                  <p className="eachItemName">{eachItem.channel.name}</p>
                  <div className="ViewsAndDaysCard">
                    <p className="viewsPara">{eachItem.view_count} views </p>

                    <p className="DatePara">
                      {formatDistanceToNow(new Date(eachItem.published_at))}
                    </p>
                  </div>
                </EachHomeItemText>
              </div>
            </Link>
          </li>
        )
      }}
    </NxtContext.Consumer>
  )
}

export default VideoItem
