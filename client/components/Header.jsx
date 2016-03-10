const {
  Link
} = ReactRouter;

Header = React.createClass({
    render() {
        return (
            <header className="header">
            	<div className="container">
            		<div className="row">
            			<div className="col-md-4 ">
            				<div className="navbar-header">
            					    <button type="button" className="navbar-toggle menu-button" data-toggle="collapse" data-target="#myNavbar">
            					        <span className="glyphicon glyphicon-align-justify"></span>
            					    </button>
                  					<Link className="navbar-brand logo" to="/">SICA</Link>
                			</div>
            			</div>
            			<div className="col-md-8">
            				<nav className="collapse navbar-collapse" id="myNavbar" role="navigation">
            					<ul className="nav navbar-nav navbar-right menu">
            							<li><a href="#page-top" className="page-scroll active">Home</a></li>
            					</ul>
            				</nav>
            			</div>
            		</div>
            	</div>
            </header>
        );
    } 
});