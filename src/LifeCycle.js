import React,{Component} from "react";

class LifeCycle extends Component{
    constructor(){
        console.log('inside constructor..');
        super()
        this.state={
            products:[]
        
        }
    }
    static getDerivedStateFromProps(props,state){
        console.log('insidegetDerivedStateFromProps');
        console.log('state is:',state);
        return null
            

        
           
        
    }
    componentDidMount(){
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>this.setState({
                products:json
            }))
        
    }
    render(){
        console.log('inside render ');
        console.log('producrs are',this.state.products);
        return(
            <>
            <h1>Mounting phase</h1>
            <p>My name is:{ this.state.name}</p>
            </>
        )
    }
}
export default LifeCycle