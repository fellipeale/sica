PoolCreation = React.createClass({
    getInitialState() {
        return {
            showForm: false  
        };
    },
    
    toggleForm() {
        this.setState({
            showForm: !this.state.showForm
        });
    },
    
    render() {
        return (
            <div>
                <div className="text-center">
                    {
                        !this.state.showForm ?
                        (
                            <a className="link-button" onClick={this.toggleForm}>Create new pool</a>
                        ) :
                        (
                            <div>
                                <a className="link-button" onClick={this.toggleForm}>Cancel</a>
                            </div>
                        )
                    }
                    
                </div>
                {
                    this.state.showForm ? <PoolForm onSubmit={this.toggleForm} /> : ''
                }
            </div>
        );
    }
});