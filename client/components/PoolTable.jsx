PoolTable = React.createClass({
    mixins: [ReactMeteorData],
    
    getMeteorData() {
        return {
            pools: Pools.find({}, {sort: {createdAt: -1}}).fetch()
        };
    },
    
    renderPools() {
        return this.data.pools.map((pool) => {
            return <PoolSummary key={pool._id} pool={pool} />;
        });
    },
    
    render() {
        return (
            <div className="container-fluid features" id="section2">
            	<div className="container">
            		<div className="row">
            		    <PoolCreation />
            		    {this.renderPools()}
            		</div>
            	</div>
            </div>
        );
    }
});