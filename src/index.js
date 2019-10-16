import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';


// import language from './language.js/'
import './index.css';

import Home from './pages/home/application';


import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import enJSON from './language/en.json';
import vnJSON from './language/vn.json';

i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'en',                              // language to use
    resources: {
        en: enJSON,
        vn : vnJSON,
    },
});

ReactDOM.render((
    <BrowserRouter>
        <I18nextProvider i18n={i18next}>
            <Home/>
        </I18nextProvider>
    </BrowserRouter >
), document.getElementById('root'));

serviceWorker.unregister();
