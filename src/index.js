import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './components/SeasonDisplay';
import Spinner from './components/Spinner';

class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  //First time the render method is used
  componentDidMount() {
    console.log('My component was rendered to the screen');
    
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState( { lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  //Every time the render method is used
  componentDidUpdate() {
    console.log('My component was just updated - it rerendered')
  }

  //React says we have to define render!!!
  //Only to return jsx NOTHING ELSE
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <div>
          Error: {this.state.errorMessage}
        </div>
      );
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }

    return <Spinner text='Please accept location request'/>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
