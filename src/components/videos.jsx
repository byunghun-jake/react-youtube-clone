import React, { Component } from "react"

class Videos extends Component {
  render() {
    return (
      <>
        <h1>{this.props.sectionTitle}</h1>
        <ul className="popular-videos">
          {this.props.videos.map((video) => {
            return (
              <li className="popular-video-item" key={video.etag}>
                <div className="video-item-thumbnail-wrapper">
                  <img
                    className="video-item-thumbnail"
                    src={video.snippet.thumbnails.high.url}
                    alt={`${video.snippet.title} 썸네일`}
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{ __html: video.snippet.title }}
                  ></p>
                </div>
              </li>
            )
          })}
        </ul>
      </>
    )
  }
}

export default Videos
