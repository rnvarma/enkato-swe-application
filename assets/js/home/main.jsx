require('bootstrap-loader');
require("css/home.scss")

var React = require('react')
var ReactDOM = require('react-dom')

var HomePage = require('js/home/HomePage')

ReactDOM.render(<HomePage />, document.getElementById('react-app'))




