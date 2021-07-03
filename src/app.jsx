import React, { Component } from "react"
import "axios"
import "./app.css"
import { getPopularVideos, getSearchResults, getVideo } from "./api"
import Videos from "./components/videos"
import TheHeader from "./components/TheHeader"
import VideoDetail from "./components/VideoDetail"

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

  handleSearch = async (event) => {
    event.preventDefault()
    try {
      const res = await getSearchResults(this.state.searchQuery)
      this.setState({
        searchedVideos: res.data.items,
        selectedVideo: null,
      })
    } catch (error) {
      console.error(error)
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

  handleSelectVideo = async (id) => {
    try {
      getVideo(id).then((res) => {
        this.setState({
          selectedVideo: res.data.items[0],
          searchQuery: "",
        })
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { selectedVideo, popularVideos, searchedVideos, searchQuery } =
      this.state
    return (
      <>
        <TheHeader
          onSearchInput={this.handleSearchInput}
          onSearch={this.handleSearch}
          onClickHome={this.handleLinkToHome}
          searchQuery={searchQuery}
        />
        <main className="container">
          {selectedVideo ? (
            <VideoDetail video={selectedVideo} />
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
        </main>
      </>
    )
  }
}

export default App
