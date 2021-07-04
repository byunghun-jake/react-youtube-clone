import React, { Component } from "react"
import "axios"
import "./app.css"
import {
  getPopularVideos,
  searchVideos,
  searchVideosByChannel,
  getVideo,
} from "./api"
import Videos from "./components/videos"
import TheHeader from "./components/TheHeader"
import VideoDetail from "./components/VideoDetail"
import TheAside from "./components/TheAside"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: "",
      popularVideos: [],
      searchedVideos: [],
      selectedVideo: null,
    }
  }

  handleLinkToHome = () => {
    this.setState({
      searchedVideos: [],
      searchQuery: "",
      selectedVideo: null,
    })
  }

  handleSearchInput = (event) => {
    this.setState({
      searchQuery: event.target.value,
    })
  }

  handleSearchVideos = async (event) => {
    event.preventDefault()
    try {
      const res = await searchVideos(this.state.searchQuery)
      this.setState({
        searchedVideos: res.data.items,
        selectedVideo: null,
      })
    } catch (error) {
      console.error(error)
    }
  }

  handleSearchVideosByChannelTitle = async (channelTitle) => {
    try {
      const res = await searchVideos(channelTitle)
      this.setState({
        searchedVideos: res.data.items,
        selectedVideo: null,
      })
    } catch (error) {
      console.error(error)
    }
  }

  handleSearchVideosByChannel = async (channelId) => {
    try {
      const res = await searchVideosByChannel(channelId)
      this.setState({
        searchedVideos: res.data.items,
        selectedVideo: null,
      })
    } catch (error) {
      console.error(error)
    }
  }

  handleSelectVideo = async (id) => {
    try {
      const res = await getVideo(id)
      this.setState({
        selectedVideo: res.data.items[0],
        searchQuery: "",
      })
    } catch (error) {
      console.log(error)
    }
  }

  async componentDidMount() {
    try {
      const res = await getPopularVideos()
      this.setState({
        popularVideos: res.data.items,
      })
    } catch (error) {
      console.error(error)
    }
  }

  componentDidUpdate() {
    window.scrollTo({ behavior: "smooth", top: 0 })
  }

  render() {
    const { selectedVideo, popularVideos, searchedVideos, searchQuery } =
      this.state
    return (
      <>
        <TheHeader
          onSearchInput={this.handleSearchInput}
          onSearch={this.handleSearchVideos}
          onClickHome={this.handleLinkToHome}
          searchQuery={searchQuery}
        />
        <main className="main">
          <TheAside
            onSearchVideosByChannel={this.handleSearchVideosByChannel}
            onSearchVideos={this.handleSearchVideosByChannelTitle}
          />
          <section className="container">
            {selectedVideo ? (
              <VideoDetail
                video={selectedVideo}
                popularVideos={popularVideos}
                onSelectVideo={this.handleSelectVideo}
              />
            ) : searchedVideos && searchedVideos.length > 1 ? (
              <Videos
                sectionTitle="검색"
                videos={searchedVideos}
                onSelectVideo={this.handleSelectVideo}
              />
            ) : (
              <Videos
                sectionTitle="인기✨"
                videos={popularVideos}
                onSelectVideo={this.handleSelectVideo}
              />
            )}
          </section>
        </main>
      </>
    )
  }
}

export default App
