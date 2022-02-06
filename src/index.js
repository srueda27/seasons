import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './components/SeasonDisplay';

class App extends React.Component {
  //Optional method, runs firts when the component is being created
  //Allows us to initialize state
  constructor(props) {
    super(props);

    this.state = { lat: null };
  }

  //React says we have to define render!!!
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    );
    return <div>Latitude: </div>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));