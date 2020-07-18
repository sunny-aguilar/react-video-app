import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <h1>Search Bar</h1>
        <form className="ui form">
          <input className="field" type="text" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
