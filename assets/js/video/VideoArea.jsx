var React = require('react')

var YoutubePlayer = require('js/video/YoutubePlayer');
var VideoControls = require('js/video/VideoControls');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="videoArea">
        <YoutubePlayer data={this.props.data} onPlayerInit={this.props.onPlayerInit}/>
        <VideoControls data={this.props.data} />
      </div>
    )
  }
})