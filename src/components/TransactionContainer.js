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
               segment:"some segment",
               completed:true,
               date : new Date(2019,11,17)
           },
           {
            id: uuidv4(),
            title: "Develop website and add content",
            segment:"",
            completed: false,
            date : new Date(2019,11,17)
          },
          {
            id: uuidv4(),
            title: "Deploy to live server",
            segment:"",
            completed: false,
            date :new Date(2019,11,17)
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
    addTransactionItem = newState =>{
        console.log(newState.title);
        const newTransaction={
            id: uuidv4(),
            title:newState.title,
            segment:newState.segment,
            completed:false,
            date: newState.date
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