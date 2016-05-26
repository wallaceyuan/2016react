import React from 'react';
import { render } from 'react-dom';
import { App,Params,Querys,Redirects,Hook } from './containers';

import 'bootstrap/dist/css/bootstrap.css';

let root = document.getElementById('app');
render( <Hook />, root );
