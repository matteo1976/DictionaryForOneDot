import React, { Component } from 'react';
import ColorDictionary from './colorDictionary'

import {LOCAL_DATA} from "./costants"
import {findIndexErrorInDictionary} from "./utility"


class MyDictionary  extends Component {
    constructor(props) {
        super(props);
        const  tmpData= localStorage.getItem(LOCAL_DATA)
        this.state = {  
            listColor: tmpData===""? [{domain:"",range:"",id:0}]:JSON.parse(tmpData),
            indexField: tmpData==="" ? 0:JSON.parse(tmpData).length,
            errorIndex:[]
        }
    }

   
    addElement= (element)=>{
        if ((element.domain==="")|| (element.range=="") ){
            return alert("Domain and range must be have a value")
        }
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
        let {listColor}=this.state
        for (let i=0; i<=listColor.length;i++){
            if (listColor[i].id===element.id){
                listColor.splice(i,1)
                break;
            }
        }   
        await this.setState({listColor: listColor })
        localStorage.setItem(LOCAL_DATA, JSON.stringify( this.state.listColor))
    }

    updateElement=(element)=>{
        if ((element.domain==="")|| (element.range=="") ){
            return alert("Domain and range must be have a value")
        }
        
        let {listColor}=this.state
        let index=listColor.findIndex(item=>item.id===element.id)
        
        listColor[index].range=element.range
        listColor[index].domain=element.domain
        let verify= findIndexErrorInDictionary(listColor,element)
        if (verify.length===0 ){
            localStorage.setItem(LOCAL_DATA, JSON.stringify(listColor) )
            this.setState({listColor:listColor , errorIndex:[]})
            alert("element update")
        }else{
            this.setState({errorIndex:verify})
        }        
    }

    render() { 
        const {listColor,indexField,errorIndex}=this.state
        let appColorDictionary= listColor.map((item,index)=>{
                let errCheck= errorIndex.findIndex((errIndexs)=>errIndexs===index)
                return(
                    <ColorDictionary domain={item.domain} 
                            range={item.range} 
                            addElement={this.addElement}
                            deleteEelment={this.deleteEelment}
                            updateElement={this.updateElement}
                            id={item.id}
                            errCheck={errCheck}
                            key={indexField+index} />
                )})
        return (  
            <div>
               {appColorDictionary}     
            </div>
        );
    }
}
 
export default MyDictionary ;