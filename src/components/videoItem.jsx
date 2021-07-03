import React from "react"

const VideoItem = ({ video, onSelectVideo }) => {
  return (
    <li className="video-item" onClick={() => onSelectVideo(video.id.videoId)}>
      <div className="video-item-thumbnail-wrapper">
        <img
          className="video-item-thumbnail"
          src={video.snippet.thumbnails.high.url}
          alt={`${video.snippet.title} 썸네일`}
        />
      </div>
      <div>
        <p dangerouslySetInnerHTML={{ __html: video.snippet.title }}></p>
      </div>
    </li>
  )
}

export default VideoItem
