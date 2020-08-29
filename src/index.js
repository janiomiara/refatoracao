import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {BrowserRouter, Route, Switch } from "react-router-dom";
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import 'react-s-alert/dist/s-alert-css-effects/scale.css';
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css';
import 'react-s-alert/dist/s-alert-css-effects/flip.css';
import 'react-s-alert/dist/s-alert-css-effects/genie.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css';
import 'react-s-alert/dist/s-alert-css-effects/genie.css';
import 'react-s-alert/dist/s-alert-default.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Themes/ModalCSS.css";
import '@fortawesome/fontawesome-free';
import "./Themes/Icons";


import {Provider} from "mobx-react";






//
//
// const stores = {BotStores};

// {...stores}

ReactDOM.render(
    <Provider >
    <BrowserRouter>
        <Switch>
            <Route render={props => <App {...props}/> } />
        </Switch>
    </BrowserRouter>
    </Provider>,
    document.getElementById('root'));






