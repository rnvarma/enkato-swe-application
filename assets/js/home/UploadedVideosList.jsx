var React = require('react')

module.exports = React.createClass({
  render: function() {
    var videos = this.props.videos.map(function(v) {
      var url = "/v/" + v.id
      return (
        <div className="videoLink" key={v.id}>
          <a href={url}>{v.name}</a>
        </div>
      )
    })
    return (
      <div className="uploadedVideoList">
        {videos}
      </div>
    )
  }
})