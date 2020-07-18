import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

export default App;
