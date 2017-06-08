import React,{Component} from 'react';
import PropTypes from 'prop-types';

let propTypes = {
    imgSrc: PropTypes.string,
    name: PropTypes.string.isRequired,
    meta: PropTypes.string,
    desc: PropTypes.string,
    joined: PropTypes.number,
    likeNum: PropTypes.number
};
let contextTypes ={
    et:PropTypes.string
}

export default class Card extends Component{

    constructor(props){
        super(props);
        this.state = {
            isHeartON: false,
            year: props.joined
        };
        this.heartClick = this.heartClick.bind(this);
        this.yearAdd = this.yearAdd.bind(this);
    }
    heartClick(){
        // console.log(this);
        let {isHeartON} =this.state;
        isHeartON = !isHeartON;
        this.setState({
            isHeartON
        });
    }

    yearAdd(){
        let {year} = this.state;
        setTimeout(()=>{
            this.setState({
                year: year+10
            })
            this.heartClick();
        });

    }
    render(){
        console.log(888);
        let {imgSrc,name,meta,desc,joined,likeNum} = this.props;
        let {et} = this.context;
        let {isHeartON,year} = this.state;
        let heartClass = isHeartON ? '':'empty';
        return (
            <div className="ui card">
                <div className="image">
                    <img src={imgSrc} alt=""/>
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="meta">
                        <a href="">{meta}</a>
                    </div>
                    <div className="description">{desc}</div>
                </div>
                <div className="extra content">
                    <span
                        className="right floated"
                        onClick={this.yearAdd}
                    >{`${et} in ${year}`}</span>
                    <span><i
                        className={`${heartClass} heart icon`}
                        onClick={this.heartClick}
                    ></i>{`${likeNum} Like`}
                    </span>
                </div>
            </div>
        )
    }
}

Card.propTypes = propTypes;
Card.contextTypes=contextTypes;