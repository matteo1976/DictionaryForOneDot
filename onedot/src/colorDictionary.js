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
            domain:props.domain,
            range:props.range,
            id:props.id
         }
    }
    static getDerivedStateFromProps(props, state){
      if (props.id!== state.id){
        state.id=props.id
        state.range=props.range
        state.domain=props.domain
      }      
    }

    handleDelete=()=>{
      this.props.deleteEelment(this.state)
    }
    handleSave=()=>{    
      this.props.addElement(this.state)
    }
    handleUpdate=()=>{
      this.props.updateElement(this.state)
    }

    handleChange = item => event => {
      let char=event.target.value
      char=char.replace(/[^A-Za-z]/g, '');
      char=char.toUpperCase();
      this.setState({ ...this.state, [item]: char })
    };

    render() { 
      const {id,errCheck}=this.props
      const textFieldsClass=errCheck<0 ? "defaultLine" :"errorLine"
      let actionButtons= (id ===0 ?                   
        <span className= "oneButton">
          <Fab  color="secondary" aria-label="delete" className="button" onClick={this.handleSave}>
            <AddIcon />
          </Fab>
        </span>
        :    
        <span className= "twoButton">
          <Fab color="primary" aria-label="add" className="button" onClick={this.handleUpdate}>
            <SaveIcon />
          </Fab>
          <Fab color="secondary" aria-label="delete" className="button" onClick={this.handleDelete}>
            <DeleteIcon />
          </Fab>
        </span>
        )
      return (
        <div className="listContainer" >
          <span className= {textFieldsClass}>
          <TextField
            required
            pattern= "[a-z]"
            id="domine"
            label="Domain"
            className="textField"
            value={this.state.domain}
            onChange={this.handleChange("domain")}
            margin="normal"
          />
          <TextField
            required
            id="range"
            label="Range"
            className="textField"
            value={this.state.range}
            onChange={this.handleChange("range")}
            margin="normal"
          />
          </span>
          {actionButtons}
        </div>
      );
    }
}
 

