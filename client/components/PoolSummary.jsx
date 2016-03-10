PoolSummary = React.createClass({
    propTypes: {
        pool: React.PropTypes.object.isRequired
    },
    
    render() {
        return (
            <div className="col-md-12 col-sm-12 col-xs-12 icon-box">
                <div className="text-center col-md-2 col-sm-3 col-xs-12">
                	<a href="#">
    					<img className="thumbnail" src="https://irs2.4sqi.net/img/general/120x130/16322614_5dJnMYbq0XRzlCTSlAad9SDTRFjIQUAc2yY0m-sPIow.jpg" />
    				</a>
    			</div>
    			
                <div className="col-md-8 col-sm-7 col-xs-12 icon-text-box">
                    <h4>{this.props.pool.subject}</h4>
                    <p>
                        <i className="fa fa-trophy gold"></i>
                        Venue 1
                    </p>
                    <p>
                        <i className="fa fa-trophy silver"></i>
                        Venue 2
                    </p>
                    <p>
                        <i className="fa fa-trophy bronze"></i>
                        Venue 3
                    </p>
			    </div>
            </div>    
        );
    } 
});