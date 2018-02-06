import '@/assets/css/reset.css';
import '@/assets/css/style.css';
import 'babel-polyfill'
/* react*/
import React from 'react';
import { render } from 'react-dom';
import TodoS from './stores/todos';
import TypeS from './stores/types';
import App from 'C/app';

var todos = new TodoS();
var types = new TypeS();

render(<App todos={todos} types={types} />,
    document.getElementById('app'));


/* webpack hot reload*/
if (module.hot) {
    module.hot.accept();
}
