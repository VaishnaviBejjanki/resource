import React, { Component } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@material-ui/core';
import offOnShore from '../offOnShore.json';

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
const tab = {

    borderRight: '1px solid',
    borderColor: '#000000',
    fontSize: "13px"

}


class OffOnshoreTable extends Component {
    render() {
        console.log('offOnShore ', offOnShore);
        return (
            <div>
                <br /><br />
                <Table style={resourcebox}>
                    <TableHead>
                        <TableRow style={resource}>
                            <TableCell style={thead}>Onshore/Offshore</TableCell>
                            <TableCell style={thead}>Client Billable</TableCell>
                            <TableCell style={thead}>(blank)</TableCell>
                            <TableCell style={thead}>Total HC</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {offOnShore.offOnShore.map(user => (
                            console.log('user ', user),
                            <TableRow
                                hover
                                key={user.id}
                            >
                                <TableCell style={tab}>{user.OnshoreOffshore}</TableCell>
                                <TableCell style={tab}>{user.ClientBillable}</TableCell>
                                <TableCell style={tab}>{user.blank}</TableCell>
                                <TableCell style={tab}>{user.TotalHC}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>


            </div>
        )
    }
}

export default OffOnshoreTable;
