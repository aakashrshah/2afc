import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
let Survey = require('survey-react');
let $ = require('jquery');

var image1Path = "/images/image1.gif";
var image2Path = "/images/image1.gif";
Survey.JsonObject.metaData.addProperty("dropdown", {name: "renderAs", default: "standard", choices: ["standard", "imagepicker"]});
var survey = new Survey.Model({
    showProgressBar: "bottom", 
    goNextPageAutomatic: true, 
    showNavigationButtons: false,
    pages: [
        {questions: [
            { type: "dropdown",  renderAs: "imagepicker", name: "choosepicture", title: "", choicesOrder: "random", 
              choices: [
                {value: "image1", text: image1Path},
                {value: "image2", text: image2Path},
              ]
            }
        ]},
        {questions: [
            { type: "dropdown",  renderAs: "imagepicker", name: "choosepicture", title: "", choicesOrder: "random", 
              choices: [
                {value: "image1", text: image1Path},
                {value: "image2", text: image2Path},
              ]
            }
        ]},
    ],
    completedHtml: '<h2>Thankyou for taking the survey.</h2>'
});


// Survey.JsonObject.metaData.addProperty("dropdown", {name: "renderAs", default: "standard", choices: ["standard", "imagepicker"]});
// var survey = new Survey.Model({ questions: [
//  { type: "dropdown", name: "choosepicture", renderAs: "imagepicker", title: "What animal would you like to see first ?", 
//      choices: [
//         {value: "lion", text: "../../images/image-picker/lion.jpg"},
//         {value: "giraffe", text: "../../images/image-picker/giraffe.jpg"},
//         {value: "panda", text: "../../images/image-picker/panda.jpg"},
//         {value: "camel", text: "../../images/image-picker/camel.jpg"}
//      ]
//   }
// ]});

var widget = {
    name: "imagepicker",
    isFit : function(question) { return question["renderAs"] === 'imagepicker'; },
    isDefaultRender: true,
    afterRender: function(question, el) {

        var $el = $(el).find("select");
        console.log($el.text());
        var options = $el.find('option');
        for (var i=1; i<options.length; i++) {
            options[i].dataset["imgSrc"] = options[i].text;
        }
        $el.imagepicker({
            hide_select : true,
            show_label  : false,
            selected: function(opts) {
                question.value = opts.picker.select[0].value;
            }
        })();
    },
    // willUnmount: function(question, el) {
    //         var $el = $(el).find("select");
    //         $el.data('picker').destroy();
    // } 
}

Survey.CustomWidgetCollection.Instance.addCustomWidget(widget);


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
