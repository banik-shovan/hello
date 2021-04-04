import React, { Component } from 'react';
import './App.css';

function Sew() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>hello shovan kmn acho tomader bari koi
        tomra ki koro
        </h1>

      </header>
      <Dew name="kalam" age="30" />
      <h1>kn sob elo melo rat jaga pakhi</h1>
    </div>
  );
  // return React.createElement('div', { className: "App" }, React.createElement('h1', { className: "App-header" }, "hello sobai kmn Acho"), <Dew />);
}

let Dew = (props) => {
  return (
    <div>
      <h5>
        amra sobai raja .... <Kew name="kamal" dob="10-1-1995" />
      </h5>
      <h2>{props.name} and {props.age}</h2>
    </div>
  );
}

// function Kew() {
//   return (

//   );
// }
class Kew extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <h2 > name:{this.props.name} and age:{this.props.dob} </h2>
      </div>
    );
  }
}
export default Sew;

