import React, { Component } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@material-ui/core';
import rolloffList from '../rolloffList.json';

const resourcebox = {

    // border: '2px solid black',
    //backgroundColor: "#e5e5e5",
    width: '200px',
    height: '300px',
    whiteSpace: 'nowrap',
    marginLeft: 'auto',
    marginRight: 'auto'
 
}

const resource = {
    backgroundColor: "#99B6D5"
}

const thead = {

    // borderRight: '1px solid',
    // borderColor: '#000000',
    fontWeight: "bold"

}


const tab = {

    // borderRight: '1px solid',
    // borderColor: '#000000',
    fontSize: "13px"

}

class RolloffList extends Component {
    render() {
        console.log('rolloffList ', rolloffList);
        return (
            <div style={{overflowX:'scroll'}}>
                <br/>
            <div >
                <Table style={resourcebox}>
                    <TableHead>
                        <TableRow style={resource}>
                            <TableCell style={thead}>S.No</TableCell>
                            <TableCell style={thead}>Resource Name</TableCell>
                            <TableCell style={thead}>Personal Number</TableCell>
                            <TableCell style={thead}>Enterprize ID</TableCell>
                            <TableCell style={thead}>Project Manager</TableCell>
                            <TableCell style={thead}>Project Name</TableCell>
                            <TableCell style={thead}>Level</TableCell>
                            <TableCell style={thead}>Primary Skill</TableCell>
                            <TableCell style={thead}>Work Location</TableCell>
                            <TableCell style={thead}>Onsite / Offshore</TableCell>
                            <TableCell style={thead}>Roll Start Date</TableCell>
                            <TableCell style={thead}>Proposed End Date</TableCell>
                            <TableCell style={thead}>Next Project</TableCell>
                            <TableCell style={thead}>Start Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rolloffList.rolloffList.map(user => (
                            console.log('user ', user),
                            <TableRow
                                hover
                                key={user.id}
                            >
                                <TableCell style={tab}>{user.id}</TableCell>
                                <TableCell style={tab}>{user.ResourceName}</TableCell>
                                <TableCell style={tab}>{user.PersonalNumber}</TableCell>
                                <TableCell style={tab}>{user.EnterprizeID}</TableCell>
                                <TableCell style={tab}>{user.ProjectManager}</TableCell>
                                <TableCell style={tab}>{user.ProjectName}</TableCell>
                                <TableCell style={tab}>{user.Level}</TableCell>
                                <TableCell style={tab}>{user.PrimarySkill}</TableCell>
                                <TableCell style={tab}>{user.WorkLocation}</TableCell>
                                <TableCell style={tab}>{user.OnsiteOffshore}</TableCell>
                                <TableCell style={tab}>{user.RollStartDate}</TableCell>
                                <TableCell style={tab}>{user.ProposedEndDate}</TableCell>
                                <TableCell style={tab}>{user.NextProject}</TableCell>
                                <TableCell style={tab}>{user.StartDate}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            </div>
        )
    }
}

export default RolloffList;