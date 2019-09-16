import React, { Component } from 'react';
import ColorDictionary from './colorDictionary'

import {LOCAL_DATA} from "./costants"



class MyDictionary  extends Component {
    constructor(props) {
        super(props);
        const  tmpData= localStorage.getItem(LOCAL_DATA)
        this.state = {  
            listColor: tmpData===""? [{domain:"",range:"",indx:0}]:JSON.parse(tmpData),
            indx:0
        }
    }

    
    addElement= async (element)=>{
        element.indx=this.state.indx+1
        await this.setState({listColor: [...this.state.listColor,element], indx:this.state.indx+1})
        localStorage.setItem(LOCAL_DATA,this.state.listColor)
    }

    deleteEelment=async (element)=>{
        let {listColor,indx}=this.state
        let elementToDelete=0

        for (let i=0; i<=listColor.length;i++){
            if (listColor[i].indx===element.indx){
                console.log(listColor[i])
                listColor.splice(i,1)
                console.log(listColor[i])
                break;
            }
        }   
        console.log(listColor)
        await this.setState({listColor: listColor, indx:this.state.indx-1})
        localStorage.setItem(LOCAL_DATA,this.state.listColor)
        
    }


    render() { 
        const {listColor,indx}=this.state
        console.log(listColor)
        return (  
            <div>
                {listColor.map((item,key)=>
                    <div key={indx+key+1}>
                        <ColorDictionary domain={item.domain} 
                                 range={item.range} 
                                 addElement={this.addElement}
                                 deleteEelment={this.deleteEelment}
                                 indx={item.indx}
                                 key={indx+key} />
                    </div>)}
            </div>
        );
    }
}
 
export default MyDictionary ;