var React = require('react')
var YouTubeIframeLoader = require('youtube-iframe');

var VideoPlayer = require('js/video/VideoPlayer')

function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie != '') {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = $.trim(cookies[i]);
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) == (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

csrftoken = getCookie('csrftoken');

module.exports = React.createClass({
  getInitialState: function () {
    var v_id = $("#video-id").attr("data-vid");
    return {
      v_id: v_id,
      video_data: {},
      topics: [],
      player: null
    }
  },
  componentDidMount: function() {
    $.ajax({
      url: "/1/video/" + this.state.v_id,
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log(data);
        this.setState({
          video_data: data.video_data,
          topics: data.topics
        });
        
        var yt_id = this.state.video_data.yt_id
        var this2 = this
        var loadPlayer = function(YT) {
          var player = new YT.Player('youtubePlayer', {
            height: '600',
            width: '100%',
            videoId: yt_id,
            autoplay: 1,
          });
          this2.setState({player: player})
        }
        YouTubeIframeLoader.load(loadPlayer)
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  onPlayerInit: function(player) {
    this.setState({player: player});
  },
  onNewTopic: function(name, time) {
    data = {
      name: name,
      time: time,
      v_id: this.state.v_id
    }
    $.ajax({
      url: "/1/newtopic",
      dataType: 'json',
      type: 'POST',
      data: data,
      beforeSend: function (xhr) {
        xhr.withCredentials = true;
        xhr.setRequestHeader("X-CSRFToken", csrftoken);
      },
      success: function(topic) {
        this.setState({
          topics: this.state.topics.concat(topic)
        })
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return (
      <div className="videoPage">
        <VideoPlayer
          data={this.state}
          onPlayerInit={this.onPlayerInit}
          onNewTopic={this.onNewTopic}/>
      </div>
    )
  },
})