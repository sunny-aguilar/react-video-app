import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input className="field" type="text" />
          </div>
        </form>
        <div role="listitem" className="item">
          <div className="ui violet horizontal label">
            <i className="power cord icon"></i>API Powered by: Unsplash
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
