Venue = React.createClass({
    propTypes: {
        venue: React.PropTypes.object.isRequired,
        editMode: React.PropTypes.bool.isRequired
    },

    hideElement(attribute) {
    	return attribute ? '' : 'hidden';
    },

    render() {
    	var photoLink =  this.props.venue.photos.length ? this.props.venue.photos[0].prefix + '120x130' + this.props.venue.photos[0].suffix : '';
    	
        return (
            <div className="col-md-12 col-sm-12 col-xs-12">
            	{
            		!this.props.editMode ? <VoteButton venueId={this.props.venue.id} /> : ''
            	}
                
                <div className="col-md-2 col-sm-3 col-xs-12">
                	<a href="#">
    					<img className="thumbnail" src={photoLink} />
    				</a>
    			</div>
    			
                <div className="col-md-8 col-sm-7 col-xs-12 icon-text-box">
                    <h4>{this.props.venue.name}</h4>
                    <span>({this.props.venue.location.distance}m away)</span>
                    <p>{this.props.venue.location.formattedAddress.join(', ')}</p>
                    <div className="col-md-3 col-sm-6 col-xs-12">
						<i className="fa fa-compass"></i>
						<a href={'https://www.google.com/maps?daddr=' + this.props.venue.location.lat + ',' + this.props.venue.location.lng}>
						    Directions
						</a>
					</div>
					<div className={'col-md-3 col-sm-6 col-xs-12 ' + this.hideElement(this.props.venue.contact.formattedPhone)}>
						<i className="fa fa-phone"></i> 
						{this.props.venue.contact.formattedPhone}
					</div>
					<div className={'col-md-3 col-sm-6 col-xs-12 ' + this.hideElement(this.props.venue.contact.twitter)}>
						<i className="fa fa-twitter"></i>
						<a href={'http://twitter.com/' + this.props.venue.contact.twitter}>
						    @{this.props.venue.contact.twitter}
					    </a>
					</div>
					<div className={'col-md-3 col-sm-6 col-xs-12 ' + this.hideElement(this.props.venue.url)}>
						<i className="fa fa-link"></i>
						<a href={this.props.venue.url}>
						    {this.props.venue.name}
					    </a>
					</div>
			    </div>
			    
			    {
			    	this.props.editMode ? (
			    		<div className="col-md-2 col-sm-2 col-xs-12">
							<a href="#" onClick={this.props.onClick}>
								<i className="fa fa-times"></i>
							</a>
						</div>
			    	) : ''
			    }
            </div>
        );
    }
});