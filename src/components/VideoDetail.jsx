import React from "react"

const VideoDetail = ({ video }) => {
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
            <li className="title">{video.snippet.title}</li>
            <li>{video.snippet.description}</li>
          </ul>
        </div>
      </div>
      <div>RelatedVideos</div>
    </div>
  )
}

export default VideoDetail
