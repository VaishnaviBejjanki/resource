import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@material-ui/core';

export default function ControlledExpansionPanels() {
  
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary>
           <Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Enterprise ID</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Vaishnavi</TableCell>
                        <TableCell>vaishnavi.bejjanki</TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell>Shiva</TableCell>
                    <TableCell>s.nallabelli</TableCell>
                    </TableRow>
                </TableBody>
            </Table>

          </Typography>
          
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
         
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Primary Skill</TableCell>
                       
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>React</TableCell>
                       
                    </TableRow>
                </TableBody>
            </Table>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
     
    </div>
  );
}