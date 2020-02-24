import React from 'react';
import { render } from 'react-dom';
import MainSource from './app/components/main.js';

// Bootstrap
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import bootstrapGrid from '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import bootstrapJs from '../node_modules/bootstrap/dist/js/bootstrap.min.js';

render(<MainSource />, document.getElementById("app"));