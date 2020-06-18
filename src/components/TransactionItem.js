import React from 'react';


function TransactionItem(props){
    const completedStyle={
        fontStyle: 'italic',
        color:'#d35e0f',
        opacity:0.4,
        textDecoration:'line-through',
    }
    const{completed,id,title} = props.trans;
    return <li className ="transaction-item">
            <input type="checkbox"
             checked={props.trans.completed}
             onChange={()=>props.handleChangeProps(id)}/>
             <span style={completed ?  completedStyle : null}>
                {title}
             </span>
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