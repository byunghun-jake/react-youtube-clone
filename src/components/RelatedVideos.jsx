import React from "react"

const RelatedVideos = ({ popularVideos, onSelectVideo }) => {
  return (
    <section>
      <ul className="relatedvideos">
        {popularVideos.map((video) => {
          const videoTags = video.snippet.tags
            ? video.snippet.tags.slice(0, 3).join()
            : ""
          console.log(videoTags)

          return (
            <li
              className="relatedvideos__item"
              key={video.id}
              onClick={() => onSelectVideo(video.id)}
            >
              <div className="video-item-thumbnail-wrapper relatedvideo__img-wrapper">
                <img
                  className="video-item-thumbnail"
                  src={video.snippet.thumbnails.default.url}
                  alt={`${video.snippet.title} 썸네일`}
                />
              </div>
              <div className="relatedvideo__infos">
                <p className="relatedvideo__title">{video.snippet.title}</p>
                <p className="relatedvideo__channeltitle">
                  {video.snippet.channelTitle}
                </p>
                <p className="relatedvideo__tags">{videoTags}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default RelatedVideos
