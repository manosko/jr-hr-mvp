import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ''
    }
  }

  onChange (event) {
    this.setState({
      url: event.target.value
    })
  }

  search() {
    this.props.onSearch(this.state.url)
  }

  render() {
    return (
    <div>
      <h1>Enter a Wikipedia URL</h1>
      Wikipedia URL: <input value={this.state.url} onChange={this.onChange.bind(this)}/>
      <button onClick={this.search.bind(this)}> Dive! </button>
    </div>
  )}
}

export default Search;
