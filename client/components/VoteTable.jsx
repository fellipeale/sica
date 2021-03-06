VoteTable = React.createClass({
    mixins: [ReactMeteorData],
    
    getMeteorData() {
        return {
            venues: Venues.find({}).fetch()
        }
    },
    
    renderVenues() {
        return this.data.venues.map(function (venue) {
            return <Venue key={venue.id} venue={venue} editMode={false} /> 
        });
    },
    
    render() {
        return (
            <div className="container-fluid features" id="section2">
            	<div className="container">
            		<div className="row">
            		    <h2 className="text-center features-text">Pool Topic</h2>
            		    {this.renderVenues()}
            		</div>
            	</div>
            </div>
        );
    }
});