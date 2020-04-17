import React, { Component } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@material-ui/core';
import upcomingRolloffList from '../upcomingRolloffList.json';

const resourcebox = {

    border: '2px solid black',
   // backgroundColor: "#e5e5e5",
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

class UpcomingRolloff extends Component {
    render() {
        console.log('upcomingRolloffList ', upcomingRolloffList);
        return (
            <div>
                <br /><br />
                <Table style={resourcebox}>
                    <TableHead>
                        <TableRow style={resource}>
                            <TableCell style={thead}>Count Of Resource Name</TableCell>
                            <TableCell style={theadnv}>Level</TableCell>
                            <TableCell style={theadnv}></TableCell>
                            <TableCell style={theadnv}></TableCell>
                            <TableCell style={theadnv}></TableCell>
                            <TableCell style={theadnv}></TableCell>
                            <TableCell style={theadnv}></TableCell>
                        </TableRow>
                        <TableRow style={resource}>
                            <TableCell style={thead}>Project</TableCell>
                            <TableCell style={thead}>ASE</TableCell>
                            <TableCell style={thead}>SE</TableCell>
                            <TableCell style={thead}>SSE</TableCell>
                            <TableCell style={thead}>M</TableCell>
                            <TableCell style={thead}>TL</TableCell>
                            <TableCell style={thead}>Grand Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {upcomingRolloffList.upcomingRolloffList.map(user => (
                            console.log('user ', user),
                            <TableRow
                                hover
                                key={user.id}
                            >
                                <TableCell style={tab}>{user.Project}</TableCell>
                                <TableCell style={tab}>{user.ASE}</TableCell>
                                <TableCell style={tab}>{user.SE}</TableCell>
                                <TableCell style={tab}>{user.SSE}</TableCell>
                                <TableCell style={tab}>{user.M}</TableCell>
                                <TableCell style={tab}>{user.TL}</TableCell>
                                <TableCell style={tab}>{user.GrandTotal}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </div>
        )
    }
}

export default UpcomingRolloff;
