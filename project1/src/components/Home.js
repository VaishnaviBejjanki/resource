import React, { Component } from 'react';
import {
    Popover, ButtonGroup,
   Tooltip, AppBar, Typography, IconButton, Toolbar, MenuItem, Tabs, Tab, Menu
} from '@material-ui/core';


const styles = theme => ({
    root: {
        marginTop: theme.spacing.unit * 3,
        width: '100%'
    },
    flex: {
        flex: 1
    },
    menuButton: {
        color: 'white',
        marginLeft: -12,
        marginRight: 20
    },
    toolbar: {
        marginTop: '150px',
        // ...theme.mixins.toolbar
    }

})

const navstyle = {
    display: 'flex',
    marginTop: '70px',
    position: 'absolute',
    height: '5%',
    //backgroundColor:'#22598D '
    //backgroundColor: '#245A90'
    backgroundColor: "#205282 "
}

const displaystyle = {
    display: 'flex',
}

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show1Flag: false,
            auth: true,
            Auth: true,
            anchorEl: null,
            AnchorEl: null,
            anchorReference: 'anchorEl',
            anchorReference: 'AnchorEl'
        };
        // Navigation 
        this.handleHeadcount = this.handleHeadcount.bind(this);
        this.handleResourceList = this.handleResourceList.bind(this);
        this.handleCapacityPlanning = this.handleCapacityPlanning.bind(this);
        this.handleDemandSummary = this.handleDemandSummary.bind(this);
        this.handleAseUtil = this.handleAseUtil.bind(this);
        this.handleRolloffList = this.handleRolloffList.bind(this);
        this.handleAseForecast = this.handleAseForecast.bind(this);
        this.handleResourceEntry = this.handleResourceEntry.bind(this);

        //Dropdowns
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleChange4 = this.handleChange4.bind(this);
        this.handleChange5 = this.handleChange5.bind(this);
    }
    //Dropdown Funtions
    handleChange(e) {
        this.setState({
            anchorEl: null
        })
        this.props.history.push('./overall-resource')

    }
    handleChange2(e) {
        this.setState({
            anchorEl: null
        })
        this.props.history.push('./billable-nonbillable')
    }
    handleChange3(e) {
        this.setState({
            anchorEl: null
        })
        this.props.history.push('./offshore-resource')
    }
    handleChange4(e) {
        this.setState({
            anchorEl: null
        })
        this.props.history.push('./onshore-resource')
    }
    handleChange5(e) {
        this.setState({
            anchorEl: null
        })
        this.props.history.push('./upcoming-rolloff')
    }

    handleMenu = event => {
        // this.props.history.push('./head-count')
        this.setState({
            anchorEl: event.currentTarget,
        });
    };
    handleASEMenu = event => {
        this.setState({
            AnchorEl: event.currentTarget
        })
    }
    handleASEClose = () => {
        this.setState({ AnchorEl: null });
    }

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    handleHeadcount = () => {
        this.props.history.push('./head-count')
        this.setState({
            show1Flag: false
        })
    };
    handleResourceList = () => {
        this.props.history.push('/resource-list');
    };
    handleCapacityPlanning = () => {
        this.props.history.push('/capacity-planning');
    }
    handleDemandSummary = () => {
        this.props.history.push('./demand-summary');
    }
    handleAseUtil = () => {
        this.props.history.push('/ase-util');
        this.setState({
            AnchorEl: null
        })
    }

    handleRolloffList = () => {
        this.props.history.push('/rolloff-list');
    }
    handleAseForecast = () => {
        this.props.history.push('/ase-forecast');
        this.setState({
            AnchorEl: null
        })
    }
    handleResourceEntry = () => {
        this.props.history.push('/resource-entry');
    }
    render() {
        const { auth, anchorEl } = this.state;
        const { Auth, AnchorEl } = this.state;
        const open = Boolean(anchorEl);
        const openASE = Boolean(AnchorEl);
        const id = open ? 'simple-popover' : undefined;
        const Id = openASE ? 'ASE-popover' : undefined;
        return (
            <div style={displaystyle}>
                <AppBar title="My App" style={navstyle} >
                    <Tabs
                        centered
                        
                        >
                        <Tab style={{color:'white', paddingBottom: '20px',fontWeight: '600', fontFamily: 'sans-serif' }} label="Resource Entry" onClick={this.handleResourceEntry} />
                        <Tab style={{color:'white', paddingBottom: '20px',fontWeight: '600', fontFamily: 'sans-serif'  }} className={styles.toolbar} label="Head Count" onClick={this.handleMenu} />
                        {auth && (
                            <Popover
                                id={id}
                                open={open}
                                style={{ top: '-16px'}}
                                anchorEl={anchorEl}
                                onClose={this.handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}>

                                <div style={{backgroundColor:"#D1E7FD" }}>
                                <MenuItem style={{ fontSize: '14px'}} onClick={this.handleChange}>Overall Resource <br/> Count</MenuItem>
                                <MenuItem style={{ fontSize: '14px'}} onClick={this.handleChange2}>Billable/NonBillable</MenuItem>
                                <MenuItem style={{ fontSize: '14px'}} onClick={this.handleChange3}>Offshore Resource</MenuItem>
                                <MenuItem style={{ fontSize: '14px'}} onClick={this.handleChange4}>Onshore Resource</MenuItem>
                                <MenuItem style={{ fontSize: '14px'}} onClick={this.handleChange5}>Upcoming RollOff<br />Summary</MenuItem>
                                </div>    
                            </Popover>
                        )}
                        <Tab style={{color:'white', paddingBottom: '20px' ,fontWeight: '600', fontFamily: 'sans-serif' }} label="Resource List" onClick={this.handleResourceList} />
                        <Tab style={{ color:'white',paddingBottom: '20px',fontWeight: '600', fontFamily: 'sans-serif'  }} label="Capacity Planning" onClick={this.handleCapacityPlanning} />
                        {/* <Tab style={{ paddingBottom: '20px' }} label="Demand Summary" onClick={this.handleDemandSummary} /> */}
                        <Tab style={{ color:'white',paddingBottom: '20px',fontWeight: '600', fontFamily: 'sans-serif'  }} label="ASE Information" onClick={this.handleASEMenu} />
                        {Auth && (
                            <Popover
                                id={Id}
                                open={openASE}
                                anchorEl={AnchorEl}
                                style={{ top: '-16px'}}
                                onClose={this.handleASEClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                            >
                                <div style={{backgroundColor:"#D1E7FD"}}>
                                <MenuItem style={{ fontSize: '14px'}}onClick={this.handleAseForecast}>ASE Forecast</MenuItem>
                                <MenuItem style={{ fontSize: '14px'}}onClick={this.handleAseUtil}>ASE Utilization</MenuItem>
                                </div>
                            </Popover>
                        )}
                        <Tab style={{ color:'white',paddingBottom: '20px',fontWeight: '600', fontFamily: 'sans-serif'  }} label="Roll Off List" onClick={this.handleRolloffList} />
                        {/* <Tab style={{ paddingBottom: '20px' }} label="ASE Forecast" onClick={this.handleAseForecast} /> */}

                    </Tabs>

                </AppBar>
            </div>

            // <div style={displaystyle}>
            //     <div >
            //         <Paper style={style}>
            //             <ButtonGroup orientation="vertical">
            //                 <Button onClick={this.handleHeadcount}>
            //                     ESI Headcount Summary</Button>
            //                 <Button onClick={this.handleResourceList}>
            //                     Resourse List</Button>
            //                 <Button onClick={this.handleCapacityPlanning}>
            //                     Capacity Planning</Button>
            //                     <Button onClick={this.handleDemandSummary}>
            //                     Demand Summary</Button>
            //                 <Button onClick={this.handleAseUtil}>
            //                     ASE Utilization</Button>
            //                 <Button onClick={this.handleRolloffList}>
            //                     Roll Off List</Button>
            //                 <Button onClick={this.handleAseForecast}>
            //                     ASE Forecast</Button>
            //             </ButtonGroup>
            //         </Paper>
            //     </div>
            //     {/* <div style={tablestyle}>
            //         {this.state.show1Flag ? <div><RadioButtons/></div> : <div></div>}
            //     </div> */}

            // </div>


        );
    }
}
export default Home;