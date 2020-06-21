import React from 'react';
import Moment from 'react-moment';
import {v4 as uuidv4} from 'uuid';




function TransactionItem(props){
    const completedStyle={
        fontStyle: 'italic',
        color:'#d35e0f',
        opacity:0.4,
        textDecoration:'line-through',
    }
    
    const{completed,id,title} = props.trans;
    
    return <li 
             key={uuidv4()}
            className ="transaction-item">
            <input type="checkbox"
             checked={props.trans.completed}
             onChange={()=>props.handleChangeProps(id)}/>
             <span style={completed ?  completedStyle : null}>
                {title}
             </span>
                <ul>
                {props.trans.segment}
                </ul>
                <ul>
                {props.trans.date.toDateString()}
                </ul>
               
            <button onClick={()=>props.deleteTransProps(id)}>Delete</button>
               
          </li>
          
}
/*
class TransactionItem extends React.Component{
    render(){
        return (
            <li>{this.props.trans.title}</li>
        )
    }
}
*/
export default TransactionItem;