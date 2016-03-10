PoolForm = React.createClass({
    getInitialState() {
        return {
            pool: {
                subject: '',
                venues: Venues.find({}).fetch()
            }
        };
    },
    
    removeVenue(venue) {
        this.state.pool.venues.splice(this.state.pool.venues.indexOf(venue), 1);
    },
    
    renderVenues() {
        let self = this;
        
        return this.state.pool.venues.map(function (venue) {
            return <Venue key={venue.id} venue={venue} editMode={true} onClick={self.removeVenue.bind(null, venue)} />;
        });
    },
    
    handleSubmit(e) {
        e.preventDefault();

        this.state.pool.subject = this.refs.poolSubject.value;

        Meteor.call('addPool', this.state.pool);

        this.props.onSubmit();
    },
    
    render() {
        return (
            <form className="new-pool" onSubmit={this.handleSubmit}>
                <input type="text" ref="poolSubject" className="text-center features-text h2" placeholder="Pool subject" />
                {this.renderVenues()}
            </form>
        );
    } 
});