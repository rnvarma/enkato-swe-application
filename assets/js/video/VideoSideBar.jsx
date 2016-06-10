var React = require('react')

var TopicList = require('js/video/TopicList');
var NewTopicForm = require('js/video/NewTopicForm');

module.exports = React.createClass({
  render: function() {
    return (
        <div className="videoSideBar">
            <TopicList data={this.props.data} />
            <NewTopicForm data={this.props.data} onNewTopic={this.props.onNewTopic}/>
        </div>
    )
  }
})