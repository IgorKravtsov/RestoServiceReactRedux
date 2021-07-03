import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import store from './store';



ReactDOM.render(

    <Provider store={store}>
        {/*<ErrorBoundry>*/}
        {/*    <RestoServiceContext.Provider value={restoService}>*/}
                <Router>
                    <App/>
                </Router>
        {/*    </RestoServiceContext.Provider>*/}
        {/*</ErrorBoundry>*/}
    </Provider>,
  document.getElementById('root')
);

