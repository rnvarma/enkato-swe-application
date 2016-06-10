var React = require('react')

module.exports = React.createClass({
  getInitialState: function() {
    return {url: '', name: ''}
  },
  onURLValChange: function(e) {
    this.setState({url: e.target.value});
  },
  onNameChange: function(e) {
    this.setState({name: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault()
    var url = this.state.url;
    var name = this.state.name;
    if (!url) return;
    this.props.onURLSubmit(url, name);
    this.setState({url: '', name: ''});
  },
  render: function() {
    return (
      <form className="uploadVideoForm" onSubmit={this.handleSubmit}>
        <h3>Upload a Youtube URL to index and annotate it!</h3>
        <input
          type="text"
          placeholder="Enter a Youtube URL"
          value={this.state.url}
          onChange={this.onURLValChange}/>
        <input
          type="text"
          placeholder="Enter the video name"
          value={this.state.name}
          onChange={this.onNameChange}/>
        <button type="submit">Upload Video!</button>
      </form>
    )
  }
})