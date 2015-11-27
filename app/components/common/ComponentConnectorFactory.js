import React from 'react';

import AppDispatcher from '../../dispatcher/AppDispatcher';

export class ComponentConnectorFactory {
    connect(options) {
        const {component: Component, store: Store, name: name} = options;
        const storeInstance = new Store();
        
        AppDispatcher.register(storeInstance.handleAction.bind(storeInstance));

        class ComponentConnector extends React.Component {
            static get NAME() {
                return name;
            }

            static get contextTypes() {
                return {
                    data: React.PropTypes.object            
                };
            }

            static loadAction(params, domain) {
                return Component.loadAction(params, domain);
            }

            constructor(props, context) {
                super(props, context);
                storeInstance.setAll(context.data[name]);
            }
            
            render() {
                return <Component {...this.props} store={storeInstance}/>;
            }
        }

        return ComponentConnector;
    }
}

export default new ComponentConnectorFactory();
