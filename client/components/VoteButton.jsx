VoteButton = React.createClass({
	propTypes: {
		venueId: React.PropTypes.string.isRequired
	},
	
    render() {
        return (
            <div className="col-md-2 col-sm-2 col-xs-12">
			    <div className="vote-button">
			        <a href="#">
				        <i className="fa fa-caret-up"></i>
				    </a>
					<div>000</div>
				    <a href="#">
				        <i className="fa fa-caret-down"></i>
				    </a>
				</div>
			</div>  
        );
    }
});