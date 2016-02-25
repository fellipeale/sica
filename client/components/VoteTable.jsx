VoteTable = React.createClass({
    mixins: [ReactMeteorData],
    
    getMeteorData() {
        return {
            venues: Venues.find({}).fetch()
        }
    },
    
    renderVenues() {
        return this.data.venues.map(function (venue) {
            return <Venue key={venue.id} venue={venue} /> 
        });
    },
    
    render() {
        return (
            <div className="container-fluid features" id="section2">
            	<div className="container">
            		<div className="row">
            		    <VoteTopic />
            		    {this.renderVenues()}
            		</div>
            	</div>
            </div>
        );
    }
});