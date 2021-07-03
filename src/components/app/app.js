import {MainPage, CartPage, ItemPage} from '../pages';

import { Route, Switch } from 'react-router-dom';
import './app.css';
import AppHeader from "../app-header/app-header";


function App() {
    return (
        <div className="app">
            <AppHeader/>
            <Switch>
                <Route path = '/' exact component={MainPage}/>
                <Route path = '/cart' exact component={CartPage}/>
                <Route path = '/:id'  exact component={ItemPage}/>
            </Switch>
        </div>
    );
}

export default App;
