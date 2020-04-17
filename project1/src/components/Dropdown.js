import React, { Component } from 'react';
import OverallResource from '../views/OverallResource';
import OffshoreResource from '../views/OffshoreResource';
import BillableNonbillable from './BillableNonbillable';
import OnshoreResource from '../views/OnshoreResource';
import UpcomingRolloff from '../views/UpcomingRolloff';

// const radio = {
//     display: "inline-flex",
//     marginLeft: "110px",
//     marginRight: "auto",
//     width: "50%"
  
//   }
  class Dropdown extends Component {
    constructor(props) {
      super(props);
      this.state = {
        option: 'option1',
        show1Flag: true,
        show2Flag: false,
        show3Flag: false,
        show4Flag: false
  
      };

    //   this.handleChange = this.handleChange.bind(this);
    //   this.handleChange2 = this.handleChange2.bind(this);
    //   this.handleChange3 = this.handleChange3.bind(this);
    //   this.handleChange4 = this.handleChange4.bind(this);
    //   this.handleChange5 = this.handleChange5.bind(this);
    }
  
    // handleChange(e) {
    //   this.setState({
    //     option: e.target.value,
    //     show2Flag: false,
    //     show1Flag: true,
    //     show3Flag: false,
    //     show4Flag: false,
    //     show5Flag: false
  
    //   })
    // }
    // handleChange2(e) {
    //   this.setState({
    //     option: e.target.value,
    //     show1Flag: false,
    //     show2Flag: true,
    //     show3Flag: false,
    //     show4Flag: false,
    //     show5Flag: false
    //   })
    // }
    // handleChange3(e) {
    //   this.setState({
    //     option: e.target.value,
    //     show1Flag: false,
    //     show2Flag: false,
    //     show3Flag: true,
    //     show4Flag: false,
    //     show5Flag: false
    //   })
    // }
    // handleChange4(e) {
    //   this.setState({
    //     option: e.target.value,
    //     show1Flag: false,
    //     show2Flag: false,
    //     show3Flag: false,
    //     show4Flag: true,
    //     show5Flag: false
    //   })
    // }
    // handleChange5(e) {
    //   this.setState({
    //     option: e.target.value,
    //     show1Flag: false,
    //     show2Flag: false,
    //     show3Flag: false,
    //     show4Flag: false,
    //     show5Flag: true
    //   })
    // }
    render() {
        return (
            <div style={{backgroundColor:"#D1E7FD"}}>
            {this.state.show1Flag ? <div><OverallResource /></div> : <div></div>}
            {this.state.show2Flag ? <div><BillableNonbillable /></div> : <div></div>}
            {this.state.show3Flag ? <div><OffshoreResource /></div> : <div></div>}
            {this.state.show4Flag ? <div><OnshoreResource /></div> : <div></div>}
            {this.state.show5Flag ? <div><UpcomingRolloff /></div> : <div></div>}
          </div>
              );
            }
          }
          
          export default Dropdown;

