import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
  } from '@material-ui/core';
  import ChevronRightIcon from '@material-ui/icons/ChevronRight';
  import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class Section extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            className: 'accordion-content accordion-close',
            headingClassName: 'accordion-heading',
            title:<ChevronRightIcon/>
        };

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        const { open } = this.state;
        
  if (open) {
            this.setState({
                open: false,
                className: "accordion-content accordion-close",
                headingClassName: "accordion-heading",
                title:<ChevronRightIcon/>
            });
        } else {
            this.setState({
                open: true,
                className: "accordion-content accordion-open",
                headingClassName: "accordion-heading clicked",
                title:<ExpandMoreIcon/>
            });
        }
    }
    render() {
        const post = this.props.post;
        const { className } = this.state;
        const { headingClassName } = this.state;
        console.log(headingClassName);
        var { title} = this.state;
        return (
            <div className="parent-accordion">
                <div className={headingClassName} onClick={this.handleClick}>
                    {/* {post.name} */}
                    <Table>
                       <TableBody>
                        <TableRow>
                        <TableCell style={{width:'10px'}}>{title}</TableCell>
                        <TableCell>{post.name}</TableCell>
                        <TableCell>{post.level}</TableCell>
                        <TableCell>{post.employeeid}</TableCell>
                        <TableCell>{post.enterpriseid}</TableCell>
                        <TableCell>{post.projectname}</TableCell>
                       <TableCell>{post.worklocation}</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                </div>
                <div className={className} style={{paddingLeft:"30px",width:"1488px",backgroundColor:"#F8F8FC"}}>
                    {/* {post.groupe} */}
                    <div>
                    <Table >
                      
                          <TableBody>
                            
                                  <TableRow> 
                                      <TableCell ><div style={{fontSize:'12px', fontWeight:'bold'}}>Primary Skill</div><br/>{post.primaryskill}</TableCell>
                                      <TableCell ><div style={{fontSize:'12px', fontWeight:'bold'}}>Gender</div><br/>{post.gender}</TableCell>
                                      <TableCell ><div style={{fontSize:'12px', fontWeight:'bold'}}>Onsite/Offshore</div><br/>{post.onsiteoffshore}</TableCell>
                                      <TableCell ><div style={{fontSize:'12px', fontWeight:'bold'}}>Roll Start Date</div><br/>{post.rollstartdate}</TableCell>
                                      <TableCell ><div style={{fontSize:'12px', fontWeight:'bold'}}>Abacus Project</div><br/>{post.abacusproject}</TableCell>
                                      <TableCell ><div style={{fontSize:'12px', fontWeight:'bold'}}>Billable State</div><br/>{post.billablestate}</TableCell>
                                
                                  </TableRow> 
                             
                          </TableBody>
                      </Table>
                      </div>
                      <div>
                          <Table>
                      <TableBody>
                            
                            <TableRow
                               
                            > 
                           
                                <TableCell style={{width:'210px'}}><div style={{fontSize:'12px', fontWeight:'bold'}}>Date of Joining</div><br/>{post.dateofjoining}</TableCell>
                                <TableCell ><div style={{fontSize:'12px', fontWeight:'bold'}}>Group</div><br/>{post.groupe}</TableCell>
                                <TableCell style={{width:'250px'}}><div style={{fontSize:'12px', fontWeight:'bold'}}>Abacus RollOff Date</div><br/>{post.abacusrolloffdate}</TableCell>
                                <TableCell style={{width:'245px'}}><div style={{fontSize:'12px', fontWeight:'bold'}}>Sub Project</div><br/>{post.subproject}</TableCell>
                                <TableCell ><div style={{fontSize:'12px', fontWeight:'bold'}}>Proposed End Date</div><br/>{post.proposedenddate}</TableCell>
                                <TableCell ><div style={{fontSize:'12px', fontWeight:'bold'}}>Comments</div><br/>{post.comments}</TableCell>
                          
                            </TableRow> 
                       
                    </TableBody>
                </Table>
                      </div>
                </div>
            </div>
        );
    }
}

export default Section;