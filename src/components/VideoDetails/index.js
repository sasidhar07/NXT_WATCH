import React, {Component} from 'react'
import ReactPlayer from 'react-player'
import {AiOutlineLike} from 'react-icons/ai'
import {BiDislike} from 'react-icons/bi'
import {RiPlayListAddFill} from 'react-icons/ri'
import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import Header from '../Header'
import Filter from '../Filter'
import './index.css'
import NxtContext from '../../NxtContext'
import {
  VideoDetailsCardInnerCard,
  SaveButton,
  VideoDetailsLikeCard,
} from '../CssInJS'

class VideoDetails extends Component {
  state = {videoDetails: []}

  componentDidMount() {
    this.getItemDetails()
  }

  getItemDetails = async () => {
    const {match} = this.props
    const url = `https://apis.ccbp.in/videos/${match.params.id}`
    const options = {
      headers: {
        Authorization: `Bearer ${Cookies.get('jwt_token')}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    this.setState({videoDetails: data.video_details})
  }

  render() {
    const {videoDetails} = this.state
    return (
      <NxtContext.Consumer>
        {value => {
          const {
            Theme,
            filter,
            LikedList,
            DisLikedList,
            AddElementToSavedList,
            AddElementToLikedList,
            AddElementToDisLikedList,
            SavedList,
          } = value
          const Saved = SavedList.some(item => item.id === videoDetails.id)
          const Like = LikedList.some(item => item === videoDetails.id)
          const DisLike = DisLikedList.some(item => item === videoDetails.id)
          const AddSavedList = () => {
            AddElementToSavedList(videoDetails)
          }

          const AddLikedList = () => {
            AddElementToLikedList(videoDetails.id)
          }

          const AddDisLikedList = () => {
            AddElementToDisLikedList(videoDetails.id)
          }

          return (
            <>
              <Header />
              <div className="videoDetailsCard">
                <Filter className="FilterInVideoDet" />
                <VideoDetailsCardInnerCard
                  color={Theme}
                  className="videoDetailsCardInnerCard"
                >
                  <ReactPlayer
                    className="videoPlayer"
                    controls="true"
                    url={videoDetails.video_url}
                  />
                  <h1 className="videoDetailsHead">{videoDetails.title}</h1>
                  <div className="videoDetailsBottomCard">
                    <div className="ViewsAndDaysCard">
                      <div className="videoDetailsViewscard">
                        <p>{videoDetails.view_count} views </p>
                        <p className="videoDetailsLikesPara">
                          {videoDetails.length !== 0
                            ? formatDistanceToNow(
                                new Date(videoDetails.published_at),
                              )
                            : ''}
                        </p>
                      </div>
                      <div className="videoDetailsLikesCard">
                        <VideoDetailsLikeCard color={Like}>
                          <SaveButton
                            color={Like}
                            id="Like"
                            type="button"
                            onClick={AddLikedList}
                          >
                            <AiOutlineLike className="LikeIcon" />
                          </SaveButton>

                          <label
                            htmlFor="Save"
                            onClick={AddLikedList}
                            className="videoDetailsLikesPara"
                          >
                            Like
                          </label>
                        </VideoDetailsLikeCard>
                        <VideoDetailsLikeCard color={DisLike}>
                          <SaveButton
                            color={DisLike}
                            type="button"
                            onClick={AddDisLikedList}
                          >
                            <BiDislike className="LikeIcon" />
                          </SaveButton>

                          <label
                            htmlFor="DisLike"
                            onClick={AddDisLikedList}
                            className="videoDetailsLikesPara"
                          >
                            Dislike
                          </label>
                        </VideoDetailsLikeCard>
                        <VideoDetailsLikeCard color={Saved}>
                          <SaveButton
                            color={Saved}
                            type="button"
                            id="save"
                            onClick={AddSavedList}
                          >
                            <RiPlayListAddFill className="LikeIcon" />
                          </SaveButton>
                          <label htmlFor="save">Save</label>
                        </VideoDetailsLikeCard>
                      </div>
                    </div>
                    <hr />
                    <div className="videoDetailsChannelCard">
                      {videoDetails.length !== 0 ? (
                        <>
                          <img
                            src={videoDetails.channel.profile_image_url}
                            className="videoDetailsChannelLogo"
                            alt="Channel Logo"
                          />
                          <div className="channelDiscriptionCard">
                            <h1 className="videoDetailsChannelHead">
                              {videoDetails.channel.name}
                            </h1>
                            <p className="channelSubscriberPara">
                              {videoDetails.channel.subscriber_count}{' '}
                              subscribers
                            </p>

                            <p className="channelSubscriberPara">
                              {videoDetails.description}
                            </p>
                          </div>
                        </>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                </VideoDetailsCardInnerCard>
              </div>
              {filter ? (
                <Filter />
              ) : (
                <div className="videoDetailsCardSmall">
                  <VideoDetailsCardInnerCard
                    color={Theme}
                    className="videoDetailsCardInnerCard"
                  >
                    <ReactPlayer
                      className="videoPlayer"
                      controls="true"
                      url={videoDetails.video_url}
                    />
                    <h1 className="videoDetailsHead">{videoDetails.title}</h1>
                    <div className="videoDetailsBottomCard">
                      <div className="ViewsAndDaysCard">
                        <div className="videoDetailsViewscard">
                          <p>{videoDetails.view_count} views </p>
                          <p className="videoDetailsdatePara">
                            {videoDetails.length !== 0
                              ? formatDistanceToNow(
                                  new Date(videoDetails.published_at),
                                )
                              : ''}
                          </p>
                        </div>
                        <div className="videoDetailsLikesCard">
                          <VideoDetailsLikeCard color={Like}>
                            <SaveButton
                              color={Like}
                              id="Like"
                              type="button"
                              onClick={AddLikedList}
                            >
                              <AiOutlineLike className="LikeIcon" />
                            </SaveButton>

                            <label
                              htmlFor="Save"
                              onClick={AddLikedList}
                              className="videoDetailsLikesPara"
                            >
                              Like
                            </label>
                          </VideoDetailsLikeCard>
                          <VideoDetailsLikeCard color={DisLike}>
                            <SaveButton
                              color={DisLike}
                              type="button"
                              onClick={AddDisLikedList}
                            >
                              <BiDislike className="LikeIcon" />
                            </SaveButton>

                            <label
                              htmlFor="DisLike"
                              onClick={AddDisLikedList}
                              className="videoDetailsLikesPara"
                            >
                              Dislike
                            </label>
                          </VideoDetailsLikeCard>
                          <VideoDetailsLikeCard color={Saved}>
                            <SaveButton
                              color={Saved}
                              type="button"
                              id="save"
                              onClick={AddSavedList}
                            >
                              <RiPlayListAddFill className="LikeIcon" />
                            </SaveButton>
                            <label htmlFor="save">Save</label>
                          </VideoDetailsLikeCard>
                        </div>
                      </div>
                      <hr />
                      <div className="videoDetailsChannelCard">
                        {videoDetails.length !== 0 ? (
                          <>
                            <img
                              src={videoDetails.channel.profile_image_url}
                              className="videoDetailsChannelLogo"
                              alt="Channel Logo"
                            />
                            <div className="channelDiscriptionCard">
                              <h1 className="videoDetailsChannelHead">
                                {videoDetails.channel.name}
                              </h1>
                              <p className="channelSubscriberPara">
                                {videoDetails.channel.subscriber_count}{' '}
                                subscribers
                              </p>

                              <p className="channelDiscriptionPara">
                                {videoDetails.description}
                              </p>
                            </div>
                          </>
                        ) : (
                          ''
                        )}
                      </div>
                      <p className="channelDiscriptionParaSmall">
                        {videoDetails.description}
                      </p>
                    </div>
                  </VideoDetailsCardInnerCard>
                </div>
              )}
            </>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default VideoDetails
