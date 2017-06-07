
import React,{Component} from 'react';
import Card from 'card/Card.js';


export default class CardWrap extends Component{
    render(){
        let {data} = this.props;
        // console.log(data);
        let cards = data.map((ele,i)=>{
            return (
                <Card key={i} {...ele}/>
            )
        });
        return (
            <div className="ui cards">
                {cards}
            </div>
        )
    }
}