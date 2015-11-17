import express from 'express';
import nconf from 'nconf';

import configManager from './infra/config-manager';
import middlewareManager from './infra/middleware-manager';
import routeManager from './infra/route-manager';
import assetsManager from './infra/assets-manager';

const app = express();

configManager.handle(app);
middlewareManager.handle(app);
assetsManager.handle(app);
routeManager.handle(app);

app.listen(nconf.get('port'), () => {
    console.log('Listening on http://' + nconf.get('host') + ':' + nconf.get('port'));    
});
