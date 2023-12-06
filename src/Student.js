import React,{Component} from "react";


class Student extends Component{
    render(){
        console.log(this.props.name);
        const{name,job}=this.props
        return(
            <>
            <h1>I'M  child component</h1>
            <h1>my name is:{name}</h1>
            <h1>my job is:{job}</h1>
            </>
        )
    }
}

export default Student