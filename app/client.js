import React from 'react';
import {Router} from 'react-router';
import {createHistory} from 'history';
import {render} from 'react-dom';

import routes from './routes';

import ContextWrapper from './components/common/ContextWrapper';

render((
    <ContextWrapper data={window.APP_STATE || {}}>
        <Router history={createHistory()}>
            {routes}
        </Router>
    </ContextWrapper>
), document.querySelectorAll('[data-ui-role="content"]')[0]);
