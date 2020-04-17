import React, { Component } from 'react';
import OffOnshoreMix from '../views/OffOnshoreMix';
import OffOnshoreTable from '../views/OffOnshoreTable';

class BillableNonbillable extends Component {
  render() {
    return (
      <div>
        <br />
        <OffOnshoreTable />
        <br /><br />
        <OffOnshoreMix />
        <br />
      </div>

    );
  }
}
export default BillableNonbillable;
