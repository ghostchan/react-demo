import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <div>Hello mmmWorl</div>,
    document.getElementById('root')
);

if(module.hot){
    module.hot.accept()
}