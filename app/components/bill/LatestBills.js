import React from 'react';

import List from '../common/List';
import CompactBill from './CompactBill';

export default class LatestBills extends React.Component {
    static get contextTypes() {
        return {
            data: React.PropTypes.object
        };
    }

    constructor(props, context) {
        super(props, context);
        this.state = context.data || {items: []};
    }

    render() {
        return (
            <section className="latest-bills">
                <header className="section-header">
                    <h3 className="title">Latest Bills</h3>
                </header>
                <section className="section-content">
                    <List items={this.state.items} itemType={CompactBill}/>
                </section>
            </section>
        );
    }

    componentDidMount() {
        fetch('/api/latest-bills').then((response) => {
            return response.json();
        }).then((data) => {
            this.setState({items: data.items});
        }).catch((err) => {
            throw new Error(err);
        });
    }
}

