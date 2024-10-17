import NxtContext from '../../NxtContext'
import './index.css'
import Header from '../Header'
import Filter from '../Filter'
import {NotFoundContainer, NotFoundCard} from '../CssInJS'

const NotFound = () => (
  <NxtContext.Consumer>
    {value => {
      const {Theme} = value
      const notFoundUrl = Theme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

      return (
        <>
          <Header />
          <NotFoundContainer color={Theme}>
            <Filter />
            <NotFoundCard color={Theme}>
              <img src={notFoundUrl} className="notFoundImg" />
              <h1>Page Not Found</h1>
              <p>We are sorry,the page you requested is not be found</p>
            </NotFoundCard>
          </NotFoundContainer>
        </>
      )
    }}
  </NxtContext.Consumer>
)

export default NotFound
