var CommentBox = React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    render: function() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentsList data={this.state.data} />
                <CommentForm />
            </div>
        );
    }
});
