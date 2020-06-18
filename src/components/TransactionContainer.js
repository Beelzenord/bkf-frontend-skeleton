import React from 'react';
import TransactionList from './TransactionList';
import Header from './Header';
import InputTransaction from './InputTransaction';
import {v4 as uuidv4} from 'uuid';
class TransactionContainer extends React.Component{
    state = {
        transactions: [
           {
               id:uuidv4(),
               title:"Setup development environment",
               completed:true
           },
           {
            id: uuidv4(),
            title: "Develop website and add content",
            completed: false
          },
          {
            id: uuidv4(),
            title: "Deploy to live server",
            completed: false
          }
        ]
    }
    handleChange=id=>{
        console.log('clicked on handle',id);
        this.setState({
            trans:this.state.transactions.map(
                trans=>{
                    if(trans.id===id){
                        trans.completed=!trans.completed;
                    }
                    return trans;
                }
            )
        });
    }
    deleteTrans=id=>{
        console.log('deleted',id);
        this.setState({
            transactions: [
              ...this.state.transactions.filter(trans => {
                return trans.id !== id;
              })
            ]
          });
    };
    addTransactionItem = title =>{
        console.log(title);
        const newTransaction={
            id: uuidv4(),
            title:title,
            completed:false
        };
        this.setState({
            transactions:[...this.state.transactions,newTransaction]
        });
    };
    render(){
        return (
            //div
            //refer to state
            <div className="container">
               <Header />
               <InputTransaction addTransactionProps = {this.addTransactionItem}/>
               <TransactionList 
                trans ={this.state.transactions}
                handleChangeProps={this.handleChange}
                deleteTransProps = {this.deleteTrans}/>
            </div>
        );
    }
}

export default TransactionContainer;