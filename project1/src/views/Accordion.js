
import React from 'react';
import axios from 'axios';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
  } from '@material-ui/core';
import Section from './Section';


class Accordion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: null,
            loading: true,
            error: null,
            filteredData:[]
        };
    }

    
    componentDidMount() {
        // axios.get(`https://jsonplaceholder.typicode.com/posts`)
        axios.get(`http://192.168.0.9:8099/resource/getDetails`)
           
        .then(res => {
                const posts = res.data;
                
                this.setState({
                    posts,
                    loading: false,
                    error: null,
                    // filteredData
                });
            })
            .catch(err => {
                this.setState({
                    loading: false,
                    error: true
                });
     });
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
            // <div className="accordion-container">
            //     <h1>Accordion Component</h1>
            <div>
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
                {posts.map(post =>
                    <Section post={post} key={post.employeeid} />
                )}
            </div>
            </div>
        );
    }

    render() {

		/*
		* Using destructuring to extract the 'error' from state.
		*/

        const { loading } = this.state;
        return (
            <div>
                {loading ? this.renderLoading() : this.renderPosts()}
            </div>
        );
    }

}

export default Accordion;