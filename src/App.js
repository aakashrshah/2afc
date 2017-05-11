import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
let Survey = require('survey-react');

Survey.defaultBootstrapCss.navigationButton = "btn btn-primary";
Survey.Survey.cssType = "bootstrap";
var survey = new Survey.Model( { questions: [
     {name:"name", type:"text", title: "Please enter your name:", placeHolder:"Jon Snow", isRequired: true},
     {name:"birthdate", type:"text", inputType:"date", title: "Your birthdate:", isRequired: true},
     {name:"color", type:"text", inputType:"color", title: "Your favorite color:"},
     {name:"email", type:"text", inputType:"email", title: "Your e-mail:", placeHolder:"jon.snow@nightwatch.org", isRequired: true, validators: [{type:"email"}]}
]});

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Survey.Survey model={survey} />
      </div>
    );
  }
}

export default App;
