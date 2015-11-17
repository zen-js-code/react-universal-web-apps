import React from 'react';
import {Router} from 'react-router';
import {createHistory} from 'history';
import {render} from 'react-dom';

import routes from './routes';

render((
    <Router history={createHistory()}>
        {routes}
    </Router>
), document.querySelectorAll('[data-ui-role="content"]')[0]);
