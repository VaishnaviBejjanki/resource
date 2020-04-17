// import React from 'react';

// import axios from 'axios';

// export default class PersonList extends React.Component {
//   state = {
//     persons: []
//   }

//   componentDidMount() {
//     axios.get(`http://192.168.0.9:8099/resource/getDetails`)
//       .then(res => {
//         const persons = res.data;
//         this.setState({ persons });
//       })
//   }

//   render() {
//     return (
//       <ul>
//         { this.state.persons.map(person => <li>{person.name}</li>)}
//       </ul>
//     )
//   }
// }


import React, { Component } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@material-ui/core';

import axios from 'axios';


class ResourceList extends Component {
    constructor(props){
        super(props)
        this.state={
            persons:[],

        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount() {
        axios.get('http://192.168.0.9:8099/resource/getDetails'
        
      
        )
   .then(res => {
        const persons = res.data;
        console.log('persons ', persons);
        this.setState({ persons });
      })
  
  .catch(error => {
    console.error();
  })
}

    render() {
          
        
      
        return (
           
            <div >
                 
            {/* { this.state.persons.map(person => {person.name}{person.startdate})}
           */}
                <div>
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell >Primary Skill</TableCell>
                                <TableCell >Gender</TableCell>
                                <TableCell >Onsite / Offshore</TableCell>
                                <TableCell >Roll Start Date</TableCell>
                                <TableCell>Abacus Project</TableCell>
                                <TableCell >Billable State</TableCell>
                              
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.persons.map(person => (
                                console.log('person ', person),
                                <TableRow
                                    hover
                                    key={person.id} 
                                > 
                                {/* { this.state.persons.map(person => <li>{person.name}{person.startdate}</li>)} */}
                                    <TableCell >{person.primaryskill}</TableCell>
                                    <TableCell >{person.gender}</TableCell>
                                    <TableCell >{person.onsiteoffshore}</TableCell>
                                    <TableCell >{person.rollstartdate}</TableCell>
                                    <TableCell >{person.abacusproject}</TableCell>
                                    <TableCell >{person.billablestate}</TableCell>
                              
                                </TableRow> 
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default ResourceList;