var React = require('react')

var TopicButton = require('js/video/TopicButton');

module.exports = React.createClass({
    render: function() {
        var player = this.props.data.player
        var topics = this.props.data.topics.map(function(topic) {
            return (
                <TopicButton key={topic.id} topic={topic} player={player}/>
            );
        })
        return (
          <div className="topicList">
            {topics}
          </div>
        )
    }
})
