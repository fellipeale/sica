const {
    Router,
    Route,
    IndexRoute,
    Link,
    history
} = ReactRouter;

const browserHistory = history.createHistory();
    
Routes = React.createClass({
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={PoolTable} />
                    <Route path="pool" component={VoteTable} />
                </Route>
            </Router>
        );
    } 
});