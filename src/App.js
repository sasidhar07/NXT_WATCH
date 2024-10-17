import './App.css'
import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import NxtContext from './NxtContext'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoDetails from './components/VideoDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

class App extends Component {
  state = {
    Theme: 'light',
    SavedList: [],
    LikedList: [],
    DisLikedList: [],
    filter: false,
  }

  changeFilter = () => {
    this.setState(prev => ({filter: !prev.filter}))
  }

  AlterFilter = () => {
    this.setState({filter: false})
  }

  AddElementToLikedList = ele => {
    const {DisLikedList, LikedList} = this.state
    const newDisLikedList = DisLikedList.filter(each => each !== ele)
    const isPresent = LikedList.some(item => item === ele)
    if (isPresent) {
      const newLikedList = LikedList.filter(each => each !== ele)
      this.setState({LikedList: newLikedList, DisLikedList: newDisLikedList})
    } else {
      this.setState({
        LikedList: [...LikedList, ele],
        DisLikedList: newDisLikedList,
      })
    }
  }

  AddElementToDisLikedList = ele => {
    const {DisLikedList, LikedList} = this.state
    const newLikedList = LikedList.filter(each => each !== ele)
    const isPresent = DisLikedList.some(item => item === ele)
    if (isPresent) {
      const newDisLikedList = DisLikedList.filter(each => each !== ele)
      this.setState({LikedList: newLikedList, DisLikedList: newDisLikedList})
    } else {
      this.setState({
        LikedList: newLikedList,
        DisLikedList: [...DisLikedList, ele],
      })
    }
  }

  AddElementToSavedList = ele => {
    const {SavedList} = this.state
    const isPresent = SavedList.some(item => item.id === ele.id)

    if (!isPresent) {
      this.setState({SavedList: [...SavedList, ele]})
    } else {
      const newSavedList = SavedList.filter(item => item.id !== ele.id)
      this.setState({SavedList: newSavedList})
    }
  }

  changeTheme = () => {
    const {Theme} = this.state
    if (Theme === 'light') {
      this.setState({Theme: 'dark'})
    } else {
      this.setState({Theme: 'light'})
    }
  }

  render() {
    const {Theme, SavedList, filter, LikedList, DisLikedList} = this.state
    return (
      <NxtContext.Provider
        value={{
          Theme,
          SavedList,
          AddElementToSavedList: this.AddElementToSavedList,
          changeTheme: this.changeTheme,
          AddElementToDisLikedList: this.AddElementToDisLikedList,
          AddElementToLikedList: this.AddElementToLikedList,
          LikedList,
          AlterFilter: this.AlterFilter,
          DisLikedList,
          changeFilter: this.changeFilter,
          filter,
        }}
      >
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/videos/:id" component={VideoDetails} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route component={NotFound} />
        </Switch>
      </NxtContext.Provider>
    )
  }
}

export default App
