import React from 'react';
import axios from 'axios';

export default class DetailedBill extends React.Component {
    static get NAME() {
        return 'DetailedBill';
    }

    static get contextTypes() {
        return {
            data: React.PropTypes.object            
        };
    }

    static requestData(params, domain = '') {
        return axios.get(`${domain}/api/bill/${params.id}`);
    }

    constructor(props, context) {
        super(props, context);
        this.state = context.data[DetailedBill.NAME] || {};
    }

    render() {
        const amount = `$${this.state.amount}`;

        return (
            <section className="latest-bills">
                <header className="section-header">
                    <h3 className="title">Bill Details</h3>
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

    componentDidMount() {
        this.constructor.requestData(this.props.params).then((response) => {
            this.setState(response.data);
        }).catch((err) => {
            throw new Error(err);
        });
    }
}
