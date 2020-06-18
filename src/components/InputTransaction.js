import React,{Component} from 'react';

class InputTransaction extends Component{
    state={
        title: ""
    };

    onChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }; 
    //raises an event from this component to the parent
    handleSubmit= e =>{
        e.preventDefault();
        this.props.addTransactionProps(this.state.title);
        console.log(this.state.title);
        this.setState({
            title:""
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
                <input type="submit" value="submit" />
            </form>
        )
    }
}

export default InputTransaction;