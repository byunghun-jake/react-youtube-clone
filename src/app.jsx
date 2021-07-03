import React, { Component } from "react"
import "axios"
import "./app.css"
import { getMostPopular, getSearchResult } from "./api"
import Videos from "./components/videos"
import TheHeader from "./components/TheHeader"

class App extends Component {
  state = {
    searchQuery: "",
    popularVideos: [],
    searchedVideos: [],
    pageMode: "popular",
  }
  handleSearchInput = (event) => {
    this.setState({
      searchQuery: event.target.value,
    })
  }
  handleSearch = async (event) => {
    event.preventDefault()
    try {
      const res = await getSearchResult(this.state.searchQuery)
      console.log(res)
      this.setState({
        searchedVideos: res.data.items,
        pageMode: "search",
      })
    } catch (error) {
      console.error(error)
    }
  }

  async componentDidMount() {
    console.log("componentDidMount")
    try {
      const res = await getMostPopular()
      console.log(res)
      this.setState({
        popularVideos: res.data.items,
      })
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <>
        <TheHeader
          onSearchInput={this.handleSearchInput}
          onSearch={this.handleSearch}
        />
        <main className="container">
          {this.state.pageMode === "popular" ? (
            <Videos sectionTitle="인기✨" videos={this.state.popularVideos} />
          ) : (
            <Videos sectionTitle="검색" videos={this.state.searchedVideos} />
          )}
        </main>
      </>
    )
  }
}

export default App
