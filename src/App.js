import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
let Survey = require('survey-react');
// import $ from 'jquery';


var survey = new Survey.Model({
    title: "", showProgressBar: "bottom", goNextPageAutomatic: true, showNavigationButtons: false,
    pages: [
        {questions: [
            { type: "dropdown",  renderAs: "imagepicker", name: "question", title: "", choicesOrder: "random", 
              choices: [
                {value: "lion", text: "images/image1.gif"},
                {value: "giraffe", text: "images/image1.gif"},
              ]}
        ]},
        {questions: [
            { type: "dropdown",  renderAs: "imagepicker", name: "question", title: "", choicesOrder: "random", 
              choices: [
                {value: "lion", text: "images/image1.gif"},
                {value: "giraffe", text: "images/image1.gif"},
              ]}
        ]},


    ],
    completedHtml: '<h2>Thankyou for taking the survey.</h2>'
});


Survey.defaultBootstrapCss.navigationButton = "btn btn-primary";
Survey.Survey.cssType = "bootstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-content">
            <Survey.Survey model={survey} />
        </div>
        <div className="App-header">
            <h2>Which room looks bigger?</h2>
        </div>
        <p className="App-intro">
            Click on the image to select your answer.
        </p>
      </div>
    );
  }
}

export default App;
