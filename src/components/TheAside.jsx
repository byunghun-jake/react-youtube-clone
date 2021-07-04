import React from "react"

const TheAside = ({ onSearchVideosByChannel, onSearchVideos }) => {
  return (
    <aside className="aside">
      <p className="label">Channel</p>
      <ul className="channels">
        <li
          className="channel"
          onClick={() => onSearchVideosByChannel("UC_4u-bXaba7yrRz_6x6kb_w")}
        >
          <div className="channel__thumbnail-wrapper">
            <img
              className="channel-thumbnail"
              src="https://yt3.ggpht.com/ytc/AKedOLRfd_D7OLG7kY-j4nhX9VD-q4phRC-ErDTVn58gNw=s88-c-k-c0x00ffffff-no-rj"
              alt="드림코딩 페이지 썸네일"
            />
          </div>
          <p className="channel-title">엘리</p>
        </li>
        <li
          className="channel"
          onClick={() => onSearchVideosByChannel("UC2nkWbaJt1KQDi2r2XclzTQ")}
        >
          <div className="channel__thumbnail-wrapper">
            <img
              className="channel-thumbnail"
              src="https://yt3.ggpht.com/ytc/AKedOLSpZwHyIH3sbomJI7f3FqRb5p8opUzN6OuoeZ9Tvo8=s176-c-k-c0x00ffffff-no-rj"
              alt="얄팍한 코딩사전 페이지 썸네일"
            />
          </div>
          <p className="channel-title">얄코</p>
        </li>
        <li
          className="channel"
          onClick={() => onSearchVideosByChannel("UC_s1FC7s5YVwDImzv-WG93Q")}
        >
          <div className="channel__thumbnail-wrapper">
            <img
              className="channel-thumbnail"
              src="https://yt3.ggpht.com/ytc/AKedOLRO7XP7LCAx2szFN4zWF5iCufxqG04jqMNQ7hpN=s176-c-k-c0x00ffffff-no-rj"
              alt="1분코딩 페이지 썸네일"
            />
          </div>
          <p className="channel-title">1분코딩</p>
        </li>
        <li
          className="channel"
          onClick={() => onSearchVideosByChannel("UCp-vBtwvBmDiGqjvLjChaJw")}
        >
          <div className="channel__thumbnail-wrapper">
            <img
              className="channel-thumbnail"
              src="https://yt3.ggpht.com/ytc/AKedOLSx9Vhv_KzWHwbJc7ZQs1XWZR1ZuI37GDfFauW1=s176-c-k-c0x00ffffff-no-rj"
              alt="ZeroCho 페이지 썸네일"
            />
          </div>
          <p className="channel-title">ZeroCho</p>
        </li>
        <li className="channel" onClick={() => onSearchVideos("생활코딩")}>
          <div className="channel__thumbnail-wrapper">
            <img
              className="channel-thumbnail"
              src="https://yt3.ggpht.com/ytc/AKedOLQxjW9reD4wtXjJWR1mzH8L37nkc670i8ZHNP8C=s176-c-k-c0x00ffffff-no-rj"
              alt="생활코딩 페이지 썸네일"
            />
          </div>
          <p className="channel-title">생활코딩</p>
        </li>
      </ul>
    </aside>
  )
}

export default TheAside
