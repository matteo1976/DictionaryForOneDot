import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import {LOCAL_DATA} from "./costants"

import './colorDictionary.css'





export default class ColorDictionary extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            domain:props.domain,
            range:props.range
         }
    }
  

    handleDelete=()=>{
      alert("deleted")
    }
    handleSave=()=>{
      this.props.addElement(this.state)
      //localStorage.setItem(LOCAL_DATA,...[],JSON.stringify( this.state))
    }

    handleChange = item => event => {
      this.setState({ ...this.state, [item]: event.target.value })
    };


    render() { 
        const {domain,range}=this.state
    
        


        return (
            <div>
                
                <TextField
                  id="domine"
                  label="Domain"
                  className="textField"
                  value={domain}
                  onChange={this.handleChange("domain")}
                  margin="normal"
                />
                <TextField
                  id="range"
                  label="Range"
                  className="textField"
                  value={range}
                  onChange={this.handleChange("range")}
                  margin="normal"
                />

                <Fab color="primary" aria-label="add" className="button" onClick={this.handleSave}>
                    <SaveIcon />
                </Fab>
                <Fab  color="secondary" aria-label="delete" className="button" onClick={this.handleDelete}>
                    <DeleteIcon />
                </Fab>

            </div>
          );
    }
}
 

