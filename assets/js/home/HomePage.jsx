var React = require('react')

var UploadVideoForm = require('js/home/UploadVideoForm')
var UploadedVideosList = require('js/home/UploadedVideosList')

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
  getInitialState: function() {
    return {videos: []}
  },
  componentDidMount: function() {
    $.ajax({
      url: "/1/allvideos",
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({videos: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  onURLSubmit: function(url, name) {
    data = {url: url, name: name}
    $.ajax({
      url: "/1/uploadvideo",
      dataType: 'json',
      type: 'POST',
      data: data,
      beforeSend: function (xhr) {
        xhr.withCredentials = true;
        xhr.setRequestHeader("X-CSRFToken", csrftoken);
      },
      success: function(data) {
        this.setState({
          videos: this.state.videos.concat(data)
        })
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return (
      <div className="homePage">
        <UploadVideoForm onURLSubmit={this.onURLSubmit}/>
        <UploadedVideosList videos={this.state.videos}/>
      </div>
    )
  }
})