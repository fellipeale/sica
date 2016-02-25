Venues = new Mongo.Collection('venues');

if (Meteor.isClient) {
    Meteor.subscribe('venueSearch');
    
    Meteor.startup(function () {
        ReactDOM.render(<App />, document.getElementById('render-target'));
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });

    Meteor.publish('venueSearch', function () {
        var self = this;
        
        try {
            var response = HTTP.get('https://api.foursquare.com/v2/venues/search', {
                params: {
                    client_id: Meteor.settings.foursquareId,
                    client_secret: Meteor.settings.foursquareSecret,
                    v: Meteor.settings.foursquareVersion,
                    ll: '-25.452412,-49.244691',
                    radius: '1000',
                    categoryId: '4d4b7105d754a06374d81259',
                    intent: 'browse'
                }
            });
            
            _.each(response.data.response.venues, function (item) {
                var venue = {
                    id: item.id,
                    name: item.name,
                    url: item.url,
                    contact: item.contact,
                    location: item.location,
                    photos: getVenuePhotos(item.id)
                };
                
                self.added('venues', venue.id, venue);
            });
            
            self.ready();
        } catch (error) {
            console.log(error);
        }
    });
    
    function getVenuePhotos(venueId) {
        try {
            var response = HTTP.get('https://api.foursquare.com/v2/venues/' + venueId + '/photos', {
                params: {
                    client_id: Meteor.settings.foursquareId,
                    client_secret: Meteor.settings.foursquareSecret,
                    v: Meteor.settings.foursquareVersion
                }
            });
            
            return _.map(response.data.response.photos.items, function (item) {
                return {
                    id: item.id,
                    prefix: item.prefix,
                    suffix: item.suffix,
                    height: item.height,
                    width: item.width
                };
            });
        } catch (error) {
            console.log(error);
        }
    }
    
}