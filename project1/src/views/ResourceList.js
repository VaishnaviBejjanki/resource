import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Sec from './Sec';

class ResourceList extends Component {
  constructor(props){
    super(props);
  
       this.state = {
          query: "",
          data: [],
          filteredData: [],
          opened:false,
          open: false,
          className: 'accordion-content accordion-close',
          headingClassName: 'accordion-heading'
        };
        
      }
       
        handleInputChange = event => {
          const query = event.target.value;
      
          this.setState(prevState => {
            const filteredData = prevState.data.filter(element => {
              return element.name.toLowerCase().includes(query.toLowerCase());
            });
      
            return {
              query,
              filteredData
            };
          });
        };
      
        getData = () => {
         fetch(`http://192.168.0.9:8099/resource/getDetails`)
            .then(response => response.json())
            .then(data => {
              const { query } = this.state;
              const filteredData = data.filter(element => {
                return (
                    element.name.includes(query));
              });
      
              this.setState({
                data,
                filteredData
              });
            });
        };
      
        componentWillMount() {
          this.getData();
        }
    

        renderLoading() {
          return (
              <div className="accordion-container">
                  <h1 className="error">Loading...</h1>
              </div>
          );
         }
        renderError() {
            return (
                <div>
                  error
                </div>
            );
        }
     
        renderPosts() {
          const { posts, loading, error } = this.state;
          if (error) {
              this.renderError();
          }
          return (
              <div>
                {this.state.filteredData.map(i => 
                  <Sec post={i} key={i.employeeid}/>
                )}
              </div>
          );
        }


        render() {

          const post = this.props.post;
          const { className } = this.state;
          const { headingClassName } = this.state;
          console.log(headingClassName);
          const { loading } = this.state;

          var { title} = this.state;
		      const { opened } = this.state;

		      if (opened){
			      title = <ExpandMoreIcon/>;
		      }else{
			      title =<ChevronRightIcon/>;
          }
          
          return (
            <div className="searchForm">
               <div style={{paddingLeft:"1300px"}}>
              <form>
               
                <input style={{width:'200px', height:'20px'}}
                  placeholder="Search for..."
                  value={this.state.query}
                  onChange={this.handleInputChange}
                />
              </form>
              <br/>

              </div>
              
              <Table style={{tableLayout:"fixed",backgroundColor:"#D9D9E7"}}>
              <TableHead >
                  <TableRow >
                      <TableCell style={{width:'20px'}}></TableCell>
                      <TableCell style={{fontWeight: "bold"}} >NAME</TableCell>
                      <TableCell style={{fontWeight: "bold"}} >LEVEL</TableCell>
                      <TableCell style={{fontWeight: "bold"}} >EMPLOYEE ID</TableCell>
                      <TableCell style={{fontWeight: "bold"}} >ENTERPRISE ID</TableCell>
                      <TableCell style={{fontWeight: "bold"}} >PROJECT NAME</TableCell>
                      <TableCell style={{fontWeight: "bold"}} >PROJECT MANAGER</TableCell>
                      <TableCell style={{fontWeight: "bold"}} >WORK LOCATION</TableCell>
                     
                   </TableRow>
              </TableHead>
              </Table>

            <div>
                {loading ? this.renderLoading() : this.renderPosts()}
            </div>
          </div>
          );
        }
      }

export default ResourceList;