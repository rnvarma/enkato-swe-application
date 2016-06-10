var React = require('react')

module.exports = React.createClass({
  onClick: function() {
    this.props.player.seekTo(this.props.topic.time);
    this.props.player.playVideo();
  },
  sanitizeTopic: function(time) {
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return minutes + ":" + seconds;
  },
  render: function() {
    var time = this.sanitizeTopic(this.props.topic.time);
    return (
      <div className="topicButton" onClick={this.onClick}>
        <div className="topicName">
          {this.props.topic.name}
        </div>
        <div className="topicTime">
          {time}
        </div>
      </div>
    )
  }
})