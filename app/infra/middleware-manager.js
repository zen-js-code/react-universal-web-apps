import compression from 'compression';
import nconf from 'nconf';
import morgan from 'morgan';

import baseManager from './base-manager';

const middlewareManager = Object.assign({}, baseManager, {
    configureDevelopmentEnv(app) {
        app.use(compression({threshold: nconf.get('compressionThreshold')}));

        // to allow caching in-browser (mostly for libs), but still not to cache dev. files
        app.use((req, res, next) => {
            res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
            res.header('Expires', '-1');
            res.header('Pragma', 'no-cache');
            next();
        });

        app.use(morgan('dev'));

    }
});

export default middlewareManager;