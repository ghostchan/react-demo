import React from 'react';
import ReactDOM from 'react-dom';

require('./common/style/main.css');
let w1 = "hello",
    w2 = "world2";
let sp = <span>worldw</span>
ReactDOM.render(
    <div style={{color:"red"}}>{w1} {sp}</div>,
    document.getElementById('root')
);

if(module.hot){
    module.hot.accept()
}