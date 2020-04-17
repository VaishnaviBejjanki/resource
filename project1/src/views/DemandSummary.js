import React, { Component } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core';
import demandSummary from '../demandSummary.json';
import demandSummary1 from '../demandSummary1.json';


const resourcebox = {

    border: '2px solid black',
    backgroundColor: "#e5e5e5",
    width: '200px',
    height: '300px',
    whiteSpace: 'nowrap',
    marginLeft: 'auto',
    marginRight: 'auto'
}

const resource = {
    backgroundColor: "#c0c0c0"
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

class DemandSummary extends Component {
    render() {
        console.log('demandSummary ', demandSummary);
        return (
            <div>
                <div>
                    <Table style={resourcebox}>
                        <TableHead>
                            <TableRow style={resource}>
                                <TableCell style={thead}>Demand count</TableCell>
                                <TableCell style={theadnv}></TableCell>
                                <TableCell style={theadnv}>CRSD Wise Status</TableCell>
                                <TableCell style={theadnv}></TableCell>
                            </TableRow>
                            <TableRow style={resource}>
                                <TableCell style={thead}>Project</TableCell>
                                <TableCell style={thead}>Within CRSD</TableCell>
                                <TableCell style={thead}>Resource Identified:<br /> Locking Pending/
                            <br /> Future Joining</TableCell>
                                <TableCell style={thead}>Grand Total</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {demandSummary.demandSummary.map(user => (
                                console.log('user ', user),
                                <TableRow
                                    hover
                                    key={user.id}
                                >
                                    <TableCell style={tab}>{user.Project}</TableCell>
                                    <TableCell style={tab}>{user.WithinCRSD}</TableCell>
                                    <TableCell style={tab}>{user.ResourceIden}</TableCell>
                                    <TableCell style={tab}>{user.GrandTotal}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <br /><br /><br /><br />
                <div>
                    <Table style={resourcebox}>
                        <TableHead>
                            <TableRow style={resource}>
                                <TableCell style={theadnv}></TableCell>
                                <TableCell style={theadnv}></TableCell>
                                <TableCell style={thead}></TableCell>
                                <TableCell style={thead}>CRSD Wise Status</TableCell>
                                <TableCell style={thead}>Lead time Bucket</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={tab}>Project</TableCell>
                                <TableCell style={tab}>IDC Level</TableCell>
                                <TableCell style={tab}>Primary skill</TableCell>
                                <TableCell style={tab}>0-15 Days</TableCell>
                                <TableCell style={tab}>>15 Days</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {demandSummary1.demandSummary1.map(user => (
                                console.log('user ', user),
                                <TableRow
                                    hover
                                    key={user.id}
                                >
                                    <TableCell style={tab}>{user.Project}</TableCell>
                                    <TableCell style={tab}>{user.IDCLevel}</TableCell>
                                    <TableCell style={tab}>{user.PrimarySkill}</TableCell>
                                    <TableCell style={tab}>{user.ZerotoFifteen}</TableCell>
                                    <TableCell style={tab}>{user.MoreFifteen}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default DemandSummary;