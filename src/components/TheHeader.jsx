import React from "react"

const TheHeader = ({ onSearchInput, onSearch }) => {
  return (
    <header className="header">
      <span className="header__logo">Youtube</span>
      <form className="header__search">
        <input
          className="header__search__input"
          type="text"
          onInput={onSearchInput}
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
