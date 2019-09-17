import React, { Component } from 'react';
import ColorDictionary from './colorDictionary'

import {LOCAL_DATA} from "./costants"



class MyDictionary  extends Component {
    constructor(props) {
        super(props);
        const  tmpData= localStorage.getItem(LOCAL_DATA)
        this.state = {  
            listColor: tmpData===""? [{domain:"",range:"",id:0}]:JSON.parse(tmpData),
            indexField:0
        }
    }

    
    addElement= (element)=>{
        element.id=this.state.indexField+1
        let newListColor=[...this.state.listColor,element]
        localStorage.setItem(LOCAL_DATA,newListColor)
        this.setState({listColor:newListColor , indexField:this.state.indexField+1})
        
    }

    deleteEelment=async (element)=>{
        let {listColor,indexField}=this.state

        for (let i=0; i<=listColor.length;i++){
            if (listColor[i].id===element.id){
                console.log(listColor[i])
                listColor.splice(i,1)
                console.log(listColor[i])
                break;
            }
        }   
        console.log(listColor)
        await this.setState({listColor: listColor, indexField:indexField-1})
        localStorage.setItem(LOCAL_DATA,this.state.listColor)
        
    }


    render() { 
        const {listColor,indexField}=this.state
        console.log(listColor)

        let appColorDictionary= listColor.map((item,key)=>{
            console.log("id "+item.id)
            console.log("range "+item.range)
            console.log("domain "+item.domain)
        
            return(
                <>
                <div key={key}> elemento id {item.id}</div>
                <ColorDictionary domain={item.domain} 
                         range={item.range} 
                         addElement={this.addElement}
                         deleteEelment={this.deleteEelment}
                         id={item.id}
                         key={indexField+key} />
                </>         
            )})
        

        console.log(appColorDictionary)        
    
        return (  
            <div>
                {/* {listColor.map((item,key)=>
                    <div key={indexField+key+1}>
                        <ColorDictionary domain={item.domain} 
                                 range={item.range} 
                                 addElement={this.addElement}
                                 deleteEelment={this.deleteEelment}
                                 id={item.id}
                                 key={indexField+key} />
                    </div>)} */}
               {appColorDictionary}     
            </div>
        );
    }
}
 
export default MyDictionary ;