// import React,{Component} from "react";
// import axios from 'axios';

// class Search extends Component{
//     state = {
//         query:'',
//         results:[]
//     }

//     getInfo = () => {
//         axios.get('http://10.161.44.39:8099/resource/controller/getDetails')
//         .then(({data}) => {
//             this.setState({
//                 results : data.data
//             })
//         })
//     }

//     handleInputChange = () => {
//         this.setState({
//             query: this.search.value
//           }, () => {
//             if (this.state.query && this.state.query.length > 1) {
//               if (this.state.query.length % 2 === 0) {
//                 this.getInfo()
//               }
//             } 
//           })
//         }
    

//     render(){
//         return(
//             <div>
//             <input placeholder ="Search"
//             ref={input => this.search = input}
//             onChange={this.handleInputChange}/>
//             <p>{this.data}</p>
//             </div>
//         )
//     }
// }

// export default Search;

import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import MaterialTable from 'material-table';
import axios from 'axios';

class SearchBar extends Component {
        state = {
          query: "",
          data: [],
          filteredData: [],
          count:0
        };
      
        handleInputChange = event => {
          const query = event.target.value;
      
          this.setState(prevState => {
            const filteredData = prevState.data.filter(element => {
              return element.name.toLowerCase().includes(query.toLowerCase());
            });
      
            return {
              query,
              filteredData
            };
          });
        };
      
        getData = () => {
         fetch(`http://192.168.0.9:8099/resource/getDetails`)
            .then(response => response.json())
            .then(data => {
              const { query } = this.state;
              this.setState({
                count:this.state.count+1,
              })
              const filteredData = data.filter(element => {
                return (
                    element.name.includes(query));
              });
      
              this.setState({
                data,
                filteredData
              });
            });
        };
      
        componentWillMount() {
          this.getData();
        }
      
      
        render() {
          // console.log({this.count})
          return (
            <div className="searchForm">
              <form>
                <input
                  placeholder="Search for..."
                  value={this.state.query}
                  onChange={this.handleInputChange}
                />
              </form>


              {/* <div>
              <Table style={{tableLayout:"fixed"}}>
              <TableHead style={{fontVariantCaps: "all-small-caps"}}>
                  <TableRow >
                      <TableCell style={{fontWeight: "bold"}} >Name</TableCell>
                      <TableCell style={{fontWeight: "bold"}} >Employee Id</TableCell>
                      <TableCell style={{fontWeight: "bold"}} >Enterprise Id</TableCell>
                     
                   </TableRow>
              </TableHead>
              </Table>
              
              <div>{this.state.filteredData.map(i => 
             
              <Table style={{tableLayout:"fixed"}}>
              <TableHead style={{fontVariantCaps: "all-small-caps"}}> */}
                  {/* <TableRow >
                      <TableCell style={{fontWeight: "bold"}} >Name</TableCell>
                
                     
                   </TableRow> */}
              {/* </TableHead>
              <TableBody>
                 
                      <TableRow>
                        <TableCell>{i.name}</TableCell>
                        <TableCell>{i.employeeid}</TableCell>
                        <TableCell>{i.enterpriseid}</TableCell>
                      </TableRow>
              </TableBody>
              </Table>
              
              )} */}
              
               {/* <p>{i.name}</p>)} */}
              {/* </div>
              </div> */}


              <div>
              {this.state.filteredData.map(i =>
                <MaterialTable
                columns={[
                   { title:'NAME', field: 'name' },
         
                   { title: 'LEVEL', field: 'level' },
                   { title: 'EMPLOYEE ID', field: 'employeeid'},
                   { title: 'ENTERPRISE ID', field: 'enterpriseid' },
                   { title: 'PROJECT NAME', field: 'projectname'},
                   { title: 'PROJECT MANAGER', field: 'projectmanager'},
                   // { title: 'Primary Skill', field: 'primaryskill'},
                   { title: 'WORK LOCATION', field: 'worklocation'}
                   
                 ]}
                
                 data={query =>
                     new Promise((resolve, reject) => {
                     axios.get('http://192.168.0.9:8099/resource/getDetails'
                     )
                   .then(result => {
                     this.setState({
                       count:this.count+1
                     })
                    resolve({
                        data: result.data,
                    })
                  })
         
                 })
                 }
                //  icons={tableIcons}
                 options={{
                   headerStyle: {
                     // backgroundColor: '#01579b',
                     // color: '#FFF'
                     fontWeight:"bold",
                    
                   },
                   selection: false,
                   showTitle: false,
                   search:false,
                   sorting:false
                 }}
                 
                 detailPanel
                 ={rowData => {
                   return (
                     <div>
                     <div style={{backgroundColor:"#F5F9FD"}}>
                       <div style={{paddingLeft:"50px"}}>
                       <Table style={{tableLayout:"fixed"}}>
                     <TableHead style={{fontVariantCaps: "all-small-caps"}}>
                         <TableRow >
                             <TableCell style={{fontWeight: "bold"}} >Primary Skill</TableCell>
                             <TableCell style={{fontWeight: "bold"}}>Gender</TableCell>
                             <TableCell style={{fontWeight: "bold"}}>Onsite/Offshore</TableCell>
                             <TableCell style={{fontWeight: "bold"}}>Roll Start Date</TableCell>
                             <TableCell style={{fontWeight: "bold"}}>Abacus Project</TableCell>
                             <TableCell style={{fontWeight: "bold"}}>Billable State</TableCell>
                            
                          </TableRow>
                     </TableHead>
                     <TableBody>
                        
                             <TableRow
                                
                             > 
                             {/* { this.state.persons.map(person => <li>{person.name}{person.startdate}</li>)} */}
                             <TableCell >{rowData.primaryskill}</TableCell>
                                 <TableCell >{rowData.gender}</TableCell>
                                 <TableCell >{rowData.onsiteoffshore}</TableCell>
                                 <TableCell >{rowData.rollstartdate}</TableCell>
                                 <TableCell >{rowData.abacusproject}</TableCell>
                                 <TableCell >{rowData.billablestate}</TableCell>
                                 
                              </TableRow> 
                      
                     </TableBody>
                 </Table>
                 </div>
               <div style={{paddingLeft:"50px"}}>
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
                        
                             <TableRow >
                                
                              
                             {/* { this.state.persons.map(person => <li>{person.name}{person.startdate}</li>)}
                                 {/* <TableCell >{rowData.primaryskill}</TableCell> */}
                                 <TableCell >{rowData.dateofjoining}</TableCell>
                                 <TableCell >{rowData.groupe}</TableCell>
                                 <TableCell >{rowData.abacusrolloffdate}</TableCell>
                                 <TableCell >{rowData.subproject}</TableCell>
                                 <TableCell >{rowData.proposedenddate}</TableCell>
                                 <TableCell >{rowData.comments}</TableCell>
                                
                             </TableRow> 
                      
                     </TableBody>
                 </Table>
               
         </div>
         </div>s
         
         </div>
                   )
                 }}
               />
                
                
                
                )}
              </div>


                {this.state.count}
              </div>
          );
        }
      }

export default SearchBar;