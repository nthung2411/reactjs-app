import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import Giphy from './Giphy/Giphy';

class App extends Component {

  state = {
    giphys: []
  }

  componentDidMount() {
    const url = 'https://api.giphy.com/v1/gifs/trending';
    axios
      .get(url, {
      params: {
        api_key: 'phar0tI4BPbQ7WlyIIIFbgNXp9mSfRRO'
      }
    })
      .then(response => {
        const data = response
          .data
          .data
          .slice(0, 20); //take only 20 items
        this.setState({giphys: data});
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {

    const giphys = this
      .state
      .giphys
      .map((giphy, i) => {
        return <Giphy user={giphy.user} images={giphy.images} key={i} index={i}/>;
      });

    let content = <div className='App'>
      <section className='container'>
        {giphys}
      </section>
    </div>;
    return (content);
  }
}

export default App;
