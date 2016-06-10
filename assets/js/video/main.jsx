require('bootstrap-loader');
require("css/video.scss")

var React = require('react')
var ReactDOM = require('react-dom')

var VideoPage = require('js/video/VideoPage')

ReactDOM.render(<VideoPage />, document.getElementById('react-app'))
