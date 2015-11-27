import React from 'react';

import {Link} from 'react-router';

import Actions from '../../actions/Actions';

export default class DetailedBill extends React.Component {
    static loadAction(params, domain) {
        return Actions.loadDetailedBillData(params, domain);
    }

    static get contextTypes() {
        return {
            root: React.PropTypes.string            
        };
    }

    constructor(props) {
        super(props);
        this.changeHandler = this.onChange.bind(this);
        this.state = this.props.store.getAll() || {};
    }

    componentWillMount() {
        if (process.browser) {
            this.props.store.addChangeListener(this.changeHandler);            
        }
    }

    componentWillUnmount() {
        this.props.store.removeChangeListener(this.changeHandler);
    }

    componentDidMount() {
        Actions.getDetailedBillData(this.props.params);
    }

    onChange() {
        const state = this.props.store.getAll();
        this.setState(state);
    }

    render() {        
        const amount = `$${this.state.amount}`;

        return (
            <section className="latest-bills">
                <header className="section-header">
                    <h3 className="title">Bill Details</h3>
                    <Link className="link" to={this.context.root}>&#171; Home</Link>
                </header>
                <section className="section-content">
                    <div className="bill detailed-bill">
                        <img className="icon" src={this.state.icon}/>
                        <div className="info-container">
                            <h4 className="title">{this.state.vendor}</h4>
                            <span className="period">{this.state.period}</span>
                            <hr/>
                            <span>
                                <span className="period">Paid using: </span> 
                                <span>{this.state.paymeans}</span>
                            </span>
                        </div>
                        <span className="amount">{amount}</span>
                    </div>
                </section>
            </section>
        );
    }
}
