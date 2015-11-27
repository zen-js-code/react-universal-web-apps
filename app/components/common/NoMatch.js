import React from 'react';

import {Link} from 'react-router';

export default class NoMatch extends React.Component {
    
    render() {
        return (
            <section className="app-content">
                <header className="section-header">
                    <h3 className="title">Not Found</h3>
                    <Link className="link" to={this.context.root}>&#171; Home</Link>
                </header>
            </section>
        );
    }
}
