import React, { Component } from "react";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core';
import offshoreResource from '../offshoreResource.json';

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

class OffshoreResource extends Component {
    render() {
        console.log('offshoreResource ', offshoreResource);
        return (
            <div>
                <div>
                    <br /><br /><br />
                    <Table style={resourcebox}>
                        <TableHead>
                            <TableRow style={resource}>
                                <TableCell style={thead}>Onsite/OffshoreResource</TableCell>
                                <TableCell style={theadnv}>Offshore</TableCell>
                                <TableCell style={theadnv}></TableCell>
                                <TableCell style={theadnv}></TableCell>
                                <TableCell style={theadnv}></TableCell>
                                <TableCell style={theadnv}></TableCell>
                                <TableCell style={theadnv}></TableCell>
                            </TableRow>
                            <TableRow style={resource}>
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
                                <TableCell style={thead}>Grand Total</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {offshoreResource.offshoreResource.map(user => (
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

export default OffshoreResource;




// import React, { Component } from "react";


// class OffshoreResource extends Component {
//     render() {
//         return (
//             <div>
//                 <table border="1px black collapse" >
//                     <tr>
//                         <th>Count of Resourse Name</th>
//                         <th>Level</th>
//                     </tr>
//                     <tr>
//                         <th>Project Manager</th>
//                         <th>Project Name</th>
//                         <th>M</th>
//                         <th>TL</th>
//                         <th>SSE</th>
//                         <th>ASE</th>
//                         <th>Grand Total</th>
//                     </tr>
//                     <tr>
//                         <td>(blank)</td>
//                         <td>(blank)</td>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                     </tr>
//                     <tr>
//                         <td>Jani Bhasha</td>
//                         <td></td>
//                         <td>1</td>
//                         <td>3</td>
//                         <td>3</td>
//                         <td>1</td>
//                         <td>8</td>
//                     </tr>
//                     <tr>
//                         <td>Grand Total</td>
//                         <td></td>
//                         <td>1</td>
//                         <td>3</td>
//                         <td>3</td>
//                         <td>1</td>
//                         <td>8</td>
//                     </tr>
//                 </table>
//             </div>
//         )
//     }
// }
// export default OffshoreResource;