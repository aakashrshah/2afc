import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import $ from "jquery";


ReactDOM.render(
  <App />,
  document.getElementById('root')
);


//ReactDOM.render(<Survey.Survey model={survey} />, document.getElementById("surveyElement"));


/*
Survey.JsonObject.metaData.addProperty("dropdown", {name: "renderAs", default: "standard", choices: ["standard", "imagepicker"]});
var survey = new Survey.Model({ questions: [
 { type: "dropdown", name: "choosepicture", renderAs: "imagepicker", title: "What animal would you like to see first ?", 
     choices: [
        {value: "lion", text: "../../images/image-picker/lion.jpg"},
        {value: "giraffe", text: "../../images/image-picker/giraffe.jpg"},
        {value: "panda", text: "../../images/image-picker/panda.jpg"},
        {value: "camel", text: "../../images/image-picker/camel.jpg"}
     ]
  }
]});


var widget = {
    name: "imagepicker",
    isFit : function(question) { return question["renderAs"] === 'imagepicker'; },
    isDefaultRender: true,
    afterRender: function(question, el) {

        var $el = $(el).find("select");

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
        })
    }
    
        ,
        willUnmount: function(question, el) {
            var $el = $(el).find("select");
            $el.data('picker').destroy();
        } 
    
}

Survey.CustomWidgetCollection.Instance.addCustomWidget(widget);


//ReactDOM.render(<Survey.Survey model={survey}/>, document.getElementById("surveyElement"));

*/
