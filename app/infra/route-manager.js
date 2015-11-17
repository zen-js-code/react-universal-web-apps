import FS from 'fs';

import express from 'express';

import React from 'react'
import {renderToString} from 'react-dom/server';
import {match, RoutingContext} from 'react-router';

import baseManager from './base-manager';
import routes from '../routes';

class AugmentedRoutingContext extends RoutingContext {
    createElement(component, props) {
        const context = this.props.context;
        return component == null ? null : this.props.createElement(component, {...props, ...{context}});
    }
};

const routeManager = Object.assign({}, baseManager, {
    configureDevelopmentEnv(app) {
        const apiRouter = this.createApiRouter();
        const pagesRouter = this.createPageRouter();
        app.use('/api', apiRouter);            
        app.use('/', pagesRouter);            
    },

    createPageRouter() {
        const router = express.Router();
        
        router.get('*', (req, res) => {
            match({routes, location: req.originalUrl}, (err, redirectLocation, renderProps) => {
                this.retrieveLatestBills((err, data) => {
                    if(!err) {
                        const html = this.render(renderProps, data);

                        res.render('index', {
                            content: html,
                            context: data
                        });
                    } else {
                        res.status(500).send();
                    }
                });
            });
        });

        return router;
    },

    createApiRouter(app) {
        const router = express.Router();

        router.get('/latest-bills', (req, res) => {
            this.retrieveLatestBills((err, content) => {
                if(!err) {
                    res.json(JSON.parse(content));                                    
                } else {
                    res.status(500).send();
                }
            });
        });

        return router;
    },

    retrieveLatestBills(callback) {
        FS.readFile('./app/fixtures/latest-bills.json', 'utf-8', callback);
    },

    render(renderProps, data) {
        const additionalProps = {context: JSON.parse(data)};
        const html = renderToString(
            <AugmentedRoutingContext {...renderProps} {...additionalProps}/>
        );

        return html;
    }
});

export default routeManager;