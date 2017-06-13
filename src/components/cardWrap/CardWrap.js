
import React,{Component} from 'react';
import Card from 'card/Card.js';


export default class CardWrap extends Component{
    componentDidUpdate(){
        console.log('CardWrap 更新好了');
    }
    componentDidMount(){
        console.log('CardWrap 渲染完成');
    }
    componentWillUnmount(){
        console.log('CardWrap 被卸载');
    }
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