import React, { Component } from 'react';
import ColorDictionary from './colorDictionary'

import {LOCAL_DATA} from "./costants"
import{findIndexErrorInDictionary} from "./utility"


class MyDictionary  extends Component {
    constructor(props) {
        super(props);
        const  tmpData= localStorage.getItem(LOCAL_DATA)
        this.state = {  
            listColor: tmpData===""? [{domain:"",range:"",id:0}]:JSON.parse(tmpData),
            indexField:0,
            errorIndex:[]
        }
    }

   
    addElement= (element)=>{

        let verify= findIndexErrorInDictionary(this.state.listColor,element)
        if (verify.length===0 ){
            element.id=this.state.indexField+1
            let newListColor=[...this.state.listColor,element]
            localStorage.setItem(LOCAL_DATA, JSON.stringify(newListColor) )
            this.setState({listColor:newListColor , indexField:this.state.indexField+1,errorIndex:[]})
        }else{
            this.setState({errorIndex:verify})
        }
        
    }

    deleteEelment=async (element)=>{
        let {listColor,indexField}=this.state

        for (let i=0; i<=listColor.length;i++){
            if (listColor[i].id===element.id){
                listColor.splice(i,1)
                break;
            }
        }   
        await this.setState({listColor: listColor, indexField:indexField-1})
        localStorage.setItem(LOCAL_DATA, JSON.stringify( this.state.listColor))
        
    }


    render() { 
        const {listColor,indexField,errorIndex}=this.state
        let appColorDictionary= listColor.map((item,index)=>{
            let errCheck= errorIndex.findIndex((errIndexs)=>errIndexs==index)

            return(
                <>
                <ColorDictionary domain={item.domain} 
                         range={item.range} 
                         addElement={this.addElement}
                         deleteEelment={this.deleteEelment}
                         id={item.id}
                         errCheck={errCheck}
                         key={indexField+index} />
                </>         
            )})
    
        return (  
            <div>
               {appColorDictionary}     
            </div>
        );
    }
}
 
export default MyDictionary ;