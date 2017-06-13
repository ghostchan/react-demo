import React,{Component}from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Nav from 'nav/Nav.js';
import CardWrap from 'cardWrap/CardWrap.js';
import Home from 'home/Home.js';

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
    constructor(props){
        super(props);
        this.state = {
            view: 'home'
        }
        this.changeView = this.changeView.bind(this);
    }

    changeView(view){
        this.setState({
            view
        });
    }
    getChildContext(){
        return{
            et:"born"
        }
    }
    componentDidUpdate(){
        console.log('App 更新好了');
    }
    componentDidMount(){
       console.log('App 渲染完成');
    }
    render(){

        let {view} = this.state;

        let {data} = this.props;

        let viewComp = null;
        switch(view){

            case 'list':
                viewComp = <CardWrap data={data}/>
                break;
            case 'home':

            default:
                viewComp = <Home/>
        }
        return (
            <div className="ui container">
                <div className="ui dividing"></div>
                <Nav changeView={this.changeView}/>
                {viewComp}
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