import React from 'react';
import TransactionItem from './TransactionItem';
class TransactionList extends React.Component{
    render(){
      
        return (
            <div>
                {this.props.trans.map(trans=>(
                    <TransactionItem key={trans.id} trans = {trans} handleChangeProps={this.props.handleChangeProps} deleteTransProps = {this.props.deleteTransProps}/>
                ))}
            </div>
        );
    }
}

export default TransactionList;