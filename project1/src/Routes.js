import React from 'react';
import { Switch } from 'react-router-dom';
import RouteLayout from './components/RouteLayout';
import ResourceList from "./views/ResourceList";
import CapacityPlanning from './views/CapacityPlanning';
import DemandSummary from './views/DemandSummary';
import AseUtil from './views/AseUtil';
import RolloffList from './views/RolloffList';
import AseForecast from './views/AseForecast';
import ResourceEntry from './components/ResourceEntry';
import OverallResource from './views/OverallResource';
import BillableNonbillable from './components/BillableNonbillable';
import OffshoreResource from './views/OffshoreResource';
import OnshoreResource from './views/OnshoreResource';
import UpcomingRolloff from './views/UpcomingRolloff';

const Routes = () => {
    return (
        <Switch>
            <RouteLayout
                component={OffshoreResource}
                exact
                path="/offshore-resource"
            />
            <RouteLayout
                component={OverallResource}
                exact
                path="/overall-resource"
            />
            <RouteLayout
                component={BillableNonbillable}
                exact
                path="/billable-nonbillable"
            />
            <RouteLayout
                component={OnshoreResource}
                exact
                path="/onshore-resource"
            />
            <RouteLayout
                component={UpcomingRolloff}
                exact
                path="/upcoming-rolloff"
            />
            <RouteLayout
                component={ResourceList}
                exact
                path="/resource-list"
            />
            <RouteLayout
                component={CapacityPlanning}
                exact
                path="/capacity-planning"
            />
            <RouteLayout
                component={DemandSummary}
                exact
                path="/demand-summary"
            />
            <RouteLayout
                component={AseUtil}
                exact
                path="/ase-util"
            />
            <RouteLayout
                component={RolloffList}
                exact
                path="/rolloff-list"
            />
            <RouteLayout
                component={AseForecast}
                exact
                path="/ase-forecast"
            />
            <RouteLayout
                component={ResourceEntry}
                exact
                path="/resource-entry"
            />
        </Switch>
    );
};

export default Routes;