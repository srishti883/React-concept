import React, { Component } from 'react';

 class ClassComp extends Component {
    constructor(){
        console.log('inside constructor..');
        super()
        this.state={
           fname:'ritu'
        }
    }
    static getDerivedStateFromProps(props,state){
        console.log('insidegetDerivedStateFromProps');
        console.log('state is:',state);
        return null
            // name:props.defaultName
        
    }
    componentDidMount(){
       console.log('inside the componentDidMount');
       this.setState({
        fname:'reena'
       })
    }

    shouldComponentUpdate(){
        console.log('should ComponentUpdate');
        return true
    }


    getSnapshotBeforeUpdate(preProps,PreState){
        console.log('inside getSnapshotBeforeUpdate ');
        console.log('PreState is',PreState);
        return PreState
    }
       
    componentDidUpdate(snapshort,preProps,PreState){
        console.log('componentDidUpdate');
        console.log('snapshort',snapshort);
    }
componentWillUnmount(){
    //remove event listner
}
    
    render(){
        console.log('inside render ');
        return(
            <>
            <h1>Mounting phase</h1>
            <p>My name is:{ this.state.fname}</p>
            </>
        )
    }
}
export default ClassComp
