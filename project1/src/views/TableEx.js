import React, { Component } from 'react'
import axios from 'axios';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
  } from '@material-ui/core';
class TableEx extends Component{
constructor(){
    super();
    this.state={
        person: []
    }
}

componentDidMount(){
    axios.get('http://192.168.0.9:8099/resource/getDetails')
    .then(res => {
        const persons =res.data;
        this.setState({persons})
    })
}

    render(){
        return(
            <div>
                <h3>Hello this is Component</h3>
                <Table style={{tableLayout:"fixed"}}>
            <TableHead style={{fontVariantCaps: "all-small-caps"}}>
                <TableRow >
                  <TableCell>Primary Skill</TableCell>
                  <TableCell style={{fontWeight: "bold"}}>Date of Joining</TableCell>
                 <TableCell style={{fontWeight: "bold"}}>Group</TableCell>
                    <TableCell style={{fontWeight: "bold"}}>Abacus RollOff Date</TableCell>
                    <TableCell style={{fontWeight: "bold"}}>Sub Project</TableCell>
                    <TableCell style={{fontWeight: "bold"}}>Proposed End Date</TableCell>
                    <TableCell style={{fontWeight: "bold"}}>Comments</TableCell>
                   
                   
                  </TableRow>
            </TableHead>
            <TableBody>
               
                    <TableRow
                       
                    > 
                    {/* { this.state.persons.map(person => <li>{person.name}{person.startdate}</li>)} */}
                        {/* <TableCell >{rowData.primaryskill}</TableCell> */}
                        <TableCell >1</TableCell>
                        <TableCell >2</TableCell>
                        <TableCell >3</TableCell>
                        <TableCell >4</TableCell>
                        <TableCell >5</TableCell>
                        <TableCell >6</TableCell>
                       
                    </TableRow> 
             
            </TableBody>
        </Table>
            </div>
        )
    }
}

export default TableEx;