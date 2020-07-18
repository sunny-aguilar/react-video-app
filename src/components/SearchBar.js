import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <h1>Video Search</h1>
        <form className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input className="field" type="text" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
