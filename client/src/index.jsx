import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Records from './components/Records.jsx';
import Search from './components/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      strong: [
        //pages with most rehits
        ['philosophy', 15],
        ['math', 10],
        ['french fries', 3],
        ['jerry\'s app', 12]
      ],
      far: [
        //pages by distance from a rehit
        ['coca cola', 5],
        ['soda', 4],
        ['mars', 20]
      ]
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/items',
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });

  }

  search(url) {
    console.log(`url given: ${url}`);
    // this.
  }

  render () {
    return (<div>
      <h1>Records </h1>
      <Records strong={this.state.strong} far={this.state.far}/>
      <h1>Dive from...</h1>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
