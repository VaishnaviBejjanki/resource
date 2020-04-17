import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ResourceList1 from './ResourceList1';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandClick from './ExpandClick';

class SearchBar extends Component {
  constructor(){
    super();
  
       this.state = {
          query: "",
          data: [],
          filteredData: [],
          opened:false
        };
        this.handleClick = this.handleClick.bind(this);
      }

        
     
          handleClick() {
            const { opened } = this.state;
            this.setState({
              opened: !opened,
            });
            // document.getElementById("inner1").style.display="block"
        }

       
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
          var { title} = this.state;
		      const { opened } = this.state;

		      if (opened){
			      title = <ExpandMoreIcon/>;
		      }else{
			      title =<ChevronRightIcon/>;
          }
          
          return (
            <div className="searchForm">
               <div style={{paddingLeft:"1300px"}}>
              <form>
               
                <input style={{width:'200px', height:'20px'}}
                  placeholder="Search for..."
                  value={this.state.query}
                  onChange={this.handleInputChange}
                  
                />
              </form>
              <br/>
              </div>

              <div>
              <Table style={{tableLayout:"fixed",backgroundColor:"#D9D9E7"}}>
              <TableHead >
                  <TableRow >
                      <TableCell style={{width:'20px'}}></TableCell>
                      <TableCell style={{fontWeight: "bold"}} >NAME</TableCell>
                      <TableCell style={{fontWeight: "bold"}} >LEVEL</TableCell>
                      <TableCell style={{fontWeight: "bold"}} >EMPLOYEE ID</TableCell>
                      <TableCell style={{fontWeight: "bold"}} >ENTERPRISE ID</TableCell>
                      <TableCell style={{fontWeight: "bold"}} >PROJECT NAME</TableCell>
                      <TableCell style={{fontWeight: "bold"}} >PROJECT MANAGER</TableCell>
                      <TableCell style={{fontWeight: "bold"}} >WORK LOCATION</TableCell>
                     
                   </TableRow>
              </TableHead>
              </Table>
              
              <div>{this.state.filteredData.map(i => 
             
              <Table style={{tableLayout:"fixed"}}>
             
              <TableBody>
                 
                      <TableRow>
                        
                        <TableCell style={{width:'20px'}}>
                          <div onClick={this.handleClick} >
                          {/* <div onClick={<ExpandClick>{expandRow(this.state.opened)}</ExpandClick>}> */}
					                {title}
				                </div>
                        </TableCell>
				                {/* {opened && (<TableEx1/>)} */}


                    
                        <TableCell>{i.name}</TableCell>
                        <TableCell>{i.level}</TableCell>
                        <TableCell>{i.employeeid}</TableCell>
                        <TableCell>{i.enterpriseid}</TableCell>
                        <TableCell>{i.projectname}</TableCell>
                        <TableCell>{i.projectmanager}</TableCell>
                        <TableCell>{i.worklocation}</TableCell>
                        {/* <Expansion/> */}
                        </TableRow>
                        {/* <TableRow>{opened && (<TableEx1/>)}</TableRow> */}

                        <TableRow>{opened && (
                          <div style={{paddingLeft:"30px",width:"1488px",backgroundColor:"#F8F8FC"}}>
                            {/* #FBFBFB */}
                          <Table id="inner1"style={{diplay:"block"}}>
                      
                          <TableBody>
                            
                                  <TableRow
                                     
                                  > 
                                  {/* { this.state.persons.map(person => <li>{person.name}{person.startdate}</li>)} */}
                                      <TableCell ><div style={{fontSize:'12px', fontWeight:'bold'}}>Primary Skill</div><br/>{i.primaryskill}</TableCell>
                                      <TableCell ><div style={{fontSize:'12px', fontWeight:'bold'}}>Gender</div><br/>{i.gender}</TableCell>
                                      <TableCell ><div style={{fontSize:'12px', fontWeight:'bold'}}>Onsite/Offshore</div><br/>{i.onsiteoffshore}</TableCell>
                                      <TableCell ><div style={{fontSize:'12px', fontWeight:'bold'}}>Roll Start Date</div><br/>{i.rollstartdate}</TableCell>
                                      <TableCell ><div style={{fontSize:'12px', fontWeight:'bold'}}>Abacus Project</div><br/>{i.abacusproject}</TableCell>
                                      <TableCell ><div style={{fontSize:'12px', fontWeight:'bold'}}>Billable State</div><br/>{i.billablestate}</TableCell>
                                
                                  </TableRow> 
                             
                          </TableBody>
                      </Table>
                      </div>
                      
                        )}</TableRow>

                    <TableRow>{opened && (
                          // <div style={{paddingLeft:"30px",width:"1470px",backgroundColor:"#F5F9FD"}}> 
                          <div style={{paddingLeft:"30px",width:"1488px",backgroundColor:"#F8F8FC"}}> 
                          <Table id="inner2" style={{diplay:"block"}}>
                       
                          <TableBody>
                            
                                  <TableRow
                                     
                                  > 
                                 
                                      <TableCell style={{width:'210px'}}><div style={{fontSize:'12px', fontWeight:'bold'}}>Date of Joining</div><br/>{i.dateofjoining}</TableCell>
                                      <TableCell ><div style={{fontSize:'12px', fontWeight:'bold'}}>Group</div><br/>{i.groupe}</TableCell>
                                      <TableCell style={{width:'250px'}}><div style={{fontSize:'12px', fontWeight:'bold'}}>Abacus RollOff Date</div><br/>{i.abacusrolloffdate}</TableCell>
                                      <TableCell style={{width:'245px'}}><div style={{fontSize:'12px', fontWeight:'bold'}}>Sub Project</div><br/>{i.subproject}</TableCell>
                                      <TableCell ><div style={{fontSize:'12px', fontWeight:'bold'}}>Proposed End Date</div><br/>{i.proposedenddate}</TableCell>
                                      <TableCell ><div style={{fontSize:'12px', fontWeight:'bold'}}>Comments</div><br/>{i.comments}</TableCell>
                                
                                  </TableRow> 
                             
                          </TableBody>
                      </Table>
                      </div>
                      
                        )}</TableRow>


              </TableBody>
              </Table>
              
              )}
              
               
              </div>
              </div>
              
              {/* <ResourceList1/> */}

                   </div>
          );
        }
      }

export default SearchBar;