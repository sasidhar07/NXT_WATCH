import {Link} from 'react-router-dom'
import './index.css'
import {GameTitle} from '../CssInJS'
import NxtContext from '../../NxtContext'

const EachGamingItem = props => {
  const {eachGame} = props
  return (
    <NxtContext.Consumer>
      {values => {
        const {Theme} = values
        return (
          <div className="eachGameCard">
            <Link className="eachGameLink" to={`videos/${eachGame.id}`}>
              <img src={eachGame.thumbnail_url} className="gameImg" />
              <GameTitle color={Theme} className="gameTitle">
                {eachGame.title}
              </GameTitle>
              <p className="gameViewPara">
                {eachGame.view_count} Watching Worldwide
              </p>
            </Link>
          </div>
        )
      }}
    </NxtContext.Consumer>
  )
}

export default EachGamingItem
