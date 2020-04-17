
import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import MaterialTable from 'material-table';
import axios from 'axios';
import Expand from './Expand';
class SearchBar extends Component {
        state = {
          query: "",
          data: [],
          filteredData: [],
          count:0
        };
      
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
              this.setState({
                count:this.state.count+1,
              })
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
      
      
        render() {
          // console.log({this.count})
          return (
            <div className="searchForm">
              <form>
                <input
                  placeholder="Search for..."
                  value={this.state.query}
                  onChange={this.handleInputChange}
                />
              </form>

             <div>
              {this.state.filteredData.map(i =>
                
                <Expand i/>
                
                
                )}
              </div>


                {this.state.count}
              </div>
          );
        }
      }

export default SearchBar;