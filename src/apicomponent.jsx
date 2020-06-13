import React, { useState, useEffect } from "react";
import axios from "axios";


const Api = (props) =>{
    const [items,setItems] = useState([]);

    const fetchData = async(resources)=>{
    let response = await axios.get(`https://jsonplaceholder.typicode.com/${resources}`);
        setItems(response.data);
}

//    async componentDidMount(){
//         let response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.value}`);
//         this.setState({items:response.data})
//     }
//     async componentDidUpdate(prevProps){

//         if (prevProps.value!==this.props.value){
//             let response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.value}`);
//             this.setState({items:response.data})
//         }  
//     }
    useEffect(()=>{
        fetchData(props.value);
    },[props.value]);
    
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {items.length}
                    </div>
                </div>
            </div>
        )
    }

export default Api;