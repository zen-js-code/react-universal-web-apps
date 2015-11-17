import React from 'react';

import List from '../common/List';
import CompactBill from './CompactBill';

export default class LatestBills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: []};
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
