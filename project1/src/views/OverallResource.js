import React, { Component } from "react";
import LevelDivRatio from "./LevelDivRatio";
import LevelDivHC from "./LevelDivHC";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@material-ui/core';
import overallResource from '../overallResource.json';

const resourcebox = {

    border: '2px solid black',
    //backgroundColor: "#e5e5e5",
    width: '200px',
    height: '300px',
    whiteSpace: 'nowrap',
    marginLeft: 'auto',
    marginRight: 'auto'
}

const resource = {
    backgroundColor: "#99B6D5"
    //backgroundColor:"#A8C6E5"
}

const thead = {

    borderRight: '1px solid',
    borderColor: '#000000',
    fontWeight: "bold"

}
const theadnv = {

    borderColor: '#000000',
    fontWeight: "bold"

}
const tab = {

    borderRight: '1px solid',
    borderColor: '#000000',
    fontSize: "13px"

}

class OverallResource extends Component {
    render() {
        console.log('overallResource ', overallResource);
        return (
            <div>
                <div>
                    <br /><br /><br />
                    <Table style={resourcebox}>
                        <TableHead style={resource}>
                            <TableRow style={resource}>
                                <TableCell style={theadnv}></TableCell>
                                <TableCell style={theadnv}></TableCell>
                                <TableCell style={theadnv}>ESI-Overall Resource Count</TableCell>
                                <TableCell style={theadnv}></TableCell>
                                <TableCell style={theadnv}></TableCell>
                                <TableCell style={theadnv}></TableCell>
                                <TableCell style={theadnv}></TableCell>
                                <TableCell style={theadnv}></TableCell>
                            </TableRow>
                            <TableRow style={resource}>
                                <TableCell style={theadnv}>Count of Resource Name</TableCell>
                                <TableCell style={theadnv}></TableCell>
                                <TableCell style={thead}></TableCell>
                                <TableCell style={theadnv}>Level</TableCell>
                                <TableCell style={theadnv}></TableCell>
                                <TableCell style={theadnv}></TableCell>
                                <TableCell style={theadnv}></TableCell>
                                <TableCell style={theadnv}></TableCell>
                            </TableRow>
                            <TableRow style={resource}>
                                <TableCell style={thead}>Project Manager</TableCell>
                                <TableCell style={thead}>Project Name</TableCell>
                                <TableCell style={thead}>M</TableCell>
                                <TableCell style={thead}>TL</TableCell>
                                <TableCell style={thead}>SSE</TableCell>
                                <TableCell style={thead}>ASE</TableCell>
                                <TableCell style={thead}>(blank)</TableCell>
                                <TableCell style={theadnv}>Grand Total</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {overallResource.overallResource.map(user => (
                                console.log('user',user),
                                <TableRow
                                    hover
                                    key={user.id}
                                >
                                    <TableCell style={tab}>{user.ProjectManager}</TableCell>
                                    <TableCell style={tab}>{user.ProjectName}</TableCell>
                                    <TableCell style={tab}>{user.M}</TableCell>
                                    <TableCell style={tab}>{user.TL}</TableCell>
                                    <TableCell style={tab}>{user.SSE}</TableCell>
                                    <TableCell style={tab}>{user.ASE}</TableCell>
                                    <TableCell style={tab}>{user.blank}</TableCell>
                                    <TableCell style={tab}>{user.GrandTotal}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <br />
                </div>
                <br /><br /><br />
                <div style={{ display: 'inline-flex' }}>
                    <br />
                    <LevelDivRatio />
                    <LevelDivHC />
                </div>
            </div>
        )
    }
}

export default OverallResource;
