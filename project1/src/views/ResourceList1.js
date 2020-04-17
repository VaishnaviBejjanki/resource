import React, {Component, forwardRef} from 'react';
import {TextField} from '@material-ui/core';
import MaterialTable from 'material-table';
import axios from 'axios';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
// import SearchbarMatuitab from './SearchbarMatuitab';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@material-ui/core';
import SearchBar from '../views/SearchBar';
import Searchb from './Searchb';
const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

class FinalDetail extends React.Component {
     render() {
      return (
        <div>
          {/* <SearchBar/> */}
          {/* <SearchbarMatuitab/> */}
          {/* <Searchb/> */}
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
           resolve({
               data: result.data,
           })
         })

        })
        }
        icons={tableIcons}
        options={{
          headerStyle: {
            // backgroundColor: '#01579b',
            // color: '#FFF'
            fontWeight:"bold",
           
          },
          selection: false,
          showTitle: false,
          search:false,
          sorting:false,
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
                  {/* <TableCell>Primary Skill</TableCell> */}
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
</div>

</div>
          )
        }}
      />
       </div> 
      )
        
    }
  }

  export default FinalDetail;