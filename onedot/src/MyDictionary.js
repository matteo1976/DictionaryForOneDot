import React, { Component } from 'react';
import ColorDictionary from './colorDictionary'

import {LOCAL_DATA} from "./costants"



class MyDictionary  extends Component {
    constructor(props) {
        super(props);
        const  tmpData= localStorage.getItem(LOCAL_DATA)
        this.state = {  
            listColor: tmpData===""? []:JSON.parse(tmpData)
        }
    }

    


    
    
    addElement= async (element)=>{
        await this.setState({listColor: [...this.state.listColor,element]})
        localStorage.setItem(LOCAL_DATA,this.state.listColor)
    }
    


    render() { 

        return (  
            <ColorDictionary domain="domain1" range="range1" addElement={this.addElement}/>

        );
    }
}
 
export default MyDictionary ;