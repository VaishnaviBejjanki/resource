import React, { Component } from "react";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@material-ui/core';
import onshoreResource from '../onshoreResource.json';

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

class OnshoreResource extends Component {
    render() {
        console.log('onshoreResource ', onshoreResource);
        return (
            <div>
                <div>
                    <br /><br />
                    <Table style={resourcebox}>
                        <TableHead>
                            <TableRow style={resource}>
                                <TableCell style={theadnv}>Onsite/OffshoreResource</TableCell>
                                <TableCell style={theadnv}></TableCell>
                                <TableCell style={theadnv}></TableCell>
                                <TableCell style={theadnv}></TableCell>
                                <TableCell style={theadnv}></TableCell>
                            </TableRow>
                            <TableRow style={resource}>
                                <TableCell style={thead}>Count of Reosource Name</TableCell>
                                <TableCell style={theadnv}></TableCell>
                                <TableCell style={theadnv}>Level</TableCell>
                                <TableCell style={theadnv}></TableCell>
                                <TableCell style={theadnv}></TableCell>
                            </TableRow>
                            <TableRow style={resource}>
                                <TableCell style={thead}>Project Manager</TableCell>
                                <TableCell style={thead}>Project Name</TableCell>
                                <TableCell style={thead}>TL</TableCell>
                                <TableCell style={thead}>(blank)</TableCell>
                                <TableCell style={thead}>Total HC</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {onshoreResource.onshoreResource.map(user => (
                                console.log('user ', user),
                                <TableRow
                                    hover
                                    key={user.id}
                                >
                                    <TableCell style={tab}>{user.ProjectManager}</TableCell>
                                    <TableCell style={tab}>{user.ProjectName}</TableCell>
                                    <TableCell style={tab}>{user.TL}</TableCell>
                                    <TableCell style={tab}>{user.blank}</TableCell>
                                    <TableCell style={tab}>{user.TotalHC}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default OnshoreResource;