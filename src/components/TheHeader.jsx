import React from "react"

const TheHeader = ({ searchQuery, onSearchInput, onSearch, onClickHome }) => {
  return (
    <header className="header">
      <span className="header__logo" onClick={onClickHome}>
        Youtube
      </span>
      <form className="header__search">
        <input
          className="header__search__input"
          type="text"
          onInput={onSearchInput}
          value={searchQuery}
        />
        <button className="header__search__btn" onClick={onSearch}>
          검색
        </button>
      </form>
      <div>로그인</div>
    </header>
  )
}

export default TheHeader
