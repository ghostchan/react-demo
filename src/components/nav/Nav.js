import React,{Component} from 'react';

export default class Nav extends Component{
    render(){
        let {changeView} = this.props;
        return (
            <div className="ui menu">
                <div className="item">Noods</div>
                <div className="item"
                onClick={()=>{changeView('home')}}
                >Home</div>
                <div className="item"
                     onClick={()=>{changeView('list')}}
                >List</div>
            </div>
        )
    }
}