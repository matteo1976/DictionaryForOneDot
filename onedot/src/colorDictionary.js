import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';

import './colorDictionary.css'





export default class ColorDictionary extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            domain:"",//props.domain,
            range:"",//props.range,
            id:0
         }
    }
    
    componentWillMount(){
     let  {domain,range,id}=this.props
      this.setState({domain:domain,
                      range:range,
                      id:id})
     
    }



    cleanState= async()=>{
      await this.setState({domain:"",range:""})
    }

    handleDelete=()=>{
      this.props.deleteEelment(this.state)
      this.cleanState()
    }
    handleSave=()=>{    
      this.props.addElement(this.state)
      this.cleanState()
    }
    handleUpdate=()=>{

    }

    handleChange = item => event => {
      this.setState({ ...this.state, [item]: event.target.value })
    };


    render() { 
        console.log(this.state)
        const {domain,range,id}=this.props
       
         let actionButtons= (id ===0 ?                   
             <Fab  color="secondary" aria-label="delete" className="button" onClick={this.handleSave}>
                 <AddIcon />
             </Fab>
            :
            <>
              <Fab color="primary" aria-label="add" className="button" onClick={this.handleUpdate}>
                <SaveIcon />
              </Fab>
              <Fab color="secondary" aria-label="delete" className="button" onClick={this.handleDelete}>
                <DeleteIcon />
              </Fab>
            </>

            )
        
        
        return (
          
            <div>
                
                <TextField
                  id="domine"
                  label="Domain"
                  className="textField"
                  value={this.state.domain}
                  onChange={this.handleChange("domain")}
                  margin="normal"
                />
                <TextField
                  id="range"
                  label="Range"
                  className="textField"
                  value={this.state.range}
                  onChange={this.handleChange("range")}
                  margin="normal"
                />

                {actionButtons}
                
            </div>
          );
    }
}
 

