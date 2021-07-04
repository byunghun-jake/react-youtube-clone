import React, { Component } from "react"
import RelatedVideos from "./RelatedVideos"

class VideoDetail extends Component {
  componentDidMount() {
    window.scrollTo({ behavior: "smooth", top: 0 })
  }

  componentDidUpdate() {
    window.scrollTo({ behavior: "smooth", top: 0 })
  }

  render() {
    const { video, popularVideos, onSelectVideo } = this.props

    return (
      <div className="detail-container">
        <div className="video">
          <div>
            <div className="player-wrapper">
              <iframe
                className="player"
                title="YoutubePlayer"
                src={`https://www.youtube.com/embed/${video.id}`}
                frameBorder="0"
              ></iframe>
            </div>
          </div>
          <div>
            <ul className="infos">
              <li className="title">
                {video.snippet.localized.title || video.snippet.title}
              </li>
              <li>
                {video.snippet.localized.description ||
                  video.snippet.description}
              </li>
            </ul>
          </div>
        </div>
        <RelatedVideos
          popularVideos={popularVideos}
          onSelectVideo={onSelectVideo}
        />
      </div>
    )
  }
}

export default VideoDetail
