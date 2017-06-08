import React,{Component}from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Nav from 'nav/Nav.js';
import CardWrap from 'cardWrap/CardWrap.js';

require('../semantic/dist/semantic.css');
require('./common/style/main.css');


let data = [
    {
        imgSrc: require('img/matthew.jpg'),
        name: 'Matt',
        meta: 'Friends',
        desc: 'Matthew is an interior designer living in New York.',
        joined: 2013,
        likeNum: 35
    },
    {
        imgSrc: require('img/yanzi1.jpg'),
        name: 'Molly',
        meta: 'Coworker',
        desc: 'Molly is a personal assistant living in Pairs.',
        joined: 2011,
        likeNum: 75
    },
    {
        imgSrc: require('img/yanzi2.jpg'),
        name: 'Eylse',
        meta: 'Lover',
        desc: 'Eylse is an interior designer living in New York.',
        joined: 2014,
        likeNum: 350
    },
    {
        imgSrc: require('img/tmac.jpg'),
        name: 'Eylse',
        meta: 'Lover',
        desc: 'Eylse is an interior designer living in New York.',
        joined: 2014,
        likeNum: 350
    },
    {
        imgSrc: require('img/tmac2.jpg'),
        name: 'tmac2',
        meta: 'Lover',
        desc: 'Eylse is an interior designer living in New York.',
        joined: 2014,
        likeNum: 350
    },
    {
        imgSrc: require('img/yanzi2.jpg'),
        name: '孙燕姿',
        meta: 'Lover',
        desc: 'Eylse is an interior designer living in New York.',
        joined: 2014,
        likeNum: 350
    }
];

class App extends Component{
    getChildContext(){
        return{
            et:"born"
        }
    }
    render(){
        let {data} = this.props;
        return (
            <div className="ui container">
                <div className="ui dividing"></div>
                <Nav/>
                <CardWrap data={data}/>
            </div>
        );
    }
}

App.childContextTypes={
    et:PropTypes.string
}

ReactDOM.render(
    <App data={data}/>,
    document.getElementById('root')
);

if(module.hot){
    module.hot.accept()
}