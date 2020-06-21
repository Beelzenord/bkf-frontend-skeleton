import React,{Component,useReducer} from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
class InputTransaction extends Component{
    state={
        title: "",
        segment:"",
        date: ""
    };
   /* anotherObject={
        date: new Date()
    }*/

    onChange = e =>{
        console.log(e.target.name + ' : '+e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        });
    }; 
    handleChange = date => {
        console.log(Object.prototype.toString.call(date));
        console.log('date: ' , date);
        this.setState({
          date: date
        });
        console.log('this segment : ', this.state.date)
      };
    //raises an event from this component to the parent
    handleSubmit = e =>{
        e.preventDefault();
        if(this.state.title.length===0 || this.state.segment.length===0){
            alert('Please fill all fields');
            return;
        }
        this.props.addTransactionProps(this.state);
        console.log(this.state);
        this.setState({
            title:"",
            segment:""
        });
    }
    
    
    render(){
        return(
            <form onSubmit={this.handleSubmit} className="form-container">
                <input 
                type="text" 
                placeholder="Add Transaction..." 
                value ={this.state.title} 
                name='title'
                onChange={this.onChange}/>
                 <input 
                type="text" 
                placeholder="Add Segment..." 
                value ={this.state.segment} 
                name='segment'
                onChange={this.onChange}/>
                <DatePicker
                placeholderText="Date of Transaction"
                selected={this.state.date}
                maxDate={new Date()}
                value={this.state.date}
                onChange={this.handleChange} />
                <input type="submit" value="submit" />
            
            </form>
           
        )
    }
}


export default InputTransaction;