import FS from 'fs';

import express from 'express';

import React from 'react'
import {renderToString} from 'react-dom/server';
import {match, RoutingContext} from 'react-router';

import baseManager from './base-manager';

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
            res.render('index');
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
    }
});

export default routeManager;