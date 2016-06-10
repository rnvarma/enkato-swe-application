var React = require('react')

var VideoSideBar = require('js/video/VideoSideBar');
var VideoArea = require('js/video/VideoArea');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="videoPlayer">
        <VideoSideBar data={this.props.data} onNewTopic={this.props.onNewTopic}/>
        <VideoArea data={this.props.data} onPlayerInit={this.props.onPlayerInit}/>
      </div>
    )
  }
})