import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next'

import config from 'react-global-configuration';
// import language from './language.js/'
import './index.css';

import Home from './pages/home/application';
import Login from './pages/login/application';

i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
});


// config.set(language)

ReactDOM.render((
    <BrowserRouter>
        <I18nextProvider i18n={i18next}>
            <Home />

        </I18nextProvider>,



    </BrowserRouter >
), document.getElementById('root'));

serviceWorker.unregister();
