import FS from 'fs';

import express from 'express';
import axios from 'axios';

import nconf from 'nconf';

import React from 'react'
import {renderToString} from 'react-dom/server';
import {match, RoutingContext} from 'react-router';

import baseManager from './base-manager';
import routes from '../routes';

import ContextWrapper from '../components/common/ContextWrapper';

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
                const {promises, components} = this.mapComponentsToPromises(
                    renderProps.components, renderProps.params);

                Promise.all(promises).then((values) => {
                    const data = this.prepareData(values, components);
                    const html = this.render(renderProps, data);

                    res.render('index', {
                        content: html,
                        context: JSON.stringify(data)
                    });
                }).catch((err) => {
                    res.status(500).send(err);
                });
            });
        });

        return router;
    },

    mapComponentsToPromises(components, params) {
        const filteredComponents = components.filter((Component) => {
            return (typeof Component.requestData === 'function');
        });

        const promises = filteredComponents.map(function(Component) {
            return Component.requestData(params, nconf.get('domain'));                  
        });

        return {promises, components: filteredComponents};
    },

    prepareData(values, components) {
        const map = {};

        values.forEach((value, index) => {
            map[components[0].NAME] = value.data;
        });

        return map;
    },

    render(renderProps, data) {      
        let html = renderToString(
            <ContextWrapper data={data}>
                <RoutingContext {...renderProps}/>
            </ContextWrapper>
        );

        return html;
    },


    createApiRouter(app) {
        const router = express.Router();

        this.createLastestBillsRoute(router);
        this.createDetailedBillRoute(router);        
        return router;
    },
    createLastestBillsRoute(router) {
        router.get('/latest-bills', (req, res) => {
            this.retrieveLatestBills((err, data) => {
                if(!err) {
                    res.json(data);                                    
                } else {
                    res.status(500).send(err);
                }
            });
        });
    },

    createDetailedBillRoute(router) {
        router.get('/bill/:id', (req, res) => {
            const id = req.params.id;

            this.retrieveDetailedBills((err, data) => {
                if(!err) {
                    const billData = data.items.filter((item) => {
                        return item.id === id;
                    })[0];

                    res.json(billData);                                    
                } else {
                    res.status(500).send(err);
                }
            });
        });
    },
    retrieveLatestBills(callback) {
        FS.readFile('./app/fixtures/latest-bills.json', 'utf-8', (err, content) => {
            callback(err, JSON.parse(content));
        });
    },

    retrieveDetailedBills(callback) {
        FS.readFile('./app/fixtures/detailed-bills.json', 'utf-8', (err, content) => {
            callback(err, JSON.parse(content));
        });
    }
});

export default routeManager;