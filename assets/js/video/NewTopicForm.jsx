var React = require('react')

module.exports = React.createClass({
    getInitialState: function() {
        return {name: ''}
    },
    onNameChange: function(e) {
        this.setState({name: e.target.value});
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var name = this.state.name;
        var time = Math.floor(this.props.data.player.getCurrentTime());
        this.props.onNewTopic(name, time);
        this.setState({name: ''});
    },
    render: function() {
        return (
            <form className="newTopicForm" onSubmit={this.handleSubmit}>
                <input
                    className="inputArea"
                    type="text"
                    placeholder="Enter a new topic name"
                    value={this.state.name}
                    onChange={this.onNameChange}/>
                <button className="submitButton" type="submit">Add</button>
            </form>
        )
    }
})