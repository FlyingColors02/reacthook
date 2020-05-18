import React, { Component } from "react";
import axios from "axios";
class Api extends Component{
    constructor(props){
        super(props);
        this.state={
            items:[]
        }
    }
   async componentDidMount(){
        let response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.value}`);
        this.setState({items:response.data})
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {this.state.items.length}
                    </div>
                </div>
            </div>
        )
    }
}
export default Api;