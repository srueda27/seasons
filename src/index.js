import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './components/SeasonDisplay';

class App extends React.Component {
  //Optional method, runs firts when the component is being created
  //Allows us to initialize state
  constructor(props) {
    super(props);

    // THIS IS THE ONLY TIME we do direct assignment to this.state
    this.state = { lat: null, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude
        });
      },
      err => {
        this.setState({
          errorMessage: err.message
        });
      }
    );
  }

  //React says we have to define render!!!
  render() {
    return (
      <div>
        Latitude: {this.state.lat}
        <br />
        Error: {this.state.errorMessage}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));