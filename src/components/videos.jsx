import React from "react"
import VideoItem from "./videoItem"

const Videos = ({ sectionTitle, videos, onSelectVideo }) => {
  return (
    <>
      <h1>{sectionTitle}</h1>
      <ul className="video-list">
        {videos.map((video) => {
          return (
            <VideoItem
              video={video}
              onSelectVideo={onSelectVideo}
              key={video.etag}
            />
          )
        })}
      </ul>
    </>
  )
}

export default Videos
